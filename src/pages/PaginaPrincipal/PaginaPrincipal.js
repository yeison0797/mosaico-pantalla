import "./PaginaPrincipal.css";
import { TarjetaMosaico } from "../../components/TarjetaMosaico";

function PaginaPrincipal() {

    const miEstilo1 = (
        "Aseo.jpeg"
    );
    const miEstilo2 = (
        "recursos.jpeg"
    );
    const miEstilo3 = (
        "planta.jpeg"
    );

    return (
        <div className="principal">
            <div className="contenedor-plataformas" >
                <TarjetaMosaico estilo={miEstilo1} />
                <TarjetaMosaico estilo={miEstilo2} />
                <TarjetaMosaico estilo={miEstilo3} />
            </div>
            <div className="mintic">Copyright 2023 | Vigilado MINEDUCACIÓN Y MINJUSTICIA</div>
        </div>
    );
}
export default PaginaPrincipal;