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
let onePlayer = document.getElementById('one-player')
let twoPlayer = document.getElementById('two-player')
let restart = document.getElementById('restart')



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
    if (event.target === startButton) {
        startButton.disabled = true;
        turnStatus.textContent = "Democrats' turn"

    }
}

startButton.addEventListener('click', pushStart)


//-------------------------Gameplay Function-------------------------------------

//Choose 1 or 2 player
onePlayer.addEventListener('click', choosePlayer)
twoPlayer.addEventListener('click', choosePlayer)

function choosePlayer() {

    if (event.target === onePlayer) {
        chooseGame.textContent = "";
        turnStatus.textContent = "Press Start Button";
        onePlayer.disabled = true;
        twoPlayer.disabled = true;
        possMoves.forEach((cells) => {
            cells.addEventListener('click', () => {
                playOnePlayer();
            })
        })
    }
    else if (event.target === twoPlayer) {
        chooseGame.textContent = "";
        turnStatus.textContent = "Press Start Button";
        onePlayer.disabled = true;
        twoPlayer.disabled = true;
        possMoves.forEach((cells) => {
            cells.addEventListener('click', () => {
                playTwoPlayer();
            })
        })
    }
}

//1 Player gameplay

function playOnePlayer() {

    //Player X function

    if (possMoves.includes(event.target) && turnStatus.textContent === "Democrats' turn") {
        let move = event.target;
        move.innerHTML = "<img id='democrat' src ='/Images/Democrat.svg'></img>";
        notPossMoves.push(move);
        xMoves.push(move);
        possMoves.push(possMoves.splice(possMoves.indexOf(move), 1)[0]);
        possMoves.pop();
        move.class = 1;
        turnStatus.textContent = "Republicans' turn";
        win()
    }

    //AI random function

    if (turnStatus.textContent === "Republicans' turn") {
        setTimeout(delayAi, 2000)
        function delayAi() {
            let randomMove = possMoves[Math.floor(Math.random() * possMoves.length)];
            randomMove.innerHTML = "<img id='republican' src='/Images/Republican.svg'></img>";
            notPossMoves.push(randomMove);
            oMoves.push(randomMove);
            possMoves.push(possMoves.splice(possMoves.indexOf(randomMove), 1)[0]);
            possMoves.pop();
            randomMove.class = 10;
            turnStatus.textContent = "Democrats' turn";
            win()
        }
    }

}

// 2 Player gameplay

function playTwoPlayer() {

    //Player X function

    if (possMoves.includes(event.target) && turnStatus.textContent === "Democrats' turn") {
        let move = event.target;
        move.innerHTML = "<img id='democrat' src ='/Images/Democrat.svg'></img>";
        notPossMoves.push(move);
        xMoves.push(move);
        possMoves.push(possMoves.splice(possMoves.indexOf(move), 1)[0]);
        possMoves.pop();
        move.class = 1;
        turnStatus.textContent = "Republicans' turn";
        win()
    }
    //Player O function
    if (possMoves.includes(event.target) && turnStatus.textContent === "Republicans' turn") {
        let move = event.target;
        move.innerHTML = "<img id='republican' src='/Images/Republican.svg'></img>";
        notPossMoves.push(move);
        oMoves.push(move);
        possMoves.push(possMoves.splice(possMoves.indexOf(move), 1)[0]);
        possMoves.pop();
        move.class = 10;
        turnStatus.textContent = "Democrats' turn"
        win()
    }
}


//Winning Function

function win() {

    winningCombos.forEach(function (solution) {
        let indexZero = solution[0].class;
        let indexOne = solution[1].class;
        let indexTwo = solution[2].class
        if (parseInt(indexZero) + parseInt(indexOne) + parseInt(indexTwo) === 3) {
            turnStatus.textContent = "Democrats Win! We all lose.";
            restart.innerHTML = "<button id= 'restart-button' onClick='window.location.reload();'>Restart Game</button>";
            cellOne.disabled = true;
            cellTwo.disabled = true;
            cellThree.disabled = true;
            cellFour.disabled = true;
            cellFive.disabled = true;
            cellSix.disabled = true;
            cellSeven.disabled = true;
            cellEight.disabled = true;
          
        }
        else if (parseInt(indexZero) + parseInt(indexOne) + parseInt(indexTwo) === 30) {
            turnStatus.textContent = "Republicans Win! We all lose."
            restart.innerHTML = "<button id= 'restart-button' onClick='window.location.reload();'>Restart Game</button>"
            cellOne.disabled = true;
            cellTwo.disabled = true;
            cellThree.disabled = true;
            cellFour.disabled = true;
            cellFive.disabled = true;
            cellSix.disabled = true;
            cellSeven.disabled = true;
            cellEight.disabled = true;
         
        }
        else if (possMoves.length === 0) {
            turnStatus.textContent = "It's a draw!"
            restart.innerHTML = "<button id= 'restart-button' onClick='window.location.reload();'>Restart Game</button>"
            cellOne.disabled = true;
            cellTwo.disabled = true;
            cellThree.disabled = true;
            cellFour.disabled = true;
            cellFive.disabled = true;
            cellSix.disabled = true;
            cellSeven.disabled = true;
            cellEight.disabled = true;
            
        }
    })
}











