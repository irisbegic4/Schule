var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height= window.innerHeight;

var c = canvas.getContext("2d");

//set line color / width
c.lineWidth=3;
c.strokeStyle= "blue";

c.beginPath();
c.moveTo(100, 500); //Startpunkt
c.lineTo(100, 300); //Endpunkt
c.lineTo(300, 200); //Endpunkt
c.lineTo(500, 300); //Endpunkt
c.lineTo(500, 500); //Endpunkt
c.lineTo(100, 300); //Endpunkt
c.lineTo(500, 300); //Endpunkt
c.lineTo(100, 500); //Endpunkt
c.lineTo(500, 500); //Endpunkt
c.stroke();