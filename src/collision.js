/**
 * Vérifie si la tête du serpent entre en collision avec son propre corps.
 *
 * Cette fonction détermine si la tête du serpent occupe la même position que
 * n'importe quel autre segment de son corps. Si la tête du serpent se trouve
 * aux mêmes coordonnées `x` et `y` qu'un autre segment, la fonction retourne `true`,
 * indiquant une collision avec le corps du serpent (c'est-à-dire que le serpent se mord la queue).
 *
 * @param {{x: number, y: number}} head - Un objet représentant les coordonnées `x` et `y` de la tête du serpent.
 * @param {Array<{x: number, y: number}>} snakeArray - Un tableau d'objets représentant les segments du serpent, où chaque objet contient des coordonnées `x` et `y`.
 * @returns {boolean} - Retourne `true` si la tête du serpent entre en collision avec un segment de son corps, sinon `false`.
 */
export function checkCollision(snake) {
  let snakeCollision = false;
  let head = snake[0];
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      snakeCollision = true;
      break;
    }
  }
  return snakeCollision;
}

/**
 * Vérifie si la tête du serpent entre en collision avec les murs du canvas.
 *
 * Cette fonction détermine si la tête du serpent a dépassé les limites du canvas,
 * ce qui signifierait une collision avec un mur. Si la tête du serpent sort du canvas
 * (c'est-à-dire si ses coordonnées `x` ou `y` sont en dehors des limites définies par
 * la largeur et la hauteur du canvas), la fonction retourne `true`, indiquant une collision.
 *
 * @param {{x: number, y: number}} head - Un objet représentant les coordonnées `x` et `y` de la tête du serpent.
 * @param {HTMLCanvasElement} canvas - L'élément canvas représentant la surface de jeu.
 * @param {number} box - La taille d'une case de la grille en pixels, utilisée pour déterminer les limites du déplacement du serpent.
 * @returns {boolean} - Retourne `true` si la tête du serpent entre en collision avec un mur, sinon `false`.
 */
export function checkWallCollision(snake, canvas, box) {
  let head = snake[0];
  return (
    head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height
  );
 
}

/**
 * Dessine le score du joueur sur le canvas.
 *
 * Cette fonction utilise le contexte de rendu 2D pour afficher le score actuel
 * du joueur à l'écran. Le score est affiché en haut à gauche du canvas, avec une
 * taille de police et une couleur spécifiques.
 *
 * @param {CanvasRenderingContext2D} ctx - Le contexte de rendu 2D du canvas utilisé pour dessiner.
 * @param {number} score - Le score actuel du joueur à afficher.
 */

export function drawGameOver(ctx, canvas, score) {

  //enlève l'ancien score
  document.getElementById("score").textContent = "";
  // Efface le canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Configure la police et l'alignement
  ctx.font = "40px Arial";
  ctx.fillStyle = "red";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  
  // Affiche "GAME OVER" en haut
  ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2 - 20);
  
  // Change la taille de police pour le score
  ctx.font = "30px Arial";
  ctx.fillText("Score: " + score, canvas.width / 2, canvas.height / 2 + 20);

  ctx.font="20px Arial";
  ctx.fillText("Appuyez sur Espace pour recommencer", canvas.width / 2, canvas.height / 2 + 60);
}
