function generator(matLen, gr, grEat, pr, gr2, mah, ul, pix) {
    let matrix = [];
    for (let i = 0; i < matLen; i++) {
        matrix[i] = [];
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0;
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < pix; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 33;
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let i = 0; i < ul; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 22;
        }
    }
    for (let i = 0; i < pr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let i = 0; i < gr2; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 10;
        }
    }
    for (let i = 0; i < mah; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 11;
        }
    }
    return matrix;
}

let side = 20;

let matrix = generator(15, 30, 3, 5, 3, 5, 10, 14);

var grassArr = []
let grassEaterArr = []
let PredatorArr = []
let grass2Arr = []
let mah = []
let ulArr = []
let pixArr = []

function setup() {
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    frameRate(3)
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let grE = new GrassEater(x, y)
                grassEaterArr.push(grE)
            }
            else if (matrix[y][x] == 3) {
                let pre = new Predator(x, y)
                PredatorArr.push(pre)
            }
            else if (matrix[y][x] == 10) {
                let gr2 = new Grass2(x, y)
                grass2Arr.push(gr2)
            }
            else if (matrix[y][x] == 11) {
                let mah = new Mah(x, y)
                
            }
            
            else if (matrix[y][x] == 22) {
                let ul = new Ul(x, y)
                ulArr.push(ul)
            } else if (matrix[y][x] == 33) {
                let pix = new Pix(x, y)
                pixArr.push(pix)
            }
        }
        console.log(ulArr);
        console.log(pixArr)
    }
}
function draw() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill('green')
            } else if (matrix[y][x] == 0) {
                fill('#acacac')
            } else if (matrix[y][x] == 2) {
                fill('yellow')
            } else if (matrix[y][x] == 3) {
                fill('red')
            } else if (matrix[y][x] == 10) {
                fill('blue')
            } else if (matrix[y][x] == 11) {
                fill('black')
            } else if (matrix[y][x] == 22) {
                fill('purple')
            } else if (matrix[y][x] == 33) {
                fill('lightblue')
            }

            rect(x * side, y * side, side, side)
        }
    }

    for (let i in grassArr) {
        grassArr[i].mul()
    }

    for (let i in grass2Arr) {
        grass2Arr[i].mul()
    }
    for (let i in grassEaterArr) {
        grassEaterArr[i].mul()
        grassEaterArr[i].eat()

    }
    for (let i in ulArr) {
        ulArr[i].move()
    }
    for (let i in pixArr) {
        pixArr[i].eat()
        pixArr[i].move()

    }
    for (let i in PredatorArr) {
        PredatorArr[i].mul()
        PredatorArr[i].eat()

    }
}


console.log(pixArr)

var a = 10
var b = 10
var c = 10
var d = 10

function clickHandler(evt) {
    console.log(evt);
    var str = "THANKS FOR STARTING ------->>>>> CHOOSE THE WEATHER ";
    this.innerText = str;
}

var p = document.getElementById("pElement");
p.addEventListener("click", clickHandler);
p.style.backgroundColor = "green";
p.style.backgroundSize = "60px 120px";


function bodyClick(evt) {
    p.style.backgroundColor = "blue";
    p.style.backgroundSize = "6px";
}
p.addEventListener("click", bodyClick);
var img5 = document.getElementById("img5");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var img1 = document.getElementById("img1");
function img11(evt) {
    img5.src = img1.src
    a = 2
    b = 3
    c = 4
    d = 2
}
function img22(evt) {
    img5.src = img2.src
    a = 5
    b = 6
    c = 7
    d = 4
}
function img33(evt) {
    img5.src = img3.src
    a = 10
    b = 11
    c = 12
    d = 8
}
function img44(evt) {
    img5.src = img4.src
    a = 20
    b = 21
    c = 22
    d = 50
}

img1.addEventListener("click", img11);
img2.addEventListener("click", img22);
img3.addEventListener("click", img33);
img4.addEventListener("click", img44);


// var Aarr = [];


// if (ulArr[0] == Aarr[0]) {
//     console.log(111111111123456789098765432)
// }

// var fs = require('fs');
// var statistics = {};
// let aa = grassArr.length;
// let bb = grass2Arr.length;
// let cc = grassEaterArr.length;
// let dd = ulArr.length;
// let ff = PredatorArr.length;

// setInterval(function() {
// statistics.grass = aa;
// statistics.grassEater = cc;
// statistics.grass2 = bb;
// statistics.ul = dd;
// statistics.Predator = ff;
// fs.writeFile("statistics.json", JSON.stringify( statistics), function(){
// console.log("send")
// })
// },1000);



// var statistics = {};
// let aa = grassArr.length;
// let bb = grass2Arr.length;
// let cc = grassEaterArr.length;
// let dd = ulArr.length;
// let ff = PredatorArr.length;

// setInterval(function() {
// statistics.grass = aa;
// statistics.grassEater = cc;
// statistics.grass2 = bb;
// statistics.ul = dd;
// statistics.Predator = ff;
// fs.writeFile("statistics.json", JSON.stringify( statistics), function(){
// console.log("send")
// })
// },1000);