var car,car1,car2,car3,wall;
var speed1,speed2,speed3,weight1,weight2,weight3,weight;
var deformation;


function setup() {
  createCanvas(1600,400);
  car =createSprite(50, 150, 40, 20);
  car1 =createSprite(50,50,40,20);
  car2 =createSprite(50,250,40,20);
  car3 =createSprite(50,350,40,20);
  wall =createSprite(800,200,40,800);
  wall.shapeColor=("white");

  speed =random(50,100);
  speed1 =random(40,130);
  speed2 =random(70,160);
  speed3 =random(30,200);
  weight =random(400,1500);
  weight1 =random(200,1700);
  weight2 =random(500,1400);
  weight3 =random(400,1800);

  car.velocityX =speed;
  car1.velocityX =speed1;
  car2.velocityX =speed2;
  car3.velocityX =speed3;
}

function draw() {
  background("black");
  if(car.collide(wall)) {
  deformation =0.5 *weight *speed *speed/22500;
  if(deformation>180){
    car.shapeColor=color(255,0,0);
  }
  else if(deformation<180 && deformation>100){
    car.shapeColor=color(230,230,0);
  }
  else{
    car.shapeColor=color(0,255,0);
  }
  }
  if(car1.collide(wall)) {
    deformation =0.5 *weight1 *speed1 *speed1/22500;
    if(deformation>180){
      car1.shapeColor=color(255,0,0);
    }
    else if(deformation<180 && deformation>100){
      car1.shapeColor=color(230,230,0);
    }
    else{
      car1.shapeColor=color(0,255,0);
    }
  }
  if(car2.collide(wall)) {
    deformation =0.5 *weight2 *speed2 *speed2/22500;
    if(deformation>180){
      car2.shapeColor=color(255,0,0);
    }
    else if(deformation<180 && deformation>100){
      car2.shapeColor=color(230,230,0);
    }
    else{
      car2.shapeColor=color(0,255,0);
    }
    }
    if(car3.collide(wall)) {
      deformation =0.5 *weight3 *speed3 *speed3/22500;
      if(deformation>180){
        car3.shapeColor=color(255,0,0);
      }
      else if(deformation<180 && deformation>100){
        car3.shapeColor=color(230,230,0);
      }
      else{
        car3.shapeColor=color(0,255,0);
      }
      }
          
  drawSprites();
}