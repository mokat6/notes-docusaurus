Usually chosen - sweet spot 24 kHz / 16-bit / 32–64 kbps / mono channel  
Good for speech, small file size and latency.

Full human hearing goes up to ~20 kHz, but most speech information is below 12 kHz.

# streaming

Compressed formats make streaming easy. Each frame has small headers. Player knows when a header starts, and can start playing from any full frame.  
Uncompressed PCM16, it's just bytes. It could be two channel, could be pcm16 (two bytes per sample), you don't know the smaple rate Hz. And you don't know which byte is the beginnning of a sample (pcm 16: 2 channels and 2 bytes per sample)

# ffplay

if you have binary data, you think its PCM16, no headers. How do you check and make sure it is that?  
VLC won't play raw PCM16 with no headers. try

```bash
ffplay -f s16le -ar 24000 -ac 1 filename.lol
```

- f → “force input format”
- s16le → signed 16-bit little-endian PCM
- -ar → audio sample rate in Hz 24000 (each second of audio has 24,000 samples)
- -ac → number of audio channels; 1 = mono

it plays if you guessed it right.  
Input #0, s16le, from 'bin':  
Duration: 00:00:33.55, bitrate: 384 kb/s  
Stream #0:0: Audio: pcm_s16le, 24000 Hz, 1 channels, s16, 384 kb/s  
33.11 M-A: 0.000 fd= 0 aq= 0KB vq= 0KB sq= 0B f=0/0
