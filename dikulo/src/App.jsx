import { React, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeBody from "./Components/HomeBody";
import Header1 from "./Components/Header1";
import Header2 from "./Components/Header2";
import TipoDenuncia from "./Components/TipoDenuncia";
import "./App.css"
import Historico from "./Components/Historico";
import Informacao from "./Components/Informacao";
import PaginaDenuncia from "./Components/PaginaDenuncia";
import Registo from "./Components/Registo";
import Login from "./Components/Login";
function App() {
  return (
    <div className="App">
      
      <Router>
      <Header1></Header1>
      <Header2></Header2>
      
         <Routes>
         
          <Route path='/' element={<HomeBody></HomeBody>}></Route>
          <Route path='/Components/TipoDenuncia' element={<TipoDenuncia></TipoDenuncia>}></Route> 
          <Route path='/Components/Historico' element={<Historico></Historico>}></Route> 
          <Route path='/Components/Informacao' element={<Informacao></Informacao>}></Route> 
          <Route path='/Components/PaginaDenuncia' element={<PaginaDenuncia></PaginaDenuncia>}></Route> 
          <Route path='/Components/Registo' element={<Registo></Registo>}></Route> 
          <Route path='/Components/Login' element={<Login></Login>}></Route> 
          <Route path='/Components/Header2' element={<Header2></Header2>}></Route>

        </Routes>
      </Router> 
    </div>
  );
}

export default App;
