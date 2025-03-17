/**
 * Initialise le serpent au début du jeu.
 *
 * Cette fonction crée le serpent en tant que tableau contenant un seul segment,
 * positionné à une position de départ définie sur la grille.
 *
 * @returns {Array<{x: number, y: number}>} - Un tableau contenant un objet représentant la position du premier segment du serpent.
 */
export function initSnake(box) {
 //Position du snake au millieu du canvas
return [{x: 10 * box, y: 10 * box }];
}

/**
 * Déplace le serpent dans la direction actuelle.
 *
 * Cette fonction calcule la nouvelle position de la tête du serpent en fonction
 * de la direction actuelle (gauche, haut, droite, bas). Le reste du corps du serpent
 * suit la tête. La fonction retourne un objet représentant la nouvelle position de la tête du serpent.
 *
 * @param {Array<{x: number, y: number}>} snake - Le tableau représentant le serpent, où chaque élément est un segment avec des coordonnées `x` et `y`.
 * @param {string} direction - La direction actuelle du mouvement du serpent ("LEFT", "UP", "RIGHT", ou "DOWN").
 * @param {number} box - La taille d'une case de la grille en pixels, utilisée pour déterminer la distance de déplacement du serpent.
 * @returns {{x: number, y: number}} - Un objet représentant les nouvelles coordonnées `x` et `y` de la tête du serpent après le déplacement.
 */
export function moveSnake(snake, direction, box) {
  let head = { ...snake[0] }; // Copie la tête actuelle

  switch (direction) {
      case "LEFT":
          head.x -= box;
          break;
      case "RIGHT":
          head.x += box;
          break;
      case "UP":
          head.y -= box;
          break;
      case "DOWN":
          head.y += box;
          break;
  }

  snake.unshift(head); // Ajoute la nouvelle tête
}

/**
 * Dessine le serpent sur le canvas.
 *
 * Cette fonction parcourt chaque segment du serpent et le dessine sur le canvas en utilisant
 * un rectangle coloré. La tête du serpent est dessinée dans une couleur différente des autres segments
 * pour la distinguer visuellement. Chaque segment est dessiné à sa position actuelle sur la grille,
 * avec une taille déterminée par la valeur de `box`.
 *
 * @param {CanvasRenderingContext2D} ctx - Le contexte de rendu 2D du canvas utilisé pour dessiner.
 * @param {Array<{x: number, y: number}>} snake - Un tableau représentant le serpent, où chaque élément est un segment avec des coordonnées `x` et `y`.
 * @param {number} box - La taille d'une case de la grille en pixels, utilisée pour déterminer la taille de chaque segment du serpent.
 */
export function drawSnake(ctx,snake,box) {
  //parcours le tableau snake 
  snake.forEach((segment, index) => {  
    if (index === 0){ 
      ctx.fillStyle ="red";
      ctx.strokeRect(segment.x, segment.y, box, box);
    }else
      {
        ctx.fillStyle = "grey";
      }
    ctx.fillRect(segment.x, segment.y, box, box);
    ctx.strokeStyle = "white";
    ctx.strokeRect(segment.x, segment.y, box, box);
  });
}
