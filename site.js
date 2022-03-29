"use scrict";

let id = null;

function AnimateTheSun(){
  let speed = parseInt(selSpeed.value);
  console.log(`speed = ${speed}`);

  const sun = document.getElementById("imgSun");   
  let posX = 0;
  let posY = 0;
  
  clearInterval(id);
  id = setInterval(moveRight, 5);
  
  function moveRight() {
    if (posX > 770) {
      posX = 770;
    }
    if (posX == 770) {
      clearInterval(id);
      id = setInterval(moveDown, 5);
    } else {
      posX = posX + speed;
      sun.style.left = posX + "px";
      console.log(`left = ${sun.style.left}`);
    }
  }
  
  function moveDown() {
    if (posY > 350) {
      posY = 350;
    }
    if (posY == 350) {
      clearInterval(id);
      id = setInterval(moveLeft, 5);
    } else {
      posY = posY + speed;
      sun.style.top = posY + "px";
      console.log(`top = ${sun.style.top}`);
    }
  }

  function moveLeft() {
    if (posX < 0) {
      posX = 0;
    }
    if (posX == 0) {
      clearInterval(id);
      id = setInterval(moveUp, 5);
    } else {
      posX = posX - speed;
      sun.style.left = posX + "px";
      console.log(`left = ${sun.style.left}`);
    }
  }

  function moveUp() {
    if (posY < 0) {
      posY = 0;
    }
    if (posY == 0) {
      clearInterval(id);
    } else {
      posY = posY - speed;
      sun.style.top = posY + "px";
      console.log(`top = ${sun.style.top}`);
    }
  }
}
