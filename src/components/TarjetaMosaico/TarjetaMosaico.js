import React from "react";

import "./TarjetaMosaico.css";



function TarjetaMosaico(props) {
	console.log(props.estilo)
	return (
		<div className="contenedor-tarjeta">
			<img src={props.estilo} alt="" />
			<p>PLANTA FÍSICA</p>
		</div>
	);
}

export default TarjetaMosaico;