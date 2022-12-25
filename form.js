class Form{
    constructor(){
    this.input=createInput().attribute("placeholder","Enter your name")    
    this.playbutton=createButton("PLAY")
    // this.titleimage=createImg("title.png","Game title")
    this.greeting=createElement("h1")
    } 
    setposition(){
    // this.titleimage.position(100,50)    
    this.input.position(width/2-100,height/2-100)
    this.playbutton.position(width/2-50,height/2-50)
    this.greeting.position(width/2,height/2)
    }
    setstyle(){
    //  this.titleimage.class("gametitle")
     this.input.class("input")  
     this.playbutton.class("play") 
     this.greeting.class("greet")
    }
    display(){
this.setposition()

    }   
    }