const USSAssembly = {
    name:"Captain",
    hull: 20,
    firepower: 5,
    accuracy: 0.7,
  };

  class SpaceShip {
    constructor(name, hull, firepower, accuracy ) {
      this.name = name;
      this.hull = hull;
      this.firepower = firepower;
      this.accuracy = accuracy;
      this.hull = Math.floor(Math.random() * 4) + 3;
      this.firepower = Math.floor(Math.random() * 3) + 2;
      this.accuracy = (Math.random() * 0.3) + 0.6;
    }
  

  //This is how I get the random digits for the properties
//random properties for Alienships
// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min); 
 

attack(target) {
    if (Math.random() < this.accuracy) {
      console.log("Alien ship hits USS Assembly!");
      target.hull -= this.firepower;
      if (target.hull <= 0) {
        console.log("USS Assembly has been destroyed. Game Over!");
        return false;
      }
    } else {
      console.log("Alien ship missed!");
    }
    return true;
  }
}
function retreat() {
    console.log("USS Assembly has retreated. Game Over!");
  }
  
  function attackAlien(alienShip) {
    console.log("USS Assembly attacks alien ship!");
    if (Math.random() < USSAssembly.accuracy) {
      console.log("Alien ship hit!");
      alienShip.hull -= USSAssembly.firepower;
      if (alienShip.hull <= 0) {
        console.log("Alien ship destroyed!");
        return true;
      }
    } else {
      console.log("USS Assembly missed!");
    }
    return false;
  }
  
  function battle(alienShips) {
    for (let i = 0; i < alienShips.length; i++) {
      const currentAlienShip = alienShips[i];
      console.log(`----- Alien Ship ${i + 1} Approaching -----`);
      while (true) {
        if (attackAlien(currentAlienShip)) {
          if (i === alienShips.length - 1) {
            console.log("Congratulations! You destroyed all alien ships. You Win!");
            return;
          }
          const choice = prompt("Do you want to attack the next ship or retreat? (attack/retreat)");
          if (choice.toLowerCase() === "retreat") {
            retreat();
            return;
          } else {
            break;
          }
        }
        if (!currentAlienShip.attack(USSAssembly)) {
          return;
        }
      }
    }
  }
  
  // Start the game with 6 alien ships
  const alienShips = Array.from({ length: 6 }, () => new alienShips());
  battle(alienShips);
  
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function updateGame() {
    drawGame();
}

document.getElementById("attackBtn").addEventListener("click", () => {
  const currentAlienShip = alienShips[0];
  if (attackAlien(currentAlienShip)) {
    alienShips.shift();
    if (alienShips.length === 0) {
      console.log("Congratulations! You destroyed all alien ships. You Win!");
    } else {
      console.log("Alien ship destroyed! Continue to next ship or retreat.");
    }
  } else {
    currentAlienShip.attack(USSAssembly);
  }
});

document.getElementById("retreatBtn").addEventListener("click", () => {
  retreat();
});
alienShips = Array.from({ length: 6 }, () => new alienShips());
updateGame();