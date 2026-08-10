# The channel

**The channel:** <https://www.youtube.com/@intervalatsix>
Channel ID `UCHf12GpzEesKkt_H9wSuz-g`. Named **Interval at Six**, handle set, no
videos on it yet. The old `@setty-balgatti` handle still redirects to it.

Studio: `studio.youtube.com/channel/UCHf12GpzEesKkt_H9wSuz-g` — signed in only.

## Upload to the right channel

There is a second channel on this login: **`UCDwPVv1p9wjcV6JfiRlrefg`**, titled
**Raju Palasamudrum**. That is the personal one, and it carries the real name
this project deliberately keeps off everything else.

**Check the account picker before every upload.** YouTube defaults to whichever
channel you last used, and an upload that lands on the personal channel puts the
real name on a public video — which is the exact thing the Guru Gyaan byline,
the noreply commit address and the pen-name LICENSE all exist to prevent. It is
a two-second check and an awkward thing to undo.

## What is left for you, and why

**I can't press upload.** Publishing to a public channel, and signing into the
account behind it, are both yours. Everything on either side of that — the
edition, the recording cut, the script, the artwork, the title, description,
chapters and tags — is in this repo and is done.

Once an `.mp4` exists I can drive Studio in your signed-in Chrome and fill the
whole upload form out from the script file. I will stop on the review screen and
show you what is about to go live before anything is published.

## Naming — done

The show is **Interval at Six**. The interval is the half-time break in an Indian
cinema; the six is both six stories and six o'clock. Nothing else is using the
name — it was checked before it was chosen.

Channel name and handle are both set. Nothing outstanding here.

### The six is a promise about a clock

Put a number in the name and people hold you to it. **Publish at 6pm IST**, say
so in the channel description, and hold it — a daily lives on the habit more
than on any single video.

If a day runs late, the name still survives, because *six* is also the six
stories, and that half is locked into the format and enforced by the verifier.
That ambiguity is deliberate. Do not lean on it twice a week.

## Setting it up

1. If the channel is on your personal profile rather than a **Brand Account**,
   move it now. YouTube lets you transfer a Brand Account between owners later;
   a personal channel is welded to the login.
2. **Channel name:** `Interval at Six`, per the section above.
3. **Avatar:** export [`avatar.svg`](avatar.svg) to PNG at 800×800.
   **Banner:** export [`banner.svg`](banner.svg) to PNG at 2560×1440.
   Both use the deck's own palette — void black, hot pink, gold, halftone — and
   the banner carries the progress rail across the top, so the channel page and
   the cards read as one thing. The banner's readable content sits inside the
   1546×423 centre box, which is all a phone shows.
4. **Description:** the paragraph below. It states the sourcing promise, because
   that is the actual differentiator against every other daily film-news channel.

```
Six things that actually happened in Hindi cinema — releases, box office,
casting, streaming. Ninety seconds to read, five minutes to watch.

New edition every day at 6pm IST.

Every claim is sourced and every source is linked in the description. Forecasts
are labelled as forecasts, not reported as results. Corrections go at the top of
the next day's edition.
```

5. **Defaults** (Settings → Upload defaults) — set these once and stop retyping
   them: visibility Public, category People & Blogs, comments on with
   hold-for-review, licence Standard YouTube, and **"altered content" disclosure
   ON**.
   The disclosure is on because the narrator is a synthetic voice — see
   **The voice** below. It would come off only if the show moved to a human
   read. The cards themselves need no disclosure: original type and colour, no
   likenesses, no photographs.

## No celebrity voice — settled, do not relitigate

**No celebrity voice. Not cloned, not synthesised, not "just for the intro".**
This was decided on 9 August 2026 and the reasons do not expire.

### The legal position

Delhi High Court has been granting *ex parte* injunctions covering actors'
voices against AI cloning — Anil Kapoor (2023), Aishwarya Rai Bachchan (2025),
Allu Arjun and Ravi Kishan (2026). In the Ravi Kishan matter the court directed
**YouTube specifically** to take down cloned-voice content. *Ex parte* means the
order arrives before you have been heard.

A Hindi film news channel using a Hindi film star's voice is maximally visible
to exactly the people and the law firms who bring these. This is not a grey
area, and it is not one of those risks that is small because the channel is
small — the takedown is cheap for them to obtain.

### The commercial position, which matters more

The only thing this channel has is that it does not make things up. Every card
sourced, forecasts labelled as forecasts, corrections at the top of the next
edition. That is the whole differentiator against Filmygyan and the hundred
others.

A synthesised star voice makes it a deepfake channel from video one, and no
amount of careful sourcing underneath will matter after that. It is the same
rule as **no photographs**, applied to audio: nobody's likeness, in any medium.

## The voice — settled

**`Tara`, the Indian-English voice built into macOS, at 130wpm.** Decided
9 August 2026. Generated by `scripts/make-voice.sh`, free, offline, no account,
no per-episode cost and no per-episode time.

That last part is the whole argument. Reading four minutes aloud every single
day is the thing most likely to end this by week six, and a daily that stops is
worth less than a daily with an imperfect voice.

### What it costs

**The channel has no host.** People subscribe to a person, and a system voice is
nobody. There is no pretending otherwise — so the sourcing has to do the work
the presenter would have done. The promise on the front page and the source chip
on every card are not decoration here; they are the entire reason to watch this
rather than something with a face.

### Disclosure — on, and staying on

A synthetic narrator gets **YouTube's altered-content disclosure turned on**,
permanently, not for a trial period. It is one toggle in the upload defaults.

YouTube's own line is about *whose* voice it is: cloning your own is reported as
exempt, cloning someone else's is not. Tara is neither — it is nobody's voice,
which is not clearly inside that exemption. Disclose and stop thinking about it.
A channel that labels forecasts as forecasts labels a synthetic voice as
synthetic, and the consistency is worth more than the toggle costs.

### If it is ever revisited

The alternatives, in the order they would be worth trying:

1. **Your own voice, cloned from your own recordings** — the section below.
2. **A hired voice artist**, with a written buyout covering commercial YouTube
   use, and the same artist every time so the channel has one voice.

Neither is pending. They are written down so the decision can be reopened
deliberately rather than drifted into.

## Optional — cloning your own voice

### Getting a clone that is worth using

ElevenLabs is the obvious tool. It offers two tiers and the difference matters:

- **Instant cloning** wants one to three minutes of audio. Usable tomorrow, and
  it sounds it — flat, and it drifts on long paragraphs. Needs the **Starter**
  plan, around $5 a month; it is not on the free tier.
- **Professional cloning** wants around thirty minutes. Materially better, and
  for a daily where the same voice shows up every day, worth waiting for. Sits
  on **Creator**, around $22.

Starter is also the tier that carries **commercial usage rights**. A public
channel needs those, so this is not the place to economise.

**If you go this route, read the first six editions yourself.** Six scripts is
almost exactly the thirty minutes a professional clone wants — and it is thirty
minutes of you reading *this show*, at the right pace, saying these kinds of
names. That is far better training data than thirty minutes of anything else,
and it means the reading you do in week one is not wasted effort, it is the
thing that buys you the clone in week two.

Recording quality: consistency beats equipment. Same mic, same room, same
distance from it, every time. A phone in a small room with soft furniture beats
a good mic in a kitchen.

### If you clone, keep two things human

Cloning the whole script is a mistake even once the clone is good.

- **The cold open (0:00–0:18).** The first eight seconds are the entire
  retention game and a synthetic read is audibly flat exactly there.
- **The quiet card (3:05–3:50).** A machine reading the Partition survivors
  card is precisely the wrong instrument. This is the same rule as the card
  having no colour wash and no sound effect.

That is about a minute of real reading a day against four minutes generated —
which is the whole saving, without giving up the two places delivery matters.

### The daily loop, once the clone exists

This is yours to run — the cloning service and the upload both need an account
signed in as you, so neither is something that can be handed off. It is about
ten minutes a day against four minutes of reading, and unlike the reading it
does not need you to sound awake.

1. Open the clone in ElevenLabs.
2. Paste **`scripts/YYYY-MM-DD.voice.txt`** — the voiceover with the stage
   directions stripped out and the names already respelled. It is built to be
   pasted whole, with nothing to edit first.
3. Generate, listen once end to end, download the MP3.
4. Anything mispronounced: fix it in the text, regenerate, and **add the row to
   [`../scripts/PRONUNCIATION.md`](../scripts/PRONUNCIATION.md)** so it is a
   one-time cost rather than a daily one.
5. Drop the MP3 and the screen recording into iMovie, snap the audio to the
   white flash frame, trim the slate, export.

**No manual pause work.** The gaps between paragraphs and cards are baked into
the generated audio, and the deck was timed off that exact file. Line the audio
start to the white flash and the two track each other to the end.

If you record the cold open and the quiet card yourself, they are the **first**
and **fifth** blocks of the voice file in script order — delete those two before
pasting and splice your own takes in. See the section above for why that is
worth the extra minute.

### The hidden cost: proper nouns

Text-to-speech falls over on exactly the words this show is made of. *Batwara*,
*Bayangi: Palaychi Nahi, Talaychi*, *Jugal Hansraj*, *Namit Malhotra*.

The running list is [`../scripts/PRONUNCIATION.md`](../scripts/PRONUNCIATION.md),
already seeded from edition one along with the rules that apply every time —
spell numbers out, put full stops in initialisms, strip quotation marks. Every
`.voice.txt` is respelled from it before it ships.

The entries there were written **without hearing the output**, so treat them as
first guesses. Listen to the first generation properly, correct the rows, and
the list stops costing you anything by about week three.

Getting a name wrong on a Hindi film channel is not a small error to the
audience. Budget the ten minutes.

### What stays fine

**Quoting.** A celebrity's words, in text, with attribution and a source link —
card five of edition one does exactly this with Jugal Hansraj, and that is the
model. Words are quotable. Voices and faces are not.

## Recording the video

There is a purpose-built cut for this: [`../record/2026-08-09.html`](../record/2026-08-09.html).
It is the same edition rendered on a fixed **1080×1920** canvas that plays itself
for 4:27, advancing on the script's timecodes, with the push-ins and punch-ins
already programmed. You record it in one pass instead of swiping by hand and
hoping the timing lands.

1. Open it, press **F** for fullscreen, then **Space** to roll. `1`–`8` parks on
   a single card if you want to check a frame first. `R` restarts.
2. It runs a **3-2-1 slate and then a single white flash frame**. That flash is
   your sync point — line the voice-over up to it in the edit and every card
   lands where the script says it does.
3. Record with **QuickTime → New Screen Recording**, dragging a selection around
   the 9:16 frame only. The instruction bar at the bottom of the page hides the
   moment you roll, so it is never in shot.
4. Record the voice-over separately, reading the script at a steady 150wpm.
   Drop both into iMovie, snap the audio to the flash, trim the slate off the
   front, export 1080×1920.

Make a fresh `record/YYYY-MM-DD.html` per edition — copy the last one and swap
the card content and the `MARKS` array to match the new script.

## The daily loop

Roughly ninety minutes end to end once the reading is done.

| | Step | Where |
| --- | --- | --- |
| 1 | Read the trades. Pick six stories, one per slot. | Bollywood Hungama, Koimoi, Pinkvilla, Sacnilk |
| 2 | Save the URL for each before writing a word. No URL, no card. | — |
| 3 | `cp template.html editions/YYYY-MM-DD.html`, fill it in, pick the washes. | [`../template.html`](../template.html) |
| 4 | Add the edition to `index.html` — latest card and archive row. | [`../index.html`](../index.html) |
| 5 | `jsc verify.js` — must pass before anything else happens. | [`../verify.js`](../verify.js) |
| 6 | Write `scripts/YYYY-MM-DD.md` off the finished edition. | [`../scripts`](../scripts) |
| 7 | Record voice to the script, and screen-record the recording cut. | [`../record`](../record) |
| 8 | Cut to the timecodes. Source super on screen for every card. | — |
| 9 | Upload with the title, chapters, description and tags from the script file. | — |
| 10 | Push the repo so the written edition is live when the video is. | — |

## Rules that are worth keeping when it gets tiring

- **The source super is not decoration.** Outlet name on screen the whole time a
  card is being discussed. It is what stops this from being a rumour channel.
- **A projection never gets said as a result.** On screen it gets the gold
  PROJECTION chip; in the voice-over it gets the word "forecast".
- **The quiet card stays quiet.** No sting, no push-in, no joke on stories about
  things that happened to real people. Drop the music bed entirely.
- **No photographs, ever.** Not of actors, not of posters. Everything is type
  and colour. That keeps you clear of likeness and still-image licensing, and it
  is also what makes the channel look like one thing rather than a reupload.
- **Corrections go at the top of the next edition**, on the cards, not quietly
  edited into a description. You will need this rule the first week.

## The five-minute shape

The script template is built around it and it is worth not drifting from:

| | |
| --- | --- |
| 0:00 | Cold open — name the three best stories, no throat-clearing |
| 0:18 | Lead card, the longest section, about a minute |
| 1:20 | Money |
| 2:15 | What releases next |
| 3:05 | The quiet one |
| 3:50 | The human one |
| 4:30 | Streaming and television, fast |
| 4:52 | Desk note and sign-off |

Cold open before any branding. A five-minute daily has no room for an intro
sequence, and the first eight seconds are the whole retention game.
