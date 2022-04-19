var bgimg;
var hotAirBalloon;
var hotAirBalloonimg;
var database;//visual studios database is called database, and firebase database is called firebase
var height;
var firebase;

function preload()
{
bgimg = loadImage("images/cityImage.png")
hotAirBalloonimg = loadImage("images/HotAirBallon01.png")
}



function setup()
{
  //linking the visual studio database to firebase database
  database = firebase.database()

createCanvas(windowWidth,windowHeight)

hotAirBalloon = createSprite(100,150,100,100)
hotAirBalloon.addImage("hotAirBalloon", hotAirBalloonimg)
hotAirBalloon.scale = 0.5


 var balloonHeight = database.ref("balloon/height")
 balloonHeight.on("value",readHeight)

}


function draw()
{
  image(bgimg, 0, 0, windowWidth, windowHeight)

  if(keyDown(DOWN_ARROW))
  {
    updateHeight(0,10)
  }

  else if(keyDown(UP_ARROW))
  {
    updateHeight(0,-10)
  }

  else if(keyDown(LEFT_ARROW))
  {
    updateHeight(-10,0)
  }

  else if(keyDown(RIGHT_ARROW))
  {
    updateHeight(10,0)
  }

  drawSprites()
}

function updateHeight(x,y)//declaring the variables x and y
{
  //go to the firebase database to the node height from the visual studio database
  database.ref("balloon/height").set({


    x: height.x + x,
    y: height.x + x
  })
}

function readHeight(data)
{
  height = data.val()
  hotAirBalloon.x = height.x 
  hotAirBalloon.y = height.y
}