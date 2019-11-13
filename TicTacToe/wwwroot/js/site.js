// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

//server code
var form = document.getElementById("board")
var cells = document.getElementsByClassName("square");
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener(event: => {
        event.
    });
}


// Write your Javascript code.
var turn = "X";

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