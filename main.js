//--------------------------Variables-----------------------------------

let cellZero = document.getElementById('cell-0')
let cellOne = document.getElementById('cell-1')
let cellTwo = document.getElementById('cell-2')
let cellThree = document.getElementById('cell-3')
let cellFour = document.getElementById('cell-4')
let cellFive = document.getElementById('cell-5')
let cellSix = document.getElementById('cell-6')
let cellSeven = document.getElementById('cell-7')
let cellEight = document.getElementById('cell-8')
let startButton = document.getElementById('start')
let turnStatus = document.getElementById('turnStatus')
let onePlayer = document.getElementById('1 Player')
let twoPlayer = document.getElementById('2 Player')



//------------------------------Arrays-----------------------------------------

let possMoves = [cellZero, cellOne, cellTwo, cellThree, cellFour, cellFive, cellSix, cellSeven, cellEight]
let notPossMoves = [] //cells that have already been played
let xMoves = [] //cells that Player X has played
let oMoves = [] //cells that Player O has played
let winningCombos = [        //Possible ways to win and leave your oponent in a pool of their own shame
    [cellZero, cellOne, cellTwo],
    [cellThree, cellFour, cellFive],
    [cellSix, cellSeven, cellEight],
    [cellZero, cellThree, cellSix],
    [cellOne, cellFour, cellSeven],
    [cellTwo, cellFive, cellEight],
    [cellZero, cellFour, cellEight],
    [cellTwo, cellFour, cellSix]
]



//-------------------------Start Button Function-------------------------------

function pushStart(event) {
    if (event.target === startButton){
        startButton.disabled = true;
        turnStatus.textContent = "Player X's turn"

    }
    }

startButton.addEventListener('click', pushStart)


//-------------------------Gameplay Function-------------------------------------

//Choose 1 or 2 player

function choosePlayer(){
if(event.target === onePlayer) {
    playOnePlayer()
}   
else if(event.target === twoPlayer) {
    playTwoPlayer()
} 
}
    
//1 Player gameplay

function playOnePlayer(){
    onePlayer.disabled = true;

    //Player X function

    if (possMoves.includes(event.target) && turnStatus.textContent === "Player X's turn"){
        let move = event.target;
        move.innerHTML = "<img src= 'https://media1.tenor.com/images/a422941a831e161317fc7d118aa7fac6/tenor.gif?itemid=4957875' height= 200px width= 200px>";
        
        notPossMoves.push(move);
        xMoves.push(move);
        possMoves.push(possMoves.splice(possMoves.indexOf(move), 1) [0]);
        possMoves.pop();
        move.class = 1;
        turnStatus.textContent = "Player O's turn";
        console.log(move.class)
    }
    
    //AI random function
    
    if(turnStatus.textContent === "Player O's turn"){
        let randomMove = possMoves[Math.floor(Math.random() * possMoves.length)];
        randomMove.innerHTML = "<img src= 'https://media2.giphy.com/media/y8Mz1yj13s3kI/giphy.gif' width= 200px height= 200px></img>";    
        notPossMoves.push(randomMove);
        xMoves.push(randomMove);
        possMoves.push(possMoves.splice(possMoves.indexOf(randomMove), 1) [0]);
        possMoves.pop();
        randomMove.class = 1;
        turnStatus.textContent = "Player X's turn";
    }
    }

possMoves.forEach( (cells) => {
    cells.addEventListener('click', playOnePlayer)
})   

// 2 Player gameplay
    
function playTwoPlayer(event){

    //Player X function

    if (possMoves.includes(event.target) && turnStatus.textContent === "Player X's turn"){
        let move = event.target;
        move.innerHTML = "<img src= 'https://media1.tenor.com/images/a422941a831e161317fc7d118aa7fac6/tenor.gif?itemid=4957875' height= 200px width= 200px></img>";
        
        notPossMoves.push(move);
        xMoves.push(move);
        possMoves.push(possMoves.splice(possMoves.indexOf(move), 1) [0]);
        possMoves.pop();
        move.class = 1;
        turnStatus.textContent = "Player O's turn";
        console.log(move.class)
    }
    //Player O function
    if (possMoves.includes(event.target) && turnStatus.textContent === "Player O's turn"){
        let move = event.target;
        move.innerHTML = "<img src= 'https://media2.giphy.com/media/y8Mz1yj13s3kI/giphy.gif' width= 200px height= 200px ></img>";
        notPossMoves.push(move);
        oMoves.push(move);
        possMoves.push(possMoves.splice(possMoves.indexOf(move), 1) [0]);
        possMoves.pop();
        move.class = 10;
        turnStatus.textContent = "Player X's turn"
    }  


console.log(notPossMoves) //debug
console.log(cellZero)

}

possMoves.forEach( (cells) => {
    cells.addEventListener('click', playTwoPlayer)
})

//Winning Function

function win() {
    
    winningCombos.forEach(function(solution){
        let indexZero = solution[0].class;
        let indexOne = solution[1].class;
        let indexTwo = solution[2].class
        if(parseInt(indexZero) + parseInt(indexOne) + parseInt(indexTwo) === 3){
            turnStatus.textContent ="Player X wins"
        }
        else if(parseInt(indexZero) + parseInt(indexOne) + parseInt(indexTwo) === 30){
            turnStatus.textContent ="Player O wins"
        
        } 
        else {}
        
    })
    onePlayer.addEventListener('click', playOnePlayer)
    twoPlayer.addEventListener('click', playTwoPlayer)

}
win()  









// make player 1 and player 2 variable and put them to odd or even turns