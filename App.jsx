import { useState } from "react";
import { Header } from "./assets/components/Header";
import  styles  from './App.module.css'
import "./global.css";
import { SideBar } from "./assets/components/SideBar/SideBar";
import { Conteudo } from "./assets/components/conteudo/Conteudo";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
     

      <SideBar/>
      <Conteudo/>
      <SideBar/>
     
     
      </div>
        
     </div>
    //cria uma div com class dentro da div q esta o hader  e coloca os role nela
    //outra dive side bar pra fica de lado
  );
}

export default App;
