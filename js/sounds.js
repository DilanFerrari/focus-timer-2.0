export default function Sounds() {
    const forestAudio = new Audio("../sounds/forest.wav")
    const rainAudio = new Audio("../sounds/rain.wav")
    const coffeAudio = new Audio("../sounds/coffe.wav")
    const fireplaceAudio = new Audio("../sounds/fireplace.wav")

    function forest() {
        stopAudio()
        forestAudio.play()
        forestAudio.loop = true
    }
    function rain() {
        stopAudio()
        rainAudio.play()
        rainAudio.loop = true
    }
    function coffe() {
        stopAudio()
        coffeAudio.play()
        coffeAudio.loop = true
    }
    function fireplace() {
        stopAudio()
        fireplaceAudio.play()
        fireplaceAudio.loop = true
    }
    function stopAudio() {
        forestAudio.pause()
        rainAudio.pause()
        coffeAudio.pause()
        fireplaceAudio.pause()
    }
    return {
        forest,
        rain,
        coffe,
        fireplace
    }
}