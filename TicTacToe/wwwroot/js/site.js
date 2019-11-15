// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

//server code for Tic-Tac-Toe
/*
var form = document.getElementById("board")
var cells = document.getElementsByClassName("square");
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener(event: => {
        event.
    });
}
var turn = "X";
//code for Tic - Tac - Toe
function setTurn() {
    var turnElement = document.getElementById(turn);
    turnElement.innerText = "Player " + turn + "Turn";
}

function onClick(event) {
    event.preventDefault();
    if (!event.target.innerText) {
        event.target.innerText = turn;
        if (turn === "X")
            turn = "O"
        else
            turn = "X"
        if (!checkForWin()) {

        }
        setTurn(turn);
    }
}

function setWinner() {
    var turnElement = document.getElementById(turn);
    turnElement.innerText = "Player " + turn + "Wins";
    var cells = document.getElementsByClassName("square");
    for (var i = 0; i < 9; i++) {
        cells[].removeEventListener("click", onClick);
    }

}

function checkForWin() {
    var cells = document.getElementsByClassName("square");

    //check horizontal cells
    for (var i = 0; i < 9; i += 3) {

        if (cells[0 + i].innerText !== "" && cells[0 + i].innerText === cells[1 + i].innerText && cells[1 + i].innerText === cells[2 + i].innerText) {
            setWinner(cells[0 + i]);
            return true;
        }
    }

    for (var j = 0; j < 9; j += 3) {
        if (cells[0 + j].innerText !== "" && cells[0 + j].innerText === cells[3 + j].innerText && cells[3 + j].innerText === cells[6 + j].innerText) {
            setWinner(cells[0 + i].innerText);
            return  true ;
        }
    }

    if (cells[0 + j].innerText !== "" && cells[0].innerText === cells[4].innerText && cells[4].innerText === cells[8].innerText) {
        setWinner(cells[0].innerText);
        return true;
    }

    return false;
}

var cells = document.getElementsByClassName("square");
for (var i = 0; i < cells; i++) {
    cells[i].addEventListener("click", onClick);
}

setTurn();
*/



//code for checkers
var dragging;

var squares = document.getElementsByClassName("square");
for (var i = 0; i < squares; i++) {
    squares[i].addEventListener("dragenter", onDragEnter);
    squares[i].addEventListener("drop", onDrop);
    squares[i].addEventListener("dragstart", onDragEnd);
    squares[i].addEventListener("dragleave", onDragLeave);
}

function onDragEnter(event) {
    if (event.target.classList.length > 0) return;
    if (event.target.classList.contains("checker")) return;
    if (event.target.classList.contains("red")) return;

    event.preventDefault();
    event.target.style.backgroundColor = "yellow";
}

function onDragStart(event) {
    dragging = {
        x: event.target.data - x,
        y: event.target.data - y
    }    
}
function onDragEnd(event) {
    event.log(dragging);
}

function onDrop(event) {
    console.log(event);
}
function onDragLeave(event) {
    event.target.style.backgroundColor = null;

}