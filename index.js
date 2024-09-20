let randomNumber=parseInt(Math.random()*100+1)

const submit = document.getElementById('submit')
const input = document.getElementById('input')
const prev_guess = document.getElementById('prev-guess')
const rem_guess = document.getElementById('rem-guess')
const lowOrHi = document.getElementById('lowOrHi')
const startOver = document.getElementById('check-constraints')

const button =document.createElement('button')

let prevGuess =[]
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        let guess = parseInt(input.value)
        ValidateGuess(guess)
    })
    
}

function ValidateGuess(guess){
    if(isNaN(guess)){
        alert('Please Enter a valid number')
    }
    else if(guess>100){
        alert('Please Enter a number less then 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess===10){
            displayGuess(guess)
            displayMessage(`Game Over , Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }else if(guess<randomNumber){
        displayMessage(`Number is too low`)
    }
else{
    displayMessage(`Number is too high`)
}
}

function displayGuess(guess){
    input.value=''
    prev_guess.innerHTML+=`${guess} , `
    numGuess++;
    rem_guess.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
    input.value=''
    input.setAttribute('disabled','')
    button.innerHTML=`Start Over`
    startOver.appendChild(button)
    playGame=false
    newGame()
}

function newGame(){
    button.addEventListener('click',()=>{
        randomNumber = parseInt(Math.random()*100+1)
        prevGuess=[]
        numGuess = 1
        prev_guess.innerHTML=``
        rem_guess.innerHTML = ``
        rem_guess.innerHTML = `${11-numGuess}`
        input.removeAttribute('disabled')
        startOver.removeChild(button)
        playGame=true
    })
}
