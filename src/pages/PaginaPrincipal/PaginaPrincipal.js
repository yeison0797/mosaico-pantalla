import "./PaginaPrincipal.css";
import { TarjetaMosaico } from "../../components/TarjetaMosaico";

function PaginaPrincipal() {

    const miEstilo1 = {
        backgroundImage: '../../../public/Aseo.jpeg'
    };
    const miEstilo2 = {
        backgroundColor: 'yellow'
    };
    const miEstilo3 = {
        backgroundColor: 'green'
    };

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