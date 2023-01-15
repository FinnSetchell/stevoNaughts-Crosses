const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const boardCells = 3; //value will be 3 for 3x3 grid
const cellWidth = 300; //cell length/width
const borderWidth = 8;
const boardSize = (((boardCells +1)*borderWidth)+ (boardCells * cellWidth));

let board = [];

//player enums
const player1 = {
    symbol: 'x',
    name: 'Player 1'
};
const player2 = {
    symbol: 'o',
    name: 'Player2'
};

function createBoard(){
    for (let y=1;y <=boardCells;y++){
        for (let x=1;x<=boardCells;x++){
            board.push({x:x,y:y,data:null});
        }
    }
    console.log(board)
    context.fillRect(0,0,boardSize,boardSize);
    //top row
    context.clearRect(borderWidth,borderWidth,cellWidth,cellWidth);
    context.clearRect((cellWidth + (2*borderWidth)),borderWidth,cellWidth,cellWidth);
    context.clearRect(((2*cellWidth) + (3*borderWidth)),borderWidth,cellWidth,cellWidth);
    //middle row
    context.clearRect(borderWidth,(cellWidth + (2*borderWidth)),cellWidth,cellWidth);
    context.clearRect((cellWidth + (2*borderWidth)),(cellWidth + (2*borderWidth)),cellWidth,cellWidth);
    context.clearRect(((2*cellWidth) + (3*borderWidth)),(cellWidth + (2*borderWidth)),cellWidth,cellWidth);
    //bottom row
    context.clearRect(borderWidth, ((2*cellWidth) + (3*borderWidth)),cellWidth,cellWidth);
    context.clearRect((cellWidth + (2*borderWidth)),((2*cellWidth) + (3*borderWidth)),cellWidth,cellWidth);
    context.clearRect(((2*cellWidth)+(3*borderWidth)),((2*cellWidth)+(3*borderWidth)),cellWidth,cellWidth);
    //add grid numbers
    context.font = "16pt sans-serif";
    context.fillText("0",140,25);
    context.fillText("1",295,25);
    context.fillText("2",450,25);
    context.fillText("3",140,180);
    context.fillText("4",295,180);
    context.fillText("5",450,180);
    context.fillText("6",140,335);
    context.fillText("7",295,335);
    context.fillText("8",450,335);
}


function areEqual(){
    for(let u=1;u<arguments.length;u++){
        if (arguments[u] === null || arguments[u] !== arguments[u-1]){
            return false;
        }
        return true;
    }
}

function checkWin(bd2){
    if(
        areEqual(bd2.c0,bd2.c1,bd2.c2)
        || areEqual(bd2.c3,bd2.c4,bd2.c5)
        || areEqual(bd2.c6,bd2.c7,bd2.c8)
        || areEqual(bd2.c0,bd2.c3,bd2.c6)
        || areEqual(bd2.c1,bd2.c4,bd2.c7)
        || areEqual(bd2.c2,bd2.c5,bd2.c8)
        || areEqual(bd2.c0,bd2.c4,bd2.c8)
        || areEqual(bd2.c2,bd2.c4,bd2.c6)
    ){
        console.log("Win");
        return true;
    }
    return false;
}

// function addMark(pl,c){
//     if (pl === 'X'){
//         board.c = 
//     }
// }

createBoard();

canvas.addEventListener('click',function(event){
    let x = Math.round(event.clientX - canvas.getBoundingClientRect().left);
    let y = Math.round(event.clientY - canvas.getBoundingClientRect().top);
    let cellx = Math.floor((x-16)/150) + 1;
    let celly = Math.floor((y-16)/150) + 1;
    //1 is added as the x&y coordinates start from one in the 'board array'
    console.log(cellx,celly);
    let index = board.findIndex(board => board.x == cellx && board.y == celly);
    console.log("cell",index);
},false);



//     let cellx = Math.floor((x-16)/150) + 1;
//     let celly = Math.floor((y-16)/150) + 1;
//     console.log(cellx,celly);
//     let index = board.findIndex(b => b.x == cellx && b.y == celly);
//     console.log("cell",index);
//     addMark(index);