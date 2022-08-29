//identificadores
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const azul = document.getElementById("azul")
const naranja = document.getElementById("naranja")
const rojo = document.getElementById("rojo")
const footer = document.getElementById("footer")
const result = document.getElementById("result")
const numScore = document.querySelector(".numScore")

//event listeners

rock.addEventListener("click", juegaRock)
paper.addEventListener("click", juegaPaper)
scissors.addEventListener("click", juegaScissors)

//array
const jugadas = ["rock", "paper", "scissors"]


//funcion resultado
const res = document.createElement("p")
function resultadoDraw(){
    res.innerHTML = "Draw"
    result.appendChild(res)
}
function resultadoWin(){
    res.innerHTML = "Win"
    result.appendChild(res)
}
function resultadoLose(){
    res.innerHTML = "Lose"
    result.appendChild(res)
}


//contador
let count = 0


//funciones
function juegaRock(){
    const jugadasRandom = jugadas[Math.floor(Math.random()*jugadas.length)]
    if(jugadasRandom == "paper"){
        rojo.classList.add("moveTopRight")
        azul.classList.add("moveBottomLeft")
        naranja.classList.add("fade")
        resultadoLose()
        console.log(`perdiste contra ${jugadasRandom}`)
    }else if(jugadasRandom == "rock" ){
        rojo.classList.add("top")
        naranja.classList.add("fade")
        azul.classList.add("fade")
        resultadoDraw()
        console.log(`empataste con ${jugadasRandom}`)
    }else if(jugadasRandom == "scissors"){
        rojo.classList.add("moveTopLeft")
        naranja.classList.add("moveBottomRight")
        azul.classList.add("fade")
        resultadoWin()
        count++
        numScore.innerHTML =`${count}`
        console.log(`ganaste contra ${jugadasRandom}`)
    }
    reset()
}

function juegaPaper(){
    const jugadasRandom = jugadas[Math.floor(Math.random()*jugadas.length)]
    if(jugadasRandom == "scissors"){
        azul.classList.add("moveBottomLeft")
        naranja.classList.add("moveBottomRight")
        rojo.classList.add("fade")
        resultadoLose()
        console.log(`perdiste contra ${jugadasRandom}`)
    }else if(jugadasRandom == "paper" ){
        azul.classList.add("moveBottomRightDraw")
        naranja.classList.add("fade")
        rojo.classList.add("fade")
        resultadoDraw()
        console.log(`empataste con ${jugadasRandom}`)
    }else if(jugadasRandom == "rock"){
        azul.classList.add("moveBottomLeft")
        rojo.classList.add("moveTopRight")
        naranja.classList.add("fade")
        resultadoWin()
        count++
        numScore.innerHTML =`${count}`
        console.log(`ganaste contra ${jugadasRandom}`)
    }
    reset()
}

function juegaScissors(){
    const jugadasRandom = jugadas[Math.floor(Math.random()*jugadas.length)]
    if(jugadasRandom == "rock"){
        naranja.classList.add("moveBottomRight")
        rojo.classList.add("moveTopLeft")
        azul.classList.add("fade")
        resultadoLose()
        console.log(`perdiste contra ${jugadasRandom}`)
    }else if(jugadasRandom == "scissors" ){
        naranja.classList.add("moveBottomLeftDraw")
        azul.classList.add("fade")
        rojo.classList.add("fade")
        resultadoDraw()
        console.log(`empataste con ${jugadasRandom}`)
    }else if(jugadasRandom == "paper"){
        azul.classList.add("moveBottomLeft")
        naranja.classList.add("moveBottomRight")
        rojo.classList.add("fade")
        resultadoWin()
        count++
        numScore.innerHTML =`${count}`
        console.log(`Ganaste contra ${jugadasRandom}`)
    }
    reset()
}
function reset(){
    setTimeout(() => {
        azul.className = ""
        naranja.className = ""
        rojo.className = ""
    
        azul.classList.add("circuloAzul")
        naranja.classList.add("circuloNaranja")
        rojo.classList.add("circuloRojo")
    
        res.innerHTML = ""
    }, 3000);
}