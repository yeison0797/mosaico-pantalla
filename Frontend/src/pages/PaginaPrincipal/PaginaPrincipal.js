import "./PaginaPrincipal.css";
import { TarjetaMosaico } from "../../components/TarjetaMosaico";
import { axiosBasicInstanceApiInventario } from "../../helpers/axiosInstances";
import { useEffect, useState } from "react";
import config from '../../config.json'


function PaginaPrincipal() {

    const [dependencias, setDependencias] = useState([""])
    const [miVariable, setMiVariable] = useState('');

    useEffect(() => {
        axiosBasicInstanceApiInventario({
            method: "get",
            url: "/dependencias",
        })
            .then((result) => {
                // console.log(result.data.results);
                setDependencias(result.data.results);
                recuperarDelCache();

            })
            .catch((err) => {
                console.log("error");
            });
    }, []);


    // Guardar la variable en el estado local
    // function guardarEnCache(valor) {
    //     localStorage.setItem('miVariable', "valor");
    //     recuperarDelCache();
    // }

    // Recuperar la variable del estado local
    function recuperarDelCache() {
        const valor = localStorage.getItem('miVariable');
        console.log(valor);
    }

    return (
        <div className="principal">
            <img className="logo-img" src="logo.png" alt="" />
            <img className="escudo-img" src="Escudo.png" alt="" />
            <div className="contenedor-plataformas" >
                {dependencias.map(datos => {
                    return (
                        <>
                            {/* <TarjetaMosaico atributo1={datos["nombre"]} atributo3={config.ApiInventario + "/fotos/" + datos["id"]} backgroundColor='rgba(0, 0, 0, 0.542)' hoverBackgroundColor={datos["color"]} id={datos["id"]} /> */}
                        </>
                    )
                })}
            </div>
            <div className="mintic">Copyright 2023 | Vigilado MINEDUCACIÓN Y MINJUSTICIA</div>
        </div>
    );
}
export default PaginaPrincipal;