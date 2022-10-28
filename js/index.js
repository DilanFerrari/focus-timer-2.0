import Timer from "./timer.js"
import Sounds from "./sounds.js"

const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector(".stop")
const buttonPlus = document.querySelector(".plus")
const buttonMinus = document.querySelector(".minus")
const cardForest = document.querySelector('.forest')
const cardRain = document.querySelector('.rain')
const cardCoffe = document.querySelector('.coffe')
const cardFireplace = document.querySelector('.fireplace')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

let timerTimeOut

const sounds = Sounds()

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeOut,
    buttonPlay,
    buttonPause,
})

buttonPlay.addEventListener('click', function() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    timer.countDown()
})
buttonPause.addEventListener('click', function() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    timer.hold()
})
buttonStop.addEventListener('click', function() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    timer.updateTimeDisplay(0, 0)
})
buttonPlus.addEventListener('click', function() {
    timer.plusFive()
})
buttonMinus.addEventListener('click', function() {
    timer.minusFive()
})
cardForest.addEventListener('click', function() {
    clearCards()
    cardForest.classList.add('selected')
    sounds.forest()
})
cardRain.addEventListener('click', function() {
    clearCards()
    cardRain.classList.add('selected')
    sounds.rain()
})
cardCoffe.addEventListener('click', function() {
    clearCards()
    cardCoffe.classList.add('selected')
    sounds.coffe()
})
cardFireplace.addEventListener('click', function() {
    clearCards()
    cardFireplace.classList.add('selected')
    sounds.fireplace()
})

function clearCards() {
    cardForest.classList.remove('selected')
    cardRain.classList.remove('selected')
    cardCoffe.classList.remove('selected')
    cardFireplace.classList.remove('selected')
}

