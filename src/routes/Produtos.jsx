
import { Link } from "react-router-dom"
import { ListaProdutos } from "../components/ListaProdutos"
import classes from './Produtos.module.css'
import {AiFillEdit as Editar} from 'react-icons/ai'
import {RiDeleteBin2Fill as Excluir} from 'react-icons/ri'
import { useEffect, useState } from "react"


export default function Produtos(){

    

  const[counter,setCounter] = useState(0);
    document.title = "Lista de produtos: " + counter


    const [listaProdutosLocal, setlistaProdutosLocal] = useState([{ListaProdutos}]);

    useEffect(()=>{
        console.log("Este useEffect renderiza sempre que ocorre alguma atualização no componente!")
    })

    useEffect(()=>{
        console.log("Este useEffect renderiza apenas uma vez atualização no componente!")
    },[]);

    const[counter2,setCounter2] = useState(0);
    useEffect(()=>{
        console.log("Este useEffect renderiza apenas se o objeto/elemento/componente e ou variavel sofrer uma atualização. devemos colocar o item a ser monitrado no array de dependencias: [ ]")
    },[counter2]);


    return(
        <>
        <h1>Produtos de INFORMATICA - FIPAPI</h1>
        <p>Os melhores produtos mercado</p>
        <div>
            <button onClick={()=>setCounter(counter + 1)}>Counter - {counter}</button>
        </div>
        <div>
            <button onClick={()=>setCounter2(counter + 1)}>Counter - {counter2}</button>
        </div>
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
                {listaProdutosLocal.map((produto, indice)=>(
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