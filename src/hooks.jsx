// USANDO HOOKS 
import {useState,useEffect} from "react";/* importando el hook useState y useEffect */

export function Counter(){
   // USESTATE, se usa cambiar el valor de un dato/variable,etc
   // Sintaxis de useState
   const [counter,setCounter]=useState(0);/* El 1er indice indica el estado actual y el 2do una funcion que actualize ese estado. Lo que va entre parentesis del useState es el estado actual que le damos */

   // USEEFFECT, se ejecuta cada vez q haya un cambio en el componente, recibe como parametro una función
   useEffect(()=>{
      console.log("cambió counter");
   },[counter])/*PERO si ponemos un array con un valor,el useEffect se ejecutara solo si ese valor cambia */

   return (
      <div>
         <h1>Counter :{counter}</h1>
         <button onClick={()=>{
            setCounter(counter+1);
         }}>Sumar</button>
         <button onClick={()=>{
            setCounter(counter-1);
         }}>Restar</button>
         <button onClick={()=>{
            setCounter(0);
         }}>Reiniciar</button>
      </div>
   )
}
export function Input(){
   const [mensaje,setMensaje]=useState('');
   useEffect(()=>{
      console.log("cambió el componente");
   },[ ])/* PERO si ponemos un array vacio como segundo parametro, se ejecutara SOLO UNA VEZ cargue el componente*/
   return(
      <div>
         <input onChange={(e)=>setMensaje(e.target.value)} type="text" name="input" id="i" />
         <button onClick={()=>alert(mensaje)}>Mostrar mensaje</button>
      </div>
   )
}