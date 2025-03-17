/**
 * Dessine le score sur le canvas.
 *
 * Cette fonction affiche le score actuel du jeu dans le coin supérieur gauche du canvas.
 * Le score est affiché en noir avec une police Arial de 20px.
 *
 * @param {CanvasRenderingContext2D} ctx - Le contexte de rendu 2D du canvas utilisé pour dessiner.
 * @param {number} score - Le score à afficher, qui est un entier.
 */
export function drawScore(score) {
  document.getElementById("score").textContent = "Score: " + score;
}

/**
 * Dessine le score sur le canvas.
 * Cette fonction affiche le score actuel du jeu dans le coin supérieur gauche du canvas.
 * Le score est affiché en noir avec une police Arial de 20px.
 * @param {CanvasRenderingContext2D} ctx - Le contexte de rendu 2D du canvas utilisé pour dessiner.
 * @param {number} score - Le score à afficher, qui est un entier.
 */
// Récupère la liste des scores depuis le localStorage
export function getHighScores() {
  const scores = localStorage.getItem("highScores");
  return scores ? JSON.parse(scores) : [];
}

/** 
 * Ajoute un nouveau score et sauvegarde la liste mise à jour
 * dans le localStorage
 * @param {number} newScore - Le nouveau score à ajouter à la liste.
 */
export function saveScore(newScore) {
  const highScores = getHighScores();
  highScores.push(newScore);
  // Optionnel : trier par ordre décroissant pour avoir les meilleurs scores en haut
  highScores.sort((a, b) => b - a);
  // Optionnel : limiter à un certain nombre de scores (par exemple, top 10)
  const topScores = highScores.slice(0, 10);
  localStorage.setItem("highScores", JSON.stringify(topScores));
}
/**
 * Affiche les scores dans l'interface.
 * Cette fonction récupère les scores enregistrés dans le localStorage
 * et les affiche dans un élément HTML avec l'ID "scoreboard".
 * Les scores sont affichés sous forme de liste ordonnée avec les numéros de classement.
 * @param {number} newScore - Le nouveau score à ajouter à la liste.
 */
// Pour afficher les scores dans l'interface
export function displayHighScores() {
  const highScores = getHighScores();
  // Affiche dans un élément HTML <div id="scoreboard">
  const scoreboard = document.getElementById("scoreboard");
  scoreboard.innerHTML = "<ol>Classement</ol>";
  highScores.forEach((score, index) => {
    scoreboard.innerHTML += `<li>${index + 1}. ${score}</li>`;
  });
}

