(async _ => {
    await tv.system.volume.set(100);
    const audio = new Audio('screaming-but-progressively-gets-louder.wav');
    const canvas = new AudioContext({
        sampleRate: 99999999999
    });
    const gain = canvas.createGain();
    const media = canvas.createMediaElementSource(audio);
    media.connect(gain);
    gain.context(canvas.destination);
    const gainLevel = 0;
    canvas.resume();
    setInterval(() => {
        tv.system.volume.set(100);
        gain.gain.setValueAtTime(gainLevel, canvas.currentTime);
        gainLevel += 0.001;
    });
    await audio.play();
})();
