
import React, { useState } from 'react';
import { axiosBasicInstanceApiInventario } from "../../helpers/axiosInstances";

import "./TarjetaMosaico.css";

function TarjetaMosaico(props) {
	const { atributo1, backgroundColor, atributo3, hoverBackgroundColor } = props;

	const [containerStyles, setContainerStyles] = useState({
		backgroundColor: backgroundColor,
		// Otros estilos que desees aplicar
	});

	const handleMouseEnter = () => {
		setContainerStyles({
			...containerStyles,
			backgroundColor: hoverBackgroundColor,
		});
	};

	const handleMouseLeave = () => {
		setContainerStyles({
			...containerStyles,
			backgroundColor: backgroundColor,
		});
	};

	return (
		<div className="contenedor-tarjeta" style={containerStyles}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<img src={atributo3} alt="" />
			<p>{atributo1}</p>
		</div>
	);
}

export default TarjetaMosaico;