
canvas.width = window.innerWidth;
canvas.height= window.innerHeight;

var c = canvas.getContext("2d");

//set line color / width
c.lineWidth=3;
c.strokeStyle= "blue";

c.beginPath();
c.moveTo(100, 300); //Startpunkt
c.lineTo(400, 450); //Endpunkt
c.stroke();