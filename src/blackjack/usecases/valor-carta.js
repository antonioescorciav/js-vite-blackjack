
/**
 * 
 * @param {String} carta //recibe una carta aleatora para devolverle su valor en string 
 * @returns {number}
 */
export const valorCarta = ( carta ) => {

  const valor = carta.substring(0, carta.length - 1);
  return ( isNaN( valor ) ) ? 
          ( valor === 'A' ) ? 11 : 10
          : valor * 1;
}