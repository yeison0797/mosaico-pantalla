import "./PaginaPrincipal.css";
import { TarjetaMosaico } from "../../components/TarjetaMosaico";

function PaginaPrincipal(){
    const miEstilo ={
        backgroundColor1: 'red'
    };
    return(
        <div className="principal">
            <div className="contenedor-plataformas" >
                <TarjetaMosaico estilo={miEstilo}/>
                <TarjetaMosaico estilo={miEstilo}/>
                <TarjetaMosaico estilo={miEstilo}/>

            </div>
        </div>
    );
}
export default PaginaPrincipal;