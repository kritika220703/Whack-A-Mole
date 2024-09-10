let currentMoleTile;
let currentPlantTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    //set up the grid for the game board made in HTML

    for(let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole, 2000); 
    setInterval(setPlant, 4000)
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if(gameOver){
        return;
    } 

    if(currentMoleTile) {
        currentMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";

    let num = getRandomTile();
    if(currentPlantTile && currentMoleTile.id == num){
        return;
    }
    currentMoleTile = document.getElementById(num);
    currentMoleTile.appendChild(mole);
}

function setPlant() {
    if(gameOver){
        return;
    }

    if(currentPlantTile) {
        currentPlantTile.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png";

    let num = getRandomTile();
    if(currentMoleTile && currentMoleTile.id==num){
        return;
    }
    currentPlantTile = document.getElementById(num);
    currentPlantTile.appendChild(plant);
}


function selectTile() {
    if(gameOver) {
        return;
    }

    if(this == currentMoleTile){
        score += 10;
        document.getElementById("score").innerText = score.toString();
    }
    else if(this == currentPlantTile){
        // Play game-over sound
        let gameOverSound = new Audio('./mario_game_over_sms.mp3'); // Ensure this path points to your sound file
        gameOverSound.play();

        // Show Game Over pop-up
        document.getElementById("gameOverPopup").classList.remove("hidden");

        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}

function restartGame() {
    score = 0;
    gameOver = false;
    document.getElementById("score").innerText = score.toString();
    document.getElementById("gameOverPopup").classList.add("hidden");
    // You can reset the board or any other game variables here as needed
}

