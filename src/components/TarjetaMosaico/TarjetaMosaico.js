import React from "react";

import "./TarjetaMosaico.css";



function TarjetaMosaico(estilo){
    console.log(estilo.estilo)
	return(
		<div  className="contenedor-tarjeta" style={estilo.estilo}>
			<h>Planta física</h>
		</div>
	);
}

export default TarjetaMosaico;