let canvas = document.getElementById("canvas");
canvas.width = document.documentElement.clientWidth; //画布宽高自适应屏幕宽高
canvas.height = document.documentElement.clientHeight;

//画线
let ctx = canvas.getContext("2d"); //获得渲染上下文和它的绘画功能，删了就画不了了
ctx.fillStyle = "black";
ctx.lineWidth = 5;
ctx.lineCap = "round"; //令笔触末端变为圆形
let painting = false;
let last;
var isTouchDevice = "ontouchstart" in document.documentElement; //判断是否是移动端设备，true是移动端，false则是PC端

/* 画线的原理：将鼠标当前按下位置和上一次按下位置连线 */

if (isTouchDevice) {
    canvas.ontouchstart = (e) => {
        //获取上一次的手指触碰位置
        let x = e.touches[0].clientX; //触碰屏幕的手指可以有多根，e.touches[0].clientX，表示第【0】根手指触碰屏幕时的x坐标
        let y = e.touches[0].clientY;
        last = [x, y];
    };

    canvas.ontouchmove = (e) => {
        let x = e.touches[0].clientX;
        let y = e.touches[0].clientY;
        drawline(last[0], last[1], x, y);
        last = [x, y];
    };
} else {
    canvas.onmousedown = (e) => {
        painting = true;
        last = [e.clientX, e.clientY];
    };

    canvas.onmousemove = (e) => {
        if (painting === true) {
            drawline(last[0], last[1], e.clientX, e.clientY);
            last = [e.clientX, e.clientY];
        }
    };

    canvas.onmouseup = () => {
        painting = false;
    };
}

function drawline(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}