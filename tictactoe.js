
(function () {

    var squares = [];
    var EMPTY = "\xA0";
    var score; 
    var moves;
    var turn = "X";
    var oldOnload;

    /*
     * To determine a win condition, each square is "tagged" from left
     * to right, top to bottom, with successive powers of 2.  Each cell
     *  represents an individual bit in a 9-bit string A winner can  be  determined by
     * checking whether the player's current 9 bits have covered any
     * of the eight "three-in-a-row" combinations.
     *
     *     273                 84
     *        \               /
     *          1 |   2 |   4  = 7
     *       -----+-----+-----
     *          8 |  16 |  32  = 56
     *       -----+-----+-----
     *         64 | 128 | 256  = 448
     *       =================
     *         73   146   292
     *
     */
  var  wins = [7, 56, 448, 73, 146, 292, 273, 84];

    /*
     * Clears the score and move count, erases the board, and makes it
     * X's turn.
     */
      function startNewGame() {
        var i;
        
        turn = "X";
        score = {"X": 0, "O": 0};
        moves = 0;
        for (i = 0; i < squares.length; i += 1) {
            squares[i].firstChild.nodeValue = EMPTY;
        }
    };

    /*
     * Returns whether the given score is a winning score.
     */
      function win(score) {
        var i;
        for (i = 0; i < wins.length; i += 1) {
            if ((wins[i] & score) === wins[i]) {
                return true;
            }
        }
        return false;
    };

    /*
     * Sets the clicked-on square to the current player's mark,
     * then checks for a win or draw game.  Also changes the
     * current player.
     */
      function set() {
        if (this.firstChild.nodeValue !== EMPTY) {
            return;
        }
        this.firstChild.nodeValue = turn;
        moves += 1;
        score[turn] += this.indicator;
        if (win(score[turn])) {
            alert(turn + " wins!");
            startNewGame();
        } else if (moves === 9) {
            alert("Draw");
            startNewGame();
        } else {
            turn = turn === "X" ? "O" : "X";
        }
    }

    /*
     * Creates and attaches the DOM elements for the board as an
     * HTML table, assigns the indicators for each cell, and starts
     * a new game.
     */
      function play() {
        var board = document.createElement("table"),
            indicator = 1,
            i, j,
            row, cell,
            parent;
        board.border = 1;
        for (i = 0; i < 3; i += 1) {
            row = document.createElement("tr");
            board.appendChild(row);
            for (j = 0; j < 3; j += 1) {
                cell = document.createElement("td");
                cell.width = cell.height = 50;
                cell.align = cell.valign = 'center';
                cell.indicator = indicator;
                cell.onclick = set;
                cell.appendChild(document.createTextNode(""));
                row.appendChild(cell);
                squares.push(cell);
                indicator += indicator;
            }
        }

        // Attach under tictactoe if present, otherwise to body.
        parent = document.getElementById("tictactoe") || document.body;
        parent.appendChild(board);
        startNewGame();
    };

    /*
     * Add the play function to the (virtual) list of onload events.
     */
    function restart() {
 startNewGame();
        
    }
    if (typeof window.onload === "function") {
         oldOnload= window.onload;
        window.onload = function () {
            oldOnload(); 
            play();
                 restart();
                
           
        };
    } else {
        window.onload = play;
    }

}());

