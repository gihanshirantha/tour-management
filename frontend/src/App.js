
import './App.css';

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Routers from './Router/Routers'
import { Outlet } from 'react-router-dom';
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
