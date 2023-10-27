import { Headers } from "./componentes/Header";
import { Main } from "./componentes/main";
import { useState} from 'react';

interface CertiRefType {
  current: HTMLDivElement | null;
}

function App() {

  const [certi,setCerti] = useState<CertiRefType>()
  const [sobre , setSobre] = useState<CertiRefType>()
  const [port , setPort] = useState<CertiRefType>()

  const handlTeste = () => {
    if (certi?.current) {
      const offsetTop = certi.current.offsetTop;
      window.scroll({
        top: offsetTop - 30,
        behavior: 'smooth'
      });
    }
  };

  const handlSobre = ()=>{
    if (sobre?.current) {
      const offsetTop = sobre.current.offsetTop;
      window.scroll({
        top: offsetTop - 30,
        behavior: 'smooth'
      });
    }
  }

  const handlPort = ()=>{
    if (port?.current){
      const offsetTop = port.current.offsetTop;
      window.scroll({
        top: offsetTop - 30,
        behavior: 'smooth'
      });
    }
  }

  return (
    <>
      <Headers teste={handlTeste} sob={handlSobre} port={handlPort}  />
      <Main prop={setCerti} sobree={setSobre} portifolio={setPort}/>
    </>
  );
}

export default App;
