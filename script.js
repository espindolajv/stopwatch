const clock = document.getElementById('clock')

let startTime = 0
let elapsedTime = 0
let itsRunning = false
let timer = null


function start(){
    if(!itsRunning){
        startTime = Date.now() - elapsedTime
        timer = setInterval(update, 10)
        itsRunning = true
    }
}

function stop(){
    if(itsRunning){
        clearInterval(timer)
        elapsedTime = Date.now() - startTime
        itsRunning = false
    }
}

function reset(){
    clearInterval(timer)
    startTime = 0
    elapsedTime = 0
    itsRunning = false
    clock.textContent = `00:00:00:00`
}

function update(){
    const currentTime = Date.now()
    elapsedTime = currentTime - startTime

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60)
    let seconds = Math.floor(elapsedTime / 1000 % 60)
    let milliseconds = Math.floor(elapsedTime % 1000 / 60)

    hours = String(hours).padStart(2, '0')
    minutes = String(minutes).padStart(2, '0')
    seconds = String(seconds).padStart(2, '0')
    milliseconds = String(milliseconds).padStart(2, '0')

    clock.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`
}

const startBtn = document.getElementById('start-btn')
const stopBtn = document.getElementById('stop-btn')
const resetBtn = document.getElementById('reset-btn')

startBtn.onclick = start
stopBtn.onclick = stop
resetBtn.onclick = reset