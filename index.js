class Game {
    constructor() {
        $('button').click(() => this.startGame());
        this.boardElements = this.getBoardElements();
        this.playersTurn = "😇";
        this.playing = false;
        this.playerXscore = 0;
        this.playerYscore = 0;
        this.bindListeners();
        this.startGame();
    }

    startGame() {

        this.boardData = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        this.clearBoard();
        this.playersTurn = "😇";
        this.playing = true;
    }

    getBoardElements() {
        const board = $('.container');
        const result = [
            [
                board.find('.row:nth-child(1) .cell:nth-child(1)'),
                board.find('.row:nth-child(1) .cell:nth-child(2)'),
                board.find('.row:nth-child(1) .cell:nth-child(3)')
            ],
            [
                board.find('.row:nth-child(2) .cell:nth-child(1)'),
                board.find('.row:nth-child(2) .cell:nth-child(2)'),
                board.find('.row:nth-child(2) .cell:nth-child(3)')
            ],
            [
                board.find('.row:nth-child(3) .cell:nth-child(1)'),
                board.find('.row:nth-child(3) .cell:nth-child(2)'),
                board.find('.row:nth-child(3) .cell:nth-child(3)')
            ],
        ];
        return result;
    }

    bindListeners() {
        this.boardElements.forEach((row, rowIndex) => {
            row.forEach((cell, columnIndex) => {
                cell.click((e) => this.playTurn(e, rowIndex, columnIndex))
            })
        })
    }

    clearBoard() {
        this.boardElements.forEach((row, rowIndex) => {
            row.forEach((cell, columnIndex) => {
                cell.text("");
            })
        })
    }

    playTurn(e, rowIndex, columnIndex) {
        if (e.target.innerHTML === "") {
            console.log(e.target);

            e.target.innerHTML = this.playersTurn;
            this.boardData[rowIndex][columnIndex] = this.playersTurn;
            this.checkWin();
        }
    }

    checkWin() {
        if (
            this.boardData[0][0] === this.playersTurn &&
            this.boardData[0][1] === this.playersTurn &&
            this.boardData[0][2] === this.playersTurn
            ||
            this.boardData[1][0] === this.playersTurn &&
            this.boardData[1][1] === this.playersTurn &&
            this.boardData[1][2] === this.playersTurn
            ||
            this.boardData[2][0] === this.playersTurn &&
            this.boardData[2][1] === this.playersTurn &&
            this.boardData[2][2] === this.playersTurn
            ||
            this.boardData[0][0] === this.playersTurn &&
            this.boardData[1][0] === this.playersTurn &&
            this.boardData[2][0] === this.playersTurn
            ||
            this.boardData[0][1] === this.playersTurn &&
            this.boardData[1][1] === this.playersTurn &&
            this.boardData[2][1] === this.playersTurn
            ||
            this.boardData[0][2] === this.playersTurn &&
            this.boardData[1][2] === this.playersTurn &&
            this.boardData[2][2] === this.playersTurn
            ||
            this.boardData[0][0] === this.playersTurn &&
            this.boardData[1][1] === this.playersTurn &&
            this.boardData[2][2] === this.playersTurn
            ||
            this.boardData[0][2] === this.playersTurn &&
            this.boardData[1][1] === this.playersTurn &&
            this.boardData[2][0] === this.playersTurn
        ) {
            this.playersTurn === "😇" ? this.playerXscore++ : this.playerYscore++;
            $('h3').text(`😇 : ${this.playerXscore} ......................... 😈 : ${this.playerYscore}`)
            alert(`${this.playersTurn} won ! `);
            this.startGame();
        } else {
            this.playersTurn = this.playersTurn === "😇" ? "😈" : "😇";
        }
    }
}


const game = new Game();


