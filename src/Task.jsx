// USANDO ESTILOS EN JSX
import "./task.css"; /* importando estilos de un archivo css, en REACT se importa aqui, no en el HTML */

export function Taskcard({ ready }) {
   return (
      <div style={{ background: "#D6E7E7", padding: "20px" }}>
         {/* estilos en linea */}
         <h1 className="title">Mi primer tarea</h1>
         <p className={`task ${ready ? "done" : "not-done"}`}>
            Tarea {ready ? "realizada" : "no realizada"}
         </p>
      </div>
   );
}
