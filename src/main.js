import { initSnake, moveSnake, drawSnake } from "./snake.js";
import { generateFood, drawFood } from "./food.js";
import { handleDirectionChange } from "./controls.js";
import { checkCollision, drawGameOver, checkWallCollision } from "./collision.js";
import { displayHighScores, drawScore, saveScore } from "./score.js";

const canvas = document.getElementById("gameCanvas");       //Récupère l'élément canvas
const ctx = canvas.getContext("2d");                        //Récupère le contexte 2D du canvas           

const box = 20;             //Taille d'un carré pour le serpent et la pomme
const gameSpeed = 100;      //Vitesse du jeu
let gamePaused = false;     //Variable pour stocker l'état du jeu
let snake;                  // Initialisation du serpent
let food;                   // Initialisation de la nourriture
let direction = "RIGHT";    // Direction initial du serpent
let score = 0;              // Score initial
let gameInterval;           // Variable pour stocker l'identifiant de l'intervalle


//Lancer le jeu avec Espace ou gère les directions du serpent
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    // Si le jeu est lancé, on le met en pause
    if (gameInterval) {
      pauseGame();
    } else {
      // Si le jeu n'est pas lancé
      // - Si le jeu était en pause, on le reprend
      // - Sinon, on démarre le jeu pour la première fois
      if (gamePaused) {
        resumeGame();
      } else {
        startGame();
      }
    }
  } else {
    direction = handleDirectionChange(event, direction);
  }
});

//Affiche le message d'instruction de départ
welcomeMessage();
//Affiche les scores
displayHighScores();

//Fonction pour lancer le jeu
function startGame() {
  snake = initSnake(box);
  food = generateFood(box, canvas, snake);

  gameInterval = setInterval(draw, gameSpeed); // Stockage de l'identifiant de l'intervalle
  gamePaused = false;
  
}

function draw() {
  /// console.log("Longueur du serpent :", snake.length);
  /// console.log("Position de la tête :", snake[0]);
  /// console.log("Position de la nourriture :", food);
  
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Efface le canvas
  
  if(checkCollision(snake) || checkWallCollision(snake, canvas, box)){
    clearInterval(gameInterval); // Arrête le jeu
    drawGameOver(ctx, canvas, score); // Affiche le message de fin de jeu
    saveScore(score); // Sauvegarde le score
    gameInterval = null; // Réinitialise l'identifiant de l'intervalle
    score = 0; // Réinitialise le score
    return;
  }
  
  moveSnake(snake, direction, box);
  
  //Vérifie si le serpent mange de la nourriture
  if (snake[0].x === food.x && snake[0].y === food.y) {
    food = generateFood(box, canvas, snake);
    score++;
    console.log(score);
    /// console.log("Taille après = ", snake.length);
  }else{
    snake.pop(); //Supprime la queue si le serpent ne mange rien pour simuler le déplacement
  }
  displayHighScores()
  drawScore(score);
  drawFood(ctx, food, box)
  drawSnake(ctx, snake, box);
}

function welcomeMessage(){
//Affiche le message d'instruction de départ
ctx.font = "20px Arial";
ctx.fillStyle = "black";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillText("Appuyez sur Espace pour jouer", canvas.width / 2, canvas.height / 2);
}


function pauseGame(){
  clearInterval(gameInterval);
  gameInterval = null;
  gamePaused = true;
  drawPause();
}

function resumeGame(){
  gameInterval = setInterval(draw, gameSpeed);
  gamePaused = false;
}
function drawPause(){
  // Configure la police et l'alignement
  ctx.font = "40px Arial";
  ctx.fillStyle = "Black";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  
  ctx.fillText("PAUSE", canvas.width / 2, canvas.height / 2 - 20);
  ctx.font = "30px Arial";
  ctx.fillText("Espace pour continuer", canvas.width / 2, canvas.height / 2 + 20);
  
}