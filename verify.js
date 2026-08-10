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
//
// What it does NOT police any more: gradients, shadows and blurs. The deck is
// deliberately loud. What it still polices is everything the editorial standing
// or the legal position depends on.

var failures = [];
var checked = [];

function fail(where, msg) { failures.push(where + ': ' + msg); }

function read(path) {
  try { return readFile(path); }
  catch (e) { return null; }
}

// ---------------------------------------------------------------- house style

// Emoji blocks, plus the variation selector that usually rides with them.
// Badges and chips do the job emoji would do, and do it without looking cheap.
var EMOJI = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{1F000}-\u{1F0FF}]/u;

function checkHouseStyle(name, html) {
  if (EMOJI.test(html)) fail(name, 'contains an emoji');

  var stray = html.match(/__[A-Z0-9_]+__/g);
  if (stray) fail(name, 'unfilled placeholder ' + stray[0]);

  // No stills, no paparazzi shots, no likenesses. This one is a legal position,
  // not a taste one, so it is a hard failure.
  if (/<img\b/.test(html)) fail(name, 'contains an <img>; no photographs, ever');
}

// ------------------------------------------------------------------- editions

function checkEdition(name, html) {
  checkHouseStyle(name, html);

  if (!/<title>Comic Gyaan/.test(html)) fail(name, 'title does not start with Comic Gyaan');
  if (html.indexOf('id="deck"') === -1) fail(name, 'has no deck');
  if (html.indexOf('id="rail"') === -1) fail(name, 'has no progress rail');
  if (html.indexOf('scroll-snap-type') === -1) fail(name, 'deck does not snap');

  var cards = html.split('<section class="card');
  cards.shift();
  for (var i = 0; i < cards.length; i++) {
    var end = cards[i].indexOf('</section>');
    if (end !== -1) cards[i] = cards[i].slice(0, end);
  }

  var opens = 0, ends = 0, stories = 0, quiets = 0;

  for (var c = 0; c < cards.length; c++) {
    var card = cards[c];
    var isOpen  = /^ open"/.test(card);
    var isEnd   = /^ end"/.test(card);
    var isQuiet = /^ quiet"/.test(card);

    if (isOpen) { opens++; continue; }

    if (isEnd) {
      ends++;
      if (card.indexOf('class="notes"') === -1) fail(name, 'the end card has no desk notes');
      continue;
    }

    stories++;
    if (isQuiet) quiets++;
    var n = 'story card ' + stories;

    // The one rule the whole project rests on.
    var src = card.match(/class="src" href="(https:\/\/[^"]+)"/);
    if (!src) fail(name, n + ' has no source link');

    if (card.indexOf('class="chiprow"') === -1) fail(name, n + ' has no chips');
    if (card.indexOf('class="head"') === -1)    fail(name, n + ' has no headline');
    if (!/data-label="[^"]+"/.test(card))       fail(name, n + ' has no rail label');

    // Anything hedged as a forecast has to wear the warning chip, so a reader
    // skimming the card cannot mistake it for a result.
    if (/forecast|projection|projected|estimate/i.test(card) && card.indexOf('class="chip warn"') === -1) {
      fail(name, n + ' hedges a number without the warning chip');
    }

    // The quiet card stays quiet: no watermark numeral shouting behind it.
    if (isQuiet && card.indexOf('class="ghost"') !== -1) {
      fail(name, n + ' is the quiet card but carries a ghost numeral');
    }
  }

  if (opens !== 1)   fail(name, 'has ' + opens + ' opening cards, expected 1');
  if (ends !== 1)    fail(name, 'has ' + ends + ' end cards, expected 1');
  if (stories !== 6) fail(name, 'has ' + stories + ' story cards, expected 6');
  if (quiets !== 1)  fail(name, 'has ' + quiets + ' quiet cards, expected exactly 1');
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
