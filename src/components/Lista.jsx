import Cabecalho from "./Cabecalho";
import {Link} from "react-router-dom";

export default function Lista(){

    return(
        <>

            <Cabecalho>
            
            <li>
                <span><Link to="/">Home</Link></span>
            </li>
            <li>
                <span><Link to="/produtos">Produtos</Link></span>
            </li>
            <li>
                <span><Link to="/editar/produtos/1">Produto-1</Link></span>
            </li>
            <li>
                <span><Link to="/editar/produtos/2">Produto-2</Link></span>
            </li>
            <li>
                <span><Link to="/editar/produtos/3">Produto-3</Link></span>
            </li>
            </Cabecalho>
        </>
    )






}