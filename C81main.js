
var last_position_of_x, last_position_of_y;

canvas =document.getElementById("my_canvas");
ctx = canvas.getContext("2d"); 
color = "black";
width_of_line = 2;
var width=screen.width;
newheight=screen.height-300;
newwidth=screen.width-70;
if (width<992) {
    document.getElementById("my_canvas").width=newwidth;
    document.getElementById("my_canvas").height=newheight;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart (e) {
   width_of_line = document.getElementById("width").value;
    color=document.getElementById("color").value;
last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove (e) {
curret_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
curret_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
ctx.moveTo(last_position_of_x, last_position_of_y);
ctx.lineTo(curret_position_of_touch_x, curret_position_of_touch_y);
ctx.stroke(); 
last_position_of_x=curret_position_of_touch_x;
last_position_of_y=curret_position_of_touch_y;
}
function  cleararea() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}