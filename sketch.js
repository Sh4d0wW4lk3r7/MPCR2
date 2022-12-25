var s,db,p,b1,g,f,c
function preload(){
 b1=loadImage("background (1).png")
  



}
function setup() {
  c=createCanvas(windowWidth,windowHeight);
  s = createSprite(300, 300);
  db=firebase.database()
  // db.ref("sprite").on("value",getdata,showerror)
  g=new Game()
  g.start()
  
  
}

function draw() {
  background(b1);
  // if (keyDown("up")) {
  //   move((x = 0), (y = -3));
  // }
  // if (keyDown("down")) {
  //   move((x = 0), (y = 3));
  // }
  // if (keyDown("left")) {
  //   move((x = -3), (y = 0));
  // }
  // if (keyDown("right")) {
  //   move((x = 3), (y = 0));
  // }
  // drawSprites();
}

function move(x, y) {
  // s.x += x;
  // s.y += y;
  db.ref("sprite").update({x:p.x+x,y:p.y+y})
}
function getdata(a){
p=a.val()  
s.x=p.x
s.y=p.y
}
function showerror(e){
console.log(e)  
}