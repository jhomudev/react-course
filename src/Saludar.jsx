// CREANDO COMPONENTES CON CLASES
import {Component} from 'react'/* importacion de propiedades component de react  */

export class Saludar extends Component {/* heredando propiedades de component */
   render() {
      return <h1>Hello world,este es un componente con clase</h1>
   }
}

// ESTA MANERA NO ES MUY USADA, LA OTRA MEDIANTE FUNCIONES ES LA MAS COMUN