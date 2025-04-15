//let cambia varias veces y const no cambia pero se mantiene constante

const  canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//texto sin relleno
// espaciado entre letras
/*ctx.letterSpacing = "5px";

ctx.font = "bold 48px serif";
ctx.strokeText("Hola tonotos", 50, 100);

//texto relleno y sombra
ctx.shadowColor="purple";
ctx.shadowBlur=10; //no lleva comillas
ctx.font="italic 30 px serif";
ctx.fillText("eh regresado tonotos", 75, 150);*/


//creacion de circulo

//circulos blancos
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(200, 240, 40, 0, 2*Math.PI); //x, y, radio, angulo inicial, angulo final
ctx.stroke();
ctx.fill();

ctx.fillStyle= "black";
ctx.beginPath();
ctx.arc(200, 240, 10, 0, 2*Math.PI);
ctx.fill();


ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(400, 240, 40, 0, 2*Math.PI); //x, y, radio, angulo inicial, angulo final
ctx.stroke();
ctx.fill();

ctx.fillStyle= "black";
ctx.beginPath();
ctx.arc(400, 240, 10, 0, 2*Math.PI);
ctx.fill();


//cejas
ctx.fillStyle= "black";
ctx.fillRect(150, 150, 50, 10);

//cejas
ctx.fillStyle= "black";
ctx.fillRect(350, 150, 50, 10);


