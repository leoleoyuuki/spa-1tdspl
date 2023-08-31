
import { ListaProdutos } from "../components/ListaProdutos"

export default function Produtos(){
    return(
        <>
        <h1>Produtos de INFORMATICA - FIPAPI</h1>
        <p>Os melhores produtos mercado</p>

        <table style={{borderCollapse:"collapse" , border:"2px solid #fff"}}>
            <thead>
                <tr style={{ border:"2px solid #fff"}}>
                    <th style={{border:"2px solid #fff"}}>Id</th>
                    <th style={{border:"2px solid #fff"}}>Nome</th>
                    <th style={{border:"2px solid #fff"}}>Descricao</th>
                    <th style={{border:"2px solid #fff"}}>Preco</th>
                </tr>
            </thead>
            <tbody>
                {ListaProdutos.map((produto, indice)=>(
                    <tr key={indice}>
                        <td style={{border:"2px solid #fff"}}>{produto.id}</td>
                        <td style={{border:"2px solid #fff"}}>{produto.nome}</td>
                        <td style={{border:"2px solid #fff"}}>{produto.desc}</td>
                        <td style={{border:"2px solid #fff"}}>{produto.preco}</td>
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