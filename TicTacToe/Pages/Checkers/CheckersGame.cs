using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TicTacToe.Pages.Checkers
{
    public class CheckersGame
    {
        public Color Turn = Color.red;

        public Checker[,] Board = new Checker[8, 8];

        public CheckersGame() {

            for (int i = 0; i < 8; i += 2) {
                //Black Side
                Board[i, 0] = new Checker(Color.black);
                Board[i+1, 1] = new Checker(Color.black);
                Board[i, 2] = new Checker(Color.black);
                //Red Side
                Board[i+1, 5] = new Checker(Color.red);
                Board[i, 6] = new Checker(Color.red);
                Board[i+1, 7] = new Checker(Color.red);
            }
        }

        public string Serialize() {
            string state = Turn.ToString() + "\n";
            for (int y = 0; y < 8; y++)
            {
                for (int x = 0; x < 8; x++) {
                    if (Board[x, y] != null) {
                        Checker check = Board[x, y];
                        state += ($"{check.Color},{check.King},{x},{y} ");
                    }
                }
            }


            return state;
        }

    }//end of Game Class
}
