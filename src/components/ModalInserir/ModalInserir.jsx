import Styles from "./ModalInserir.module.css";
import "./ModalInserir.scss";

export default function ModalInserir(props) {
  if(props.open){
    return (
        <div className={Styles.container}>  
            <h1>Cadastro de Prtodutos</h1>
  

            <div>
                <form className="formGroup">
                    <fieldset>
                        <span className="btnClose" onClick={()=> props.setOpen(false)}>X</span>
                        <legend>Novo Produto</legend>
                        <div className="formInput">
                            <label htmlFor="idNome">Nome</label>
                            <input type="text" id="idNome" placeholder="Digite o nome do produto:"/>
                        </div>

                        <div className="formInput">
                            <label htmlFor="idDesc">Descricao</label>
                            <input type="text" id="idDesc" placeholder="Digite o Descricao do produto:"/>
                        </div>
                        
                        <div className="formInput">
                            <label htmlFor="idPreco">Preco</label>
                            <input type="number" id="idPreco" placeholder="Digite o Preco do produto:"/>
                        </div>

                        <div className="formInput">
                            <label htmlFor="idImg">Imagem</label>
                            <input type="url" id="idImg" placeholder="Digite a url da imagem:"/>
                        </div>

                        <div className="formInput">
                            <button>CADASTRAR</button>
                        </div>
                    </fieldset>
                </form>
            </div>



        </div>
    )
} 
}
