const squares = [];
const boardSize = 8;
const squareSize = 50;

function startSquares() {
    for (let i = 0; i < boardSize; i++) {
        squares.push([]);
        for (let j = 0; j < boardSize; j++) {
            let color;
            if ((i + j) % 2 == 0) {
                color = "black";
            } else {
                color = "white";
            }
            squares[i][j] = {
                x: i * squareSize,
                y: j * squareSize,
                color: color,
                side: squareSize
            };
        }
    }
}

function createSquares() {
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            fill(squares[i][j].color);
            rect(squares[i][j].x, squares[i][j].y, squares[i][j].side, squares[i][j].side);
        }
    }
}