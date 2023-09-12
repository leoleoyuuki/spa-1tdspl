
import { Link } from "react-router-dom"
import { ListaProdutos } from "../components/ListaProdutos"
import classes from './Produtos.module.css'
import {AiFillEdit as Editar} from 'react-icons/ai'

export default function Produtos(){
    return(
        <>
        <h1>Produtos de INFORMATICA - FIPAPI</h1>
        <p>Os melhores produtos mercado</p>

        <table className={classes.estilo}>
            <thead>
                <tr>
                    <th className={classes.tableHeader}>Id</th>
                    <th className={classes.tableHeader}>Nome</th>
                    <th className={classes.tableHeader}>Descricao</th>
                    <th className={classes.tableHeader}>Preco</th>
                    <th className={classes.tableHeader}>Editar</th>
                </tr>
            </thead>
            <tbody>
                {ListaProdutos.map((produto, indice)=>(
                    <tr key={indice} className={classes.tableLine}>
                        <td className={classes.tableData}>{produto.id}</td>
                        <td className={classes.tableData}>{produto.nome}</td>
                        <td className={classes.tableData}>{produto.desc}</td>
                        <td className={classes.tableData}>{produto.preco}</td>
                        <td className={classes.tableData}>
                            <Link to={`/editar/produtos/${produto.id}`}><Editar/></Link>
                            
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