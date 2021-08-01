function preload (){
  issImage = loadImage ("iss.png")
  spaceImage = loadImage ("spacebg.jpg")
  spaceCraft = loadImage ("spacecraft1.png")
  bothwing = loadImage ("spacecraft2.png")
  leftwing = loadImage ("spacecraft3.png")
  rightwing = loadImage ("spacecraft4.png")
  down = loadImage ("image.png")

}
function setup() {
  createCanvas(1300,700);
  iss = createSprite(750, 300, 50, 50);
  invis = createSprite(685,350,20,20)
  invis.visible=false
  iss.addImage(issImage)
  iss.Scale = 0.3
  smolspacecraft = createSprite(750, 700, 50, 50);
  smolspacecraft.addImage(spaceCraft)
  iss.setCollider("circle", -90, 0, 50)
  smolspacecraft.setCollider("circle", 0, -20, 50)
}
function draw() {
  background(spaceImage);  
  smolspacecraft.scale=0.15
  console.log(mouseX+" "+mouseY)
  drawSprites();
  
  if (keyDown(RIGHT_ARROW) ) {
    smolspacecraft.x += 10
    smolspacecraft.addImage(rightwing) 
  }
  if (keyDown(LEFT_ARROW) ) {
    smolspacecraft.x -= 10
    smolspacecraft.addImage(leftwing) 
  }
  if (keyDown(UP_ARROW) ) {
    smolspacecraft.y -= 10
    smolspacecraft.addImage(bothwing) 
  }
  if (keyDown(DOWN_ARROW) ) {
    smolspacecraft.y += 10
    smolspacecraft.addImage(down) 
  }
 if(smolspacecraft.isTouching(invis)){
   textSize (35)
   fill("red")
   text("Docking Succesfull",500,500)
   smolspacecraft.velocity = 0
 }

}