---
title: "My Musical Journey"
date: 2020-03-09
toc:  true
tags:
 - music
---

### Bands

During my youth I was in a number of original bands and cover bands, as a
bassplayer, singer and songwriter.

1984-1989 Thanks for the Fish<br/>

* Originated in Brisbane, Australia. Played many support gigs to great bands
  and I'm proudest of our record of benefit gigs for various causes. Moved to
  Melbourne in early 1988 but did not get much traction and eventually broke
  up. 80's indie punk/pop. Made several demo tapes and a single vinyl release.

1989-1991 Colour Jungle<br/>

* Melbourne. Formed with some friends, we had the great fortune of enjoying
  the talent of the remarkable John Lee of the Dingos. General rock and roll.
  Released a cassette of various tunes.

1991-1992 Caplights<br/>

* The Caplights were a Melbourne accoustic/electric band of a similar genre to
  the better-known Things of Stone and Wood. Toured extensively around
  Victoria and put out a CD release and promptly disbanded.

1992 The Great Curve<br/>

* Formed as a pickup after-hours cover band for The Club in Collingwood, the
  Curve were a fearless blend of new wave and trashy pop revisionism. They
  have been known to reform for festive occasions and torment their surviving
  fans.

### Instruments and gear

Chiefly bass, also keyboards, guitar, electronic instruments.

#### Basses

* Mr White: G&L SB-2 Tribute with ghs pressurewounds. My very favourite
  instrument.  Although made in Indonesia, it has virtually the same
  components as the USA_made ones in a standard package. Mine is the white
  with a  black pickguard, occasionally G&L change these colours.

* Mr Black: Black Washburn XB125 5-string active bass. DR Rainbow Neons. Great
  5-string for the price, and DR's give it a lovely warmth. Also made in
  Indonesia and is also a fantastic budget bass.

* Mr Brown: Brown stained Stagg BC300FL A fretless PJ bass, ghs flats. Neck
  unfortunately warped and the pickups are weak, so this needs some work.

* Mr Blue: Red Metallic Riverhead Headless longscale. This odd bass is a
  Riverhead version of the classic Steinberger shape but in wood! This bass is
  very old and battered, having gigged a lot and is retired pending a miracle
  of reworking!

#### Alesis SR-16 drum machine

A drum machine from the early '90s that only ceased production in 2003! The
reason is the excellent quantiser and the solid sequencing and MIDI output.
You can input effects and audio to spice up the admittedly unexciting kits,
and it's got some good panning. The sequencer can be fooled to create
different time signatures for different patterns which then can be alternated
in song mode. It misses some onboard effects but stimulates creativity.

#### Novation Bass Station II

A monophonic analog synthesizer, it really ticks all the boxes for basic
synthesis for me. I love the aftertouch on the full-size keys, and the filter
setup is really intuitive. I do find the arpegiattor and sequencer to be the
most odd part of the machine, it takes some getting used to. It's a fantastic
little unit for lead lines and silly noises! I'm in the market for a polysynth
to deal with pads and some effects and my synthesiser world would be complete.
The other really nice thing is that it's uncomplicated to use as a MIDI
synth/controller under several OSes. I've not used it under Windows, but I've
been able to successfully read/write patches to/from it in Linux and use
Rosegarden without issues. It's quite loud, actually, I have to record
carefully in Audacity.

#### Steinberg UR22 USB Audio Interface

Great USB interface usable under Linux as well as windows/mac. The mono inputs
can fool you with panning from stereo interfaces, but its clean DACs are
amazing. Very useful in MIDI situations where you want to sync between a
couple of machines which can't do so directly themselves, and important for
outputting MIDI data to a DAW.

At one time before the later 3.16.x series of Linux kernels,
`linux/sound/usb/quirks-table.h` had to be modified for the UR22 in a
similar way to that for the Boss GT-10B, but thankfully it's a standard part
of the kernel since then. Depending on your setup, if you use pulseaudio, you
will have to kill it to allow native programs like audacity access the ALSA
channels to get input. When I'm not recording with it, I use the UR22 as a
simple practice interface by looping a line in from the computer to one of the
inputs, and plugging an instrument and headphones in. Some music will suffer
from the mono input but it does well enough!

#### AKG Perception 220 Condenser Microphone

Best value Neumann-design based microphone. I don't know what the 2nd
version/usb version are like, I have the XLR version. Perfect for vocals and
simple accoustic instrument recordings.

#### Boss GT-10B Bass effects processor

Although superseded by later models, this is an amazing deal if you like
your Boss effects. There is a [utility][1] to be able to reprogram it from a PC.
Linux users have to get their hands dirty with a patch to the ALSA usb driver
in quirks-table.h. This file is a moving target: in recent kernels the entries
for the Boss GT models has been removed. The catch-all entry won't work
because the usb interface has a couple of specific modes, but don't be
frightened, it's not that difficult a patch:

First find `linux/sound/usb/quirks-table.h` and make a backup file
first! Then open the original in an editor and search for the Roland section
either by name or by vendor id `0x0582`. The file is sorted in
ascending order by device id, so we want to put our patch after ids
`0x0cxx` and before ids `0x0exx`, which puts us inbetween
two Roland Edirol models currently. Search for the Edirol UA-25EX and work
back from there. Found it? Good. Fortunately the syntax for usb quirks hasn't
changed, particularly for Roland/Boss devices so this patch should work for a
number of kernels in the 3.x.x series. You'll have to apply it by hand, of
course, so select and paste the following code into a text file and copy that
just before the leading `{` of the UA-25X entry:

~~~ c


{
	/* BOSS GT-10B */
	/* FIXME: this driver is assumed to work like its guitar brother the
	 * GT-10, but there may be subtle differences which need debugging.
	 * Standard mode is 0x00dd, Advanced is 0x00dc
	 */
	USB_DEVICE(0x0582, 0x00dc),
	.driver_info = (unsigned long) & (const struct snd_usb_audio_quirk) {
		.vendor_name = "BOSS",
		.product_name = "GT-10B",
		.ifnum = QUIRK_ANY_INTERFACE,
		.type = QUIRK_COMPOSITE,
		.data = (const struct snd_usb_audio_quirk[]) {
			{
				.ifnum = 0,
				.type = QUIRK_AUDIO_STANDARD_INTERFACE
			},
			{
				.ifnum = 1,
				.type = QUIRK_AUDIO_STANDARD_INTERFACE
			},
			{
				.ifnum = 2,
				.type = QUIRK_MIDI_FIXED_ENDPOINT,
				.data = & (const struct snd_usb_midi_endpoint_info) {
					.out_cables = 0x0001,
					.in_cables = 0x0001
				}
			},
			{
				.ifnum = -1
			}
		}
	}
},

~~~

The reference to standard mode and advanced is because only the advanced mode
works for use with fxfloorboard. Recompile the module and you should be in
business. fxfloorboard is invaluable for making backups because noone can
remember all those settings for that awesome patch you made. 

[1]: http://fxfloorboard.sourceforge.net/info.php?model=gt-10b "fxfloorboard"

### Current work

I've been writing semi-instrumental electronic music for some years, some of it is on <a
href="http://soundcloud.com/penguinmusic">Soundcloud</a> and <a
href="http://tindeck.com/users/ewe2">tindeck</a>. Currently saving for a nice
electric guitar to complete my basic instrumental needs.

Recently I've been delving into parody songs and it's been a good learning
experience for recording in my limited setup. 

### General fandom stuff

The Beatles were my first great fandom which continues. I would probably count Talking Heads as my
next big interest but I was just as interested in Split Enz, the Police, the Cure, Eno, and a number
of other post-punk bands, so as a musician I was never wholly in the punk camp. By the late 80's I
became a full-blown Smiths/XTC/They Might Be Giants fiend and then everything changed in the 90's
and the list of Stuff To Like and People Who Get It grew ever-longer. Since the 2000's I've actually
had to go backwards in time to catch up with all the amazing changes in the electronic dance genres,
to the point where I am now which is not having any idea but just going with what sounds good!

