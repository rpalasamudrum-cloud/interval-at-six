// Comic Gyaan verifier.
//
// Runs on macOS's built-in JavaScriptCore — this machine has no node:
//
//   /System/Library/Frameworks/JavaScriptCore.framework/Versions/A/Helpers/jsc verify.js
//
// It reads the shipped HTML, so it checks exactly what gets published. Run it
// after every hand-edit and before every push. index.html is the manifest: an
// edition that is not linked from index.html is not checked, which is itself
// the check that you remembered to link it.

var failures = [];
var checked = [];

function fail(where, msg) { failures.push(where + ': ' + msg); }

function read(path) {
  try { return readFile(path); }
  catch (e) { return null; }
}

// ---------------------------------------------------------------- house style

// Emoji blocks, plus the variation selector that usually rides with them.
var EMOJI = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{1F000}-\u{1F0FF}]/u;

function checkHouseStyle(name, html) {
  if (EMOJI.test(html)) fail(name, 'contains an emoji');
  if (/gradient\s*\(/.test(html)) fail(name, 'contains a CSS gradient');
  if (/box-shadow|text-shadow|filter\s*:\s*drop-shadow/.test(html)) fail(name, 'contains a shadow');
  if (/backdrop-filter/.test(html)) fail(name, 'contains a backdrop filter');

  var stray = html.match(/__[A-Z0-9_]+__/g);
  if (stray) fail(name, 'unfilled placeholder ' + stray[0]);

  // Photographs are not allowed — every panel is drawn.
  if (/<img\b/.test(html)) fail(name, 'contains an <img>; panels are drawn, not photographed');
}

// ------------------------------------------------------------------- editions

function checkEdition(name, html) {
  checkHouseStyle(name, html);

  var panels = html.split('<article class="panel');
  panels.shift();

  if (panels.length !== 6) fail(name, 'has ' + panels.length + ' panels, expected 6');

  for (var i = 0; i < panels.length; i++) {
    // Stop at the closing tag, or the last panel swallows the desk notes.
    var p = panels[i];
    var end = p.indexOf('</article>');
    if (end !== -1) p = p.slice(0, end);
    var n = 'panel ' + (i + 1);

    if (p.indexOf('class="cite"') === -1) {
      fail(name, n + ' has no source line');
    } else {
      var cite = p.slice(p.indexOf('class="cite"'));
      cite = cite.slice(0, cite.indexOf('</p>'));
      if (!/href="https:\/\//.test(cite)) fail(name, n + ' cites no source URL');
      if (!/class="tag"/.test(cite)) fail(name, n + ' has no Reported tag');
    }

    if (p.indexOf('class="cap"') === -1) fail(name, n + ' has no caption box');
    if (!/class="num"/.test(p)) fail(name, n + ' has no panel number');

    // The quiet-panel rule: a panel marked quiet must not carry a sound effect.
    if (p.indexOf('quiet"') === 0 || /^ quiet"/.test(p)) {
      if (/class="sfx"/.test(p)) fail(name, n + ' is marked quiet but carries a sound effect');
    }

    // Anything described as a projection has to be flagged as one on the panel.
    if (/projection/i.test(p) && !/class="tag projection"/.test(p)) {
      fail(name, n + ' talks about a projection without the Projection tag');
    }
  }

  if (html.indexOf('class="desk"') === -1) fail(name, 'has no desk notes');
  if (!/<title>Comic Gyaan/.test(html)) fail(name, 'title does not start with Comic Gyaan');

  // Every id referenced by a fill must be defined somewhere in the document.
  var refs = html.match(/url\(#([A-Za-z0-9_-]+)\)/g) || [];
  for (var r = 0; r < refs.length; r++) {
    var id = refs[r].slice(5, -1);
    if (html.indexOf('id="' + id + '"') === -1) fail(name, 'fill url(#' + id + ') has no matching definition');
  }
}

// ---------------------------------------------------------------------- index

var index = read('index.html');
if (index === null) {
  fail('index.html', 'missing');
} else {
  checkHouseStyle('index.html', index);

  var links = index.match(/href="(editions\/[0-9-]+\.html)"/g) || [];
  var seen = {};
  var order = [];
  for (var i = 0; i < links.length; i++) {
    var path = links[i].slice(6, -1);
    if (!seen[path]) { seen[path] = true; order.push(path); }
  }

  if (order.length === 0) fail('index.html', 'links to no editions');

  for (var j = 0; j < order.length; j++) {
    var html = read(order[j]);
    if (html === null) { fail('index.html', 'links to ' + order[j] + ', which does not exist'); continue; }
    checked.push(order[j]);
    checkEdition(order[j], html);

    // Editions sit one level down, so the way back up must be relative.
    if (html.indexOf('href="../index.html"') === -1) {
      fail(order[j], 'has no link back to the index');
    }
  }
}

// -------------------------------------------------------------------- scripts

// A published edition without a video script is a half-finished day.
for (var k = 0; k < checked.length; k++) {
  var date = checked[k].replace('editions/', '').replace('.html', '');
  var script = read('scripts/' + date + '.md');
  if (script === null) {
    fail('scripts/' + date + '.md', 'missing — every edition needs its script');
  } else if (script.indexOf('editions/' + date + '.html') === -1) {
    fail('scripts/' + date + '.md', 'does not point back at its edition');
  }
}

// --------------------------------------------------------------------- report

print('');
print('Comic Gyaan — verify');
print('--------------------');
print('editions checked: ' + checked.length + (checked.length ? '  (' + checked.join(', ') + ')' : ''));
print('');

if (failures.length === 0) {
  print('PASS — nothing to fix.');
} else {
  print('FAIL — ' + failures.length + ' problem' + (failures.length === 1 ? '' : 's') + ':');
  for (var f = 0; f < failures.length; f++) print('  ' + (f + 1) + '. ' + failures[f]);
}
print('');
