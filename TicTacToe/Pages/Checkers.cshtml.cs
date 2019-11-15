using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using TicTacToe.Pages.Checkers;

namespace TicTacToe.Pages
{
    public class CheckersModel : PageModel
    {
        public CheckersGame CheckersGame;

        public void OnGet()
        {
            CheckersGame = new CheckersGame();
        }
        public void OnPost(string state, int checkX, int checkY, int squareX, int squareY)
        {
            CheckersGame = new CheckersGame();
            Checker check = CheckersGame.Board[checkX, checkY];
            CheckersGame.Board[squareX, squareY] = check;
            CheckersGame.Board[checkX, checkY] = null;
        }
    }
}