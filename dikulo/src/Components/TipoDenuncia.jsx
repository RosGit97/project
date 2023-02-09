import { React, useState } from "react";
import speech from "../icons/speech.png"
// import "./TipoDenuncia.css"
import guardian from "../icons/policeman.gif"
import { Link } from "react-router-dom";
function TipoDenuncia() {


    return (
        <div className="body">
            
            <div className="bodyLeft">
                <div className="titulo">
                    <h1 className="BemVindo">ESCOLHA O TIPO DE DENÚNCIA</h1>
                    
                </div>

                <div className="tipoDenuncia">
                <Link className="linke" to={'/Components/PaginaDenuncia'} >
                Anónima
                </Link>
                <Link className="linke" to={'/Components/PaginaDenuncia'}>
                Não anónima
                </Link>
                   

                </div>
            </div>

            <div className="bodyRight">
            <img src={guardian}  className="guardian" alt="" width="500px" heigth="300px"></img>

            </div>
            

        </div>
    );
}

export default TipoDenuncia;