using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TicTacToe.Pages.Checkers;

namespace TicTacToe.Pages.Checkers
{
    public class Checker
    {
        public bool King = false;
        public Color Color;
        public Checker(Color color) {
            Color = color;
        }

    }
}
