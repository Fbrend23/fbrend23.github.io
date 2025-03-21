/**
 * Gère le changement de direction du serpent en fonction de l'entrée de l'utilisateur.
 *
 * Cette fonction est appelée chaque fois qu'une touche directionnelle est pressée.
 * Elle vérifie que la nouvelle direction n'est pas opposée à la direction actuelle
 * (pour éviter que le serpent se retourne sur lui-même) et retourne la nouvelle direction
 * si elle est valide.
 *
 * @param {KeyboardEvent} event - L'événement clavier qui contient les informations sur la touche pressée.
 * @param {string} currentDirection - La direction actuelle du serpent (peut être "UP", "DOWN", "LEFT", ou "RIGHT").
 * @returns {string} - La nouvelle direction du serpent après traitement, ou la direction actuelle si le changement n'est pas valide.
 */
export function handleDirectionChange(event,direction) {
  const validInput = ["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"] //Touches autorisées
  if (validInput.includes(event.key))
  {
    if(event.key === "ArrowLeft" && direction !== "LEFT" && direction !== "RIGHT"){
      direction ="LEFT";
    }else if(event.key ==="ArrowRight" && direction !=="RIGHT" && direction !=="LEFT"){
      direction ="RIGHT";
    }else if(event.key ==="ArrowUp" && direction !=="UP" && direction !=="DOWN"){
      direction = "UP";
    }else if(event.key ==="ArrowDown" && direction !=="DOWN" && direction !=="UP"){
      direction = "DOWN";
  }
}return direction;
}// End handleDirectionChange

