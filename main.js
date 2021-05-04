// window.alert("click the canvas and play with the keyboard");

var shape = [];



function setup() {
    createCanvas(400, 400);
    noStroke();
    background(243, 238, 230);
    // saveCanvas();

}



function draw() {
    for (let i = 0; i < shape.length; i++) {
        shape[i].display();
    }

}

function keyPressed() {



    // var s = new Objects();
    // shape.push(s);

    // shape.push(new Objects());

    // if (key === 'a') {
    //     shape.push(
    //         fill(45, 83, 189), //blue
    //         rect(50, 50, 100, 100),

    //     );
    // }



}



// ----------------------------------------------------------



function keyPressed() {

    for (let i = 0; i < shape.length; i++) {
        if (keyCode === LEFT_ARROW) {
            background(243, 238, 230);
            // shape.pop();
            // shape.splice(i, 1);
            // console.log(shape);
        }

    }

    // var s = new Shapes(x, y, h, w);
    // shape.push(s);

    // if (keyCode === LEFT_ARROW) {
    //     // background(243, 238, 230);
    //     // shape.pop();
    //     shape.splice();
    //     console.log(shape);
    // }

    if (key === 'a') {


        shape.push(
            rect(50, 50, 100, 100),
            fill(45, 83, 189)
        );
        console.log(shape);
    }

    if (key === 'b') {

        shape.push(
            rect(300, 150, 80, 80),
            fill(255, 255, 255)
        );
    }

    if (key === 'c') {
        fill(255, 255, 255); //white
        triangle(20, 100, 65, 20, 110, 100);
    }

    if (key === 'd') {
        fill(255, 255, 255); //white
        circle(130, 250, 100);
    }
    if (key === 'e') {
        fill(255, 217, 64); //yellow
        triangle(100, 200, 175, 75, 250, 200);
    }
    if (key === 'f') {
        fill(45, 83, 189);
        circle(300, 300, 80);
    }
    if (key === 'g') {
        fill(10, 10, 10); //black
        rect(0, 120, 400, 5);
    }
    if (key === 'h') {

        fill(10, 10, 10); //black
        rect(340, 200, 50, 50);
    }
    if (key === 'i') {
        fill(204, 29, 16); //red
        circle(300, 100, 100);

    }
    if (key === 'j') {
        fill(10, 10, 10);
        circle(250, 100, 50);
    }
    if (key === 'k') {
        fill(204, 29, 16);
        rect(15, 300, 70);
    }
    if (key === 'l') {
        fill(10, 10, 10); //black
        rect(180, 0, 5, 400);
    }

    if (key === 'm') {
        fill(10, 10, 10);
        triangle(260, 30, 315, 120, 370, 30);
    }
    if (key === 'n') {
        fill(255, 217, 64);
        rect(160, 250, 60, 60);
    }
    if (key === 'o') {
        fill(10, 10, 10); //black
        rect(100, 0, 5, 400);

    }
    if (key === 'p') {
        fill(45, 83, 189);
        triangle(220, 380, 265, 300, 310, 380);
    }
    if (key === 'q') {
        fill(10, 10, 10); //black
        rect(300, 0, 5, 400);
    }
    if (key === 'r') {
        fill(204, 29, 16);
        circle(50, 50, 50);
    }
    if (key === 's') {
        fill(10, 10, 10); //black
        rect(0, 320, 400, 5);
    }
    if (key === 't') {
        fill(255, 217, 64);
        circle(100, 50, 50);
    }
    if (key === 'u') {
        fill(204, 29, 16); //red
        triangle(200, 350, 265, 235, 330, 350);
    }
    if (key === 'v') {
        fill(45, 83, 189);
        rect(20, 240, 130, 130);
    }
    if (key === 'w') {
        fill(10, 10, 10);
        circle(180, 200, 150);
    }
    if (key === 'x') {
        fill(204, 29, 16);
        rect(220, 50, 140, 200);
    }
    if (key === 'y') {
        fill(255, 217, 64);
        circle(300, 100, 70);
    }

    if (key === 'z') {
        fill(255, 217, 64);
        rect(300, 200, 80, 80);
    }


}

document.getElementsById("download").addEventListener("click", function() {
    saveCanvas()
});

document.getElementsById("refresh").addEventListener("click", function() {
    background(243, 238, 230)

});

function saveFunction() {
    saveCanvas()
}