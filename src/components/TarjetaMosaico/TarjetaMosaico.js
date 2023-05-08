import React from "react";

import "./TarjetaMosaico.css";



function TarjetaMosaico(props) {
	console.log(props.estilo)
	return (
		<div className="contenedor-tarjeta" >
			<img src={props.estilo} alt="" />
			<h1>Planta física</h1>
		</div>
	);
}

export default TarjetaMosaico;