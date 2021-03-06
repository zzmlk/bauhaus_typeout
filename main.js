var shape = [];
let value = 0;

function setup() {
    createCanvas(400, 400);
    noStroke();


}

function saveFunction() {
    saveCanvas('mycanvas', 'png')
}


function eraseFunction() {
    window.location.reload()

}



function draw() {
    background(243, 238, 230)
    for (let i = 0; i < shape.length; i++) {
        shape[i].display();
    }
}

function keyPressed() {
    if (key === 'a') {
        var b = new DrawRect(50, 50, 100, 100, 45, 83, 189)
        shape.push(b)

    }

    if (key === 'b') {
        var b = new DrawRect(300, 150, 80, 80, 255, 255, 255)
        shape.push(b)

    }

    if (key === 'c') {
        var b = new DrawTriangle(20, 100, 65, 20, 110, 100, 255, 255, 255)
        shape.push(b)

    }

    if (key === 'd') {
        var b = new DrawCircle(130, 250, 100, 255, 255, 255)
        shape.push(b)

    }
    if (key === 'e') {
        var b = new DrawTriangle(100, 200, 175, 75, 250, 200, 255, 217, 64)
        shape.push(b)

    }
    if (key === 'f') {
        var b = new DrawCircle(300, 300, 80, 45, 83, 189)
        shape.push(b)

    }
    if (key === 'g') {
        var b = new DrawRect(0, 120, 400, 5, 10, 10, 10)
        shape.push(b)

    }
    if (key === 'h') {
        var b = new DrawRect(340, 200, 50, 50, 10, 10, 10)
        shape.push(b)

    }
    if (key === 'i') {
        var b = new DrawCircle(300, 100, 100, 204, 29, 16)
        shape.push(b)

    }
    if (key === 'j') {
        var b = new DrawCircle(250, 100, 50, 10, 10, 10)
        shape.push(b)

    }
    if (key === 'k') {
        var b = new DrawRect(15, 250, 70, 100, 29, 16)
        shape.push(b)

    }
    if (key === 'l') {
        var b = new DrawRect(180, 0, 5, 400, 10, 10, 10)
        shape.push(b)

    }
    if (key === 'm') {
        var b = new DrawTriangle(260, 30, 315, 120, 370, 30, 10, 10, 10)
        shape.push(b)

    }
    if (key === 'n') {
        var b = new DrawRect(160, 250, 60, 60, 255, 217, 64)
        shape.push(b)

    }
    if (key === 'o') {
        var b = new DrawRect(100, 0, 5, 400, 10, 10, 10)
        shape.push(b)

    }
    if (key === 'p') {
        var b = new DrawTriangle(220, 380, 265, 300, 310, 380, 45, 83, 189)
        shape.push(b)

    }
    if (key === 'q') {
        var b = new DrawRect(300, 0, 5, 400, 10, 10, 10)
        shape.push(b)

    }
    if (key === 'r') {
        var b = new DrawCircle(50, 50, 50, 204, 29, 16)
        shape.push(b)

    }
    if (key === 's') {
        var b = new DrawRect(0, 320, 400, 5, 10, 10, 10)
        shape.push(b)

    }
    if (key === 't') {
        var b = new DrawCircle(100, 50, 50, 255, 217, 64)
        shape.push(b)

    }
    if (key === 'u') {
        var b = new DrawTriangle(200, 350, 265, 235, 330, 350, 204, 29, 16)
        shape.push(b)

    }
    if (key === 'v') {
        var b = new DrawRect(20, 240, 130, 130, 45, 83, 189)
        shape.push(b)

    }
    if (key === 'w') {
        var b = new DrawCircle(180, 200, 150, 10, 10, 10)
        shape.push(b)

    }
    if (key === 'x') {
        var b = new DrawRect(220, 50, 140, 200, 204, 29, 16)
        shape.push(b)

    }
    if (key === 'y') {
        var b = new DrawCircle(300, 100, 70, 255, 217, 64)
        shape.push(b)

    }
    if (key === 'z') {
        var b = new DrawRect(300, 200, 80, 80, 255, 217, 64)
        shape.push(b)

    }


    if (keyCode === BACKSPACE) {
        shape.pop()
        console.log("delete")
        console.log(shape)
    }
}