
import { Link } from "react-router-dom"
import { ListaProdutos } from "../components/ListaProdutos"

export default function Produtos(){
    return(
        <>
        <h1>Produtos de INFORMATICA - FIPAPI</h1>
        <p>Os melhores produtos mercado</p>

        <table style={{borderCollapse:"collapse" , border:"2px solid #fff"}}>
            <thead>
                <tr style={{ border:"2px solid #fff"}}>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Descricao</th>
                    <th>Preco</th>
                    <th>Editar</th>
                </tr>
            </thead>
            <tbody>
                {ListaProdutos.map((produto, indice)=>(
                    <tr key={indice}>
                        <td>{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>{produto.desc}</td>
                        <td>{produto.preco}</td>
                        <td>
                            <Link to={`/editar/produtos/${produto.id}`}>Editar</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={3}>Produtos</td>
                </tr>
            </tfoot>
        </table>
        </>
    )
}