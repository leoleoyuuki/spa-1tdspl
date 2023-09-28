import Styles from "./ModalInserir.module.css";

export default function ModalInserir(props) {
  if(props.open){
    return (
        <div className={Styles.container}>  
            <h1>ModalInserir</h1>
            <button onClick={()=> props.setOpen(false)}>Close Modal</button>
        </div>
    )
} 
}
