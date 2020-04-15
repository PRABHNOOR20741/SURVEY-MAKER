var canvas;
var EmailCount,count,maker;
var form,email,formMaker;
var database;
var StartValue = 0;

function setup()
{
  canvas = createCanvas(400,400);  
  database = firebase.database();

 formMaker = new Maker();
 formMaker.start();
 
}

function draw()
{
formMaker.display();
}