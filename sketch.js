 //Create variables here
 var dog, happyDog, database, foodS, foodStock;
 
 function preload(){
   //load images here
   Standdog = loadImage("dog.png")
   happyDog = loadImage("Happydog.png")
 }
 
 function setup() {
    createCanvas(500,500);
    dog = createSprite(250,300,150,150);
    dog.addImage(Standdog)
    
    dog.scale = 0.25
    database = firebase.database();
    foodStock = database.ref('food');
    foodStock.on("value",readStock);  
 }
 
 
 function draw() {  
 background(50, 140, 85);
 
 if(keyWentDown(UP_ARROW)){
   writeStock(foodS)
   dog.addImage(happyDog)
 }
 else{
   dog.addImage(Standdog)
 }

   drawSprites();
   //add styles here
   textSize(13);
   fill("white")
   text("Note: Press Up arrow key to feed the Dog",115,30)
 
   textSize(15);
   fill("white")
   text(" Food Remaining : " + foodS,180,180);
 
 }
 
 function readStock(data){
 foodS = data.val();

 }
 
 function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1
  }

   database.ref('/').update({
    //food:x = 20 //<-This is for reseting the food back to normal.
    food:x = x
   })
   }
