// Exportar modulos, se usa "export" antes de la function
export function Greeting() {
   // Esto es un componente, es una funcion que retorna html/jsx.DEBE EMPEZAR CON UNA MAYUSCULA
   const user = {
      name: "Jhonan Muñoz",
      married: false,
   };
   return (
      <div>
         <h1>Hola soy {user.name}</h1> y{" "}
         <b>{user.married ? "estoy casado 🤵👰" : "no estoy casado 🤵"}</b>
      </div>
   );
}
// Uso de props. props puede ser un objeto o solo un dato
// Se pueden pasar parametros o argumentos a un componente, pero esas props se definen en los atributos del componente ya llamado en HTML/JSX
export const Saludo = ({ person }) => <h2>Saludo a {person}</h2>;

export function UserCard(props) {
   return (
      <article className="UserCard">
         <h1>{props.name}</h1>
         <p>Sueldo: 👛{props.money}</p>
         <p>{props.married ? "Estoy casado" : "No estoy casado"}</p>
         <ul>
            <li>{props.address.street}</li>
            <li>{props.address.city}</li>
         </ul>
      </article>
   );
}
