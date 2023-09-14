
import { Link } from "react-router-dom"
import { ListaProdutos } from "../components/ListaProdutos"
import classes from './Produtos.module.css'
import {AiFillEdit as Editar} from 'react-icons/ai'
import {RiDeleteBin2Fill as Excluir} from 'react-icons/ri'


export default function Produtos(){
    return(
        <>
        <h1>Produtos de INFORMATICA - FIPAPI</h1>
        <p>Os melhores produtos mercado</p>

        <table className={classes.estilo}>
            <thead className={classes.tableHeaders}>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Descricao</th>
                    <th>Preco</th>
                    <th>Imagem</th>
                    <th>Editar</th>
                    <th>Excluir</th>
                    
                </tr>
            </thead>
            <tbody>
                {ListaProdutos.map((produto, indice)=>(
                    <tr key={indice} className={classes.tableLine}>
                        <td>{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>{produto.desc}</td>
                        <td>{produto.preco}</td>
                        <td><img src={produto.img} alt={produto.desc} /></td>
                        <td>
                            <Link to={`/editar/produtos/${produto.id}`}><Editar/></Link>
                        </td>
                        <td>
                            <Link to={`/excluir/produtos/${produto.id}`}><Excluir/></Link>
                        </td>
                    </tr>
                ))}
            </tbody>
            <tfoot className={classes.tableFooter}>
                <tr>
                    <td colSpan={7}>Produtos</td>
                </tr>
            </tfoot>
        </table>
        </>
    )
}