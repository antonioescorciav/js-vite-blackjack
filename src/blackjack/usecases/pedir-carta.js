
/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck devuelve la baraja   
 * @returns {String} retorna una carta del deck
 */
export const pedirCarta = (deck) => {
  
  if ( !deck || deck.length === 0 ) {
      throw 'No hay cartas en el deck';
  }
  const carta = deck.pop();
  return carta;
}
