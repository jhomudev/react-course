import PropTypes from "prop-types"; /*SE INSTALA CON NPM. Uso de proptypes, tipo de datos de props */
// la proptypes indican que una prop debe ser de un tipo de dato:number, string, object,etc, sino habra un error

export function Button({ value, name }) {
   return (
      <button
         onClick={function () {
            alert("Hola " + name);
         }}
      >
         {value} - {name}
      </button>
   );
}
Button.propTypes = {
   value: PropTypes.string
      .isRequired /* define el tipo de dato que debe ser "value", en este caso un string y que es requerido */,
};

// Se  definir valores por defecto de las props
Button.defaultProps = {
   name: "User" /* defino el valor por defecto de name aqui, ya no en los parametros de la funcion misma */,
   // depende de uno elegir la forma, esta o la comun
};
