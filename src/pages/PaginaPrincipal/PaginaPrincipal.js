import "./PaginaPrincipal.css";
import { TarjetaMosaico } from "../../components/TarjetaMosaico";
import { axiosBasicInstanceApiInventario } from "../../helpers/axiosInstances";
import { useEffect } from "react";

function PaginaPrincipal() {

    useEffect(() => {
        axiosBasicInstanceApiInventario({
            method: "get",
            url: "/dependencias",
            // headers: req.headers,
            data: {},
        })
            .then((result) => {
                console.log(result.data.results);
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
                <TarjetaMosaico atributo1="Aseo y Mantenimiento" atributo3="Aseo.jpeg" backgroundColor='rgba(0, 0, 0, 0.542)' hoverBackgroundColor='rgba(0,143,100, 0.29)' />
                <TarjetaMosaico atributo1="Planta Física" atributo3="planta.jpeg" backgroundColor='rgba(0, 0, 0, 0.542)' hoverBackgroundColor='rgba(166,84,66, 0.35)' />
                <TarjetaMosaico atributo1="Recursos de Apoyo" atributo3="recursos.jpeg" backgroundColor='rgba(0, 0, 0, 0.542)' hoverBackgroundColor='rgba(144,44,176, 0.21)' />
            </div>
            <div className="mintic">Copyright 2023 | Vigilado MINEDUCACIÓN Y MINJUSTICIA</div>
        </div>
    );
}
export default PaginaPrincipal;