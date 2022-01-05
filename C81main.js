canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";

ctx.beginPath()
ctx.strokeStyle = color;
ctx.lineWidth = 3;
ctx.arc(200,200,25,0,2*Math.PI)
ctx.stroke()

canvas.addEventListener("mousedown",canvas_click)
function canvas_click(e){
    color= document.getElementById("input_color").value;
    console.log(color);
    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clientY-canvas.offsetTop;
    console.log(mousex+" ,"+mousey);
    ctx.beginPath()
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.arc(mousex,mousey,25,0,2*Math.PI)
    ctx.stroke();
}

function clear_area(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}