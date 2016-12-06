var timeStart = Date.now()

// randomNumber returns a random number between min and max
function randomNumber(min,max)
{
 return Math.floor(Math.random()*(max-min+1)+min);
}
foodEaten = 0

var chapeX = 375;

var chapeY = 125;
document.addEventListener("keydown", function(e) {
  if(e.keyCode == 37){
    chapeX -=15;
 document.getElementById("chape").setAttribute("x", chapeX)

  }
  else if(e.keyCode == 39){
        chapeX +=15;
 document.getElementById("chape").setAttribute("x", chapeX)
  }

else if(e.keyCode == 38){
  chapeY -=15;
  document.getElementById("chape").setAttribute("y", chapeY)
}

else if(e.keyCode == 40){
  chapeY +=15;
    document.getElementById("chape").setAttribute("y", chapeY)
}
var foodX = Number(document.getElementById('cup').getAttribute("x"))
var foodY = Number(document.getElementById('cup').getAttribute("y"))

  if(chapeX > foodX && chapeX < foodX + 70 && chapeY > foodY && chapeY < foodY +70){
    var randX = randomNumber(0,750)
    document.getElementById("cup").setAttribute("x", randX)
    foodEaten = foodEaten + 1
    document.getElementById("score").textContent = foodEaten
  }

if(foodEaten == 2){
  document.getElementById("screen").pauseAnimations()
  var timeStop = Date.now()
  var totalTime = (timeStop - timeStart)/1000
  document.getElementById("totalTime").textContent = totalTime
}

})
