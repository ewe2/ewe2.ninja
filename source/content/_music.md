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

#### Boss GT-10B Bass effects processor

Although superseded by later models, this is an amazing deal if you like
your Boss effects. There is a [utility][1] to be able to reprogram it from a PC.
Linux users have to get their hands dirty with a patch to the ALSA usb driver
in quirks-table.h. This file is a moving target: in recent kernels the entries
for the Boss GT models has been removed. The catch-all entry won't work
because the usb interface has a couple of specific modes, but don't be
frightened, it's not that difficult a patch:

First find <kbd>linux/sound/usb/quirks-table.h</kbd> and make a backup file
first! Then open the original in an editor and search for the Roland section
either by name or by vendor id <kbd>0x0582</kbd>. The file is sorted in
ascending order by device id, so we want to put our patch after ids
<kbd>0x0cxx</kbd> and before ids <kbd>0x0exx</kbd>, which puts us inbetween
two Roland Edirol models currently. Search for the Edirol UA-25EX and work
back from there. Found it? Good. Fortunately the syntax for usb quirks hasn't
changed, particularly for Roland/Boss devices so this patch should work for a
number of kernels in the 3.x.x series. You'll have to apply it by hand, of
course, so select and paste the following code into a text file and copy that
just before the leading <kbd>{</kbd> of the UA-25X entry:

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
href="http://tindeck.com/users/ewe2">tindeck</a>. I'm saving up for some usb gear to make the
process more interesting and be able to input real instruments into the mix.

### General fandom stuff

The Beatles were my first great fandom which continues. I would probably count Talking Heads as my
next big interest but I was just as interested in Split Enz, the Police, the Cure, Eno, and a number
of other post-punk bands, so as a musician I was never wholly in the punk camp. By the late 80's I
became a full-blown Smiths/XTC/They Might Be Giants fiend and then everything changed in the 90's
and the list of Stuff To Like and People Who Get It grew ever-longer. Since the 2000's I've actually
had to go backwards in time to catch up with all the amazing changes in the electronic dance genres,
to the point where I am now which is not having any idea but just going with what sounds good!


### Music essays

Some stuff I wrote about music-related things:

* <a href="/stuff/revolution/">Revolution in the Head</a>: an appraisal of Ian MacDonald's *Revolution in the
  Heart*
* <a href="/stuff/beatlemania/">Beatlemania: A fan's journey</a>: what being a Beatles fan has taught me.
