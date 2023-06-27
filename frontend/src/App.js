
import './App.css';


import Routers from './Router/Routers'


import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(()=>{
    Aos.init();
  },[]);



  return (
    <>
<Routers/>

   
    
    </>
  );
}

export default App;
