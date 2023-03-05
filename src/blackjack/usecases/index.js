//este index.js dentro de la carpeta usecases es un archivo barril, contendrá las exportaciones
// debe llevar el mismo nombre del archivo main para que se tenga claridad de lo exportado
export {crearDeck} from './crear-deck'; //{modulo independiente}
export { pedirCarta } from './pedir-carta';
export { valorCarta } from './valor-carta';
export {turnoComputadora} from './turno-pc'; 
export {crearCartaHTML} from './crear-carta-HTML';