
import { crearCartaHTML,pedirCarta, valorCarta } from './';

/**
 * turno de la computadora
 * @param {Number} puntosMinimos para que la pc gane 
 * @param {HTMLElement} puntosHTML elemento para mostrar los puntos 
 * @param {HTMLElement} divCartasComputadora puntos internos de la computadora
 * @param {Array<String>} deck baraja para que muestra las cartas
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML,divCartasComputadora,deck = [] ) => {
  
  if (!puntosMinimos) throw new Error('No hay puntos para compararse');
  if (!deck) throw new Error('No hay deck');
  if (!puntosHTML) throw new Error('Puntos HTML necesarios');

  let puntosComputadora = 0; 

  do {
      const carta = pedirCarta(deck);

      puntosComputadora = puntosComputadora + valorCarta( carta );
      puntosHTML.innerText = puntosComputadora;
      
      const imgCarta = crearCartaHTML(carta)
      divCartasComputadora.append( imgCarta );

      if( puntosMinimos > 21 ) {
          break;
      }

  } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

  setTimeout(() => {
      if( puntosComputadora === puntosMinimos ) {
          alert('Nadie gana :(');
      } else if ( puntosMinimos > 21 ) {
          alert('Computadora gana')
      } else if( puntosComputadora > 21 ) {
          alert('Jugador Gana');
      } else {
          alert('Computadora Gana')
      }
  }, 100 );
}

