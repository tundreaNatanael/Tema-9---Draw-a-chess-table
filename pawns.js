const pawns = [];
const constDiameter = 25;
const numberOfPawns = 8;
const boardSize = 8; 

function startPawns() {
    for (let i = 0; i < numberOfPawns; i++) {
        let randomX = Math.floor(Math.random() * boardSize);
        let randomY = Math.floor(Math.random() * boardSize);
        pawns.push({
            x: randomX * 50 + 25,
            y: randomY * 50 + 25,
            diameter: constDiameter,
            color: "white",
            stroke: "black"
        });
    }

    for (let i = 0; i < numberOfPawns; i++) {
        let randomX = Math.floor(Math.random() * boardSize);
        let randomY = Math.floor(Math.random() * boardSize);
        pawns.push({
            x: randomX * 50 + 25,
            y: randomY * 50 + 25,
            diameter: constDiameter,
            color: "black",
            stroke: "white"
        });
    }
}

function createPawns() {
    for (let i = 0; i < pawns.length; i++) {
        let pawn = pawns[i];
        stroke(pawn.stroke);
        fill(pawn.color);
        circle(pawn.x, pawn.y, pawn.diameter);
    }
    
}

