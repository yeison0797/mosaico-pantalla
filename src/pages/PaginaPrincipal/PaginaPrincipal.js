import "./PaginaPrincipal.css";
import { TarjetaMosaico } from "../../components/TarjetaMosaico";
import { axiosBasicInstanceApiInventario } from "../../helpers/axiosInstances";
import { useEffect, useState } from "react";

function PaginaPrincipal() {

    const [dependencias, setDependencias] = useState([""])

    useEffect(() => {
        axiosBasicInstanceApiInventario({
            method: "get",
            url: "/dependencias",
        })
            .then((result) => {
                console.log(result.data.results);
                setDependencias(result.data.results);

            })
            .catch((err) => {
                console.log("error");
            });
    }, []);

    return (
        <div className="principal">
            <img className="logo-img" src="logo.png" alt="" />
            <img className="escudo-img" src="Escudo.png" alt="" />
            <div className="contenedor-plataformas" >
                {dependencias.map(datos => {
                    return (
                        <>
                            <TarjetaMosaico atributo1={datos["nombre"]} atributo3="Aseo.jpeg" backgroundColor='rgba(0, 0, 0, 0.542)' hoverBackgroundColor={datos["color"]} />
                        </>
                    )
                })}
            </div>
            <div className="mintic">Copyright 2023 | Vigilado MINEDUCACIÓN Y MINJUSTICIA</div>
        </div>
    );
}
export default PaginaPrincipal;