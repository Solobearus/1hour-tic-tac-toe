class Game {
    tic = "😇"
    tac = "😈"

    constructor() {
        $('button').click(() => this.startGame());
        this.playersTurn = this.tic;
        this.playing = false;
        this.playerXscore = 0;
        this.playerYscore = 0;
        this.bindListeners();
        this.startGame();
    }

    startGame() {
        this.clearBoard();
        this.playersTurn = this.tic
        this.playing = true;
    }


    bindListeners() {
        for (let y = 0; y < 3; y++) {
            for (let x = 0; x < 3; x++) {
                this._getBoardElement(y, x).click((e) => this.playTurn(e, y, x))
            }
        }
    }

    clearBoard() {
        for (var y = 0; y < 3; y++) {
            for (var x = 0; x < 3; x++) {
                this._setSymbol(y, x, '')
            }
        }
    }

    playTurn(e, rowIndex, columnIndex) {
        if (e.target.innerHTML !== "") {
            console.log('This cell is taken')
            return
        }

        this._setSymbol(rowIndex, columnIndex, this.playersTurn)
        this.checkWin();

    }

    _setSymbol(y, x, symbol) {
        this._getBoardElement(y, x).html(symbol);
    }

    checkWin() {
        if (
            this._checkRow(0) || this._checkRow(1) || this._checkRow(2) ||
            this._checkColumn(0) || this._checkColumn(1) || this._checkColumn(2) ||
            this._checkDiagonals()
        ) {
            this.playersTurn === this.tic ? this.playerXscore++ : this.playerYscore++;
            $('h3').text(`${this.tic} : ${this.playerXscore} ......................... ${this.tac} : ${this.playerYscore}`)
            alert(`${this.playersTurn} won ! `);
            this.startGame();
        } else {
            this.playersTurn = this.playersTurn === this.tic ? this.tac : this.tic;
        }
    }

    _checkColumn(i) {
        return this._checkBoardElementSymbol(i, 0) &&
            this._checkBoardElementSymbol(i, 1) &&
            this._checkBoardElementSymbol(i, 2)
    }

    _checkRow(i) {
        return this._checkBoardElementSymbol(0, i) &&
            this._checkBoardElementSymbol(1, i) &&
            this._checkBoardElementSymbol(2, i)
    }

    _checkDiagonals() {
        return this._checkBoardElementSymbol(2, 0) &&
            this._checkBoardElementSymbol(2, 1) &&
            this._checkBoardElementSymbol(2, 2)
            ||
            this._checkBoardElementSymbol(0, 2) &&
            this._checkBoardElementSymbol(1, 1) &&
            this._checkBoardElementSymbol(2, 0)
    }

    _checkBoardElementSymbol(y, x) {
        return this._getBoardElement(y, x).html() === this.playersTurn
    }

    _getBoardElement(y, x) {
        const board = $('.container');
        return board.find(`.row:nth-child(${y + 1}) .cell:nth-child(${x + 1})`)
    }
}


const game = new Game();
