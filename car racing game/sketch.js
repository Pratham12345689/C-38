var  database;
var gameState=0,playerCount=0,distance=0;
var allPlayers;
var form,game,player;
var car1,car2,car3,car4,cars;


function setup(){
  database = firebase.database();
 
  createCanvas(displayWidth-20,displayHeight-30)
game=new Game ()
game.getState();
game.start();

 
}

function draw(){
  background("yellow");
  if(playerCount===4){
    game.update(1);
  }
  if(gameState===1){
    clear();
game.play();
  }
    
    
  
}

