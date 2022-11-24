import { VscDatabase } from "react-icons/vsc";/* Usando iconos de react-icons . PRIMERO SE DEBE INSTALAR CON NPM */

export const Posts = () => {
   const getData = () => {
      fetch(
         "https://jsonplaceholder.typicode.com/posts"
      ) /* Obteniendo los datos de la URL */
         .then((response) =>
            response.json()
         ) /* convertir los datos traidos a JSON */
         .then((data) => console.log(data))
         .catch((error) =>
            console.log(error)
         ); /* si ocurre algun error se ejecuta el catch */
   };
   return (
      <>
         <h1>Usando FETCH API</h1>
         <button onClick={getData}>
            <VscDatabase />
            Traer Datos
         </button>
      </>
   );
};
