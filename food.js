class Food{

    constructor(){
    this.milkImg = loadImage("milk.png")   
    }
  display(){
      var x=80
      var y=100
      imageMode(CENTER);
      //image(this.milkImg,720,220,70,70)
      console.log(foodStock)
      if(this.foodStock!=0){
          for(var i=0;i<this.foodStock;i++){
              if(i%10==0){
                  x=80
                  y=y+50
              }
              image(this.milkImg,x,y,50,50)
              x=x+30
          }
      } 
  } 
  bedroom(){
    background(bedroomImg,550,500)
}
  garden(){
     background(gardenImg,550,500)
  } 
  washroom(){
      background(washroomImg)
  }
}