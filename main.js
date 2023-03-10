canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var mouseEvent = "empty";
var lastPositionX, lastPositionY;


color = "black";
widthLine = 1;
radius = 2;

canvas.addEventListener("mousedown", myMouseDown);

function myMouseDown(e) {
    //Addictonal Activity start
    color = document.getElementById("color").value;
    widthLine = document.getElementById("widthLine").value;
    //Addictonal Activity ends
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}


canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e) {
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e) {
    mouseEvent = "mouseleave";
}
//as variáveis do slide estão escritas diferentes
canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e) {
    PositionMouseX = e.clientX - canvas.offsetLeft;
    PositionMouseY = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthLine;
        ctx.arc(PositionMouseX, PositionMouseY, radius ,0 , 2 * Math.PI);

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + lastPositionX + "y = " + lastPositionY);
        ctx.moveTo(lastPositionX, lastPositionY);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + PositionMouseX + "y = " + PositionMouseY);
        ctx.lineTo(PositionMouseX, PositionMouseY);
        ctx.stroke();
    }

    lastPositionX = PositionMouseX;
    lastPositionY = PositionMouseY;
}

//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}