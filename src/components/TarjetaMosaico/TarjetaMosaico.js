import React from "react";

import "./TarjetaMosaico.css";



function TarjetaMosaico(props) {
	console.log(props.estilo)
	return (

		<div className="contenedor-tarjeta" style={{ backgroundImage: "url('https://github.com/yeison0797/mosaico-pantalla/blob/main/public/recursos.jpeg')" }}>
			<h1>Planta física</h1>
		</div>

	);
}

export default TarjetaMosaico;