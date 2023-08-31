import Rodape from './components/Rodape'
import Lista from './components/Lista'
import { Outlet } from 'react-router-dom';


export default function App(){

  let viteAtl = 'Vite Logo'
  let nomes = ['Leo', 'Yuuki', 'Santos']

  return(
    <>
      <Lista/>
        <Outlet/>
      <Rodape />
      

    </>
  );

}