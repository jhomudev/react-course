import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./Button";
import { Taskcard } from "./Task";
import { Saludar } from "./Saludar";
import {Posts} from "./Post";
import {Counter,Input} from "./hooks";
import {
   Greeting,
   Saludo,
   UserCard,
} from "./Greeting"; /*Llamando modulos por SOLO EXPORT, lo que se importa VA ENTRE LLAVES */
import Product, {
   AnyProduct,
} from "./Product"; /*Llamando modulos por EXPORT DEFAULT, lo que se importa NO VA ENTRE LLAVES*/

const root = ReactDOM.createRoot(document.getElementById("root"));

// arrays en react ..uso en linea 79
const users=[
   {
      id:1,
      name:"Jhonan",
      img:"https://robohash.org/179.6.23.39.png"
   },
   {
      id:2,
      name:"levi",
      img:"https://robohash.org/user 2"
   },
   {
      id:3,
      name:"Mikasa",
      img:"https://robohash.org/bad"
   }
]

root.render(
   // Los componentes se pueden llamar entre llaves, o como etiquetas HTML
   <>
      {Greeting()}
      <Product />
      <AnyProduct />

      {/* Uso de props en los componentes, aqui el atributo "person" pasa a ser una propiedad de props */}
      <Saludo person="Josue" />
      <Saludo person="Alan" />
      <Saludo person="Jhonan" />
      <UserCard
         name="Levi Ackerman"
         married={false}
         money={5600}
         address={{ street: "Main Street 123", city: "Shiganshina" }}
      />
      <UserCard
         name="Eren Jaeger"
         married={false}
         money={3400}
         address={{ street: "Main Street 111", city: "Rose Wall" }}
      />

      {/* propTypes y defaultProps */}
      <Button value="Click me" />
      <Button value="Pay me" />
      <Button value="Love me" name="jhoe" />

      {/* USANDO ESTILOS */}
      <Taskcard ready={true} />
      <Taskcard ready={false} />

      {/* COmponente con clases */}
      <Saludar />

      {/* Eventos/ Event Handlers */}
      <input onChange={(e) => console.log(e.target.value)} />

      {/* Usando FECTH API */}
      <Posts/>

      {/* USO DE ARRAYS */}
      <table border={2}>
         <thead>
            <tr>
               <th>Id</th>
               <th>Nombre</th>
               <th>Imagen</th>
            </tr>
         </thead>
         <tbody>
         {
            users.map((user,index)=>{
               return (
                  <tr key={index}>{/* los "key" ayudan a identificar elementos de un array en una estructura, para darles una identidad estable */}
                     <td>{user.id}</td>
                     <td>{user.name}</td>
                     <td><img src={user.img} alt='img'/></td>
                  </tr>
               )
            })
         }
         </tbody>
      </table>

      {/* USANDO HOOKS */}
      <Counter/>
      <Input/>
   </>
);
