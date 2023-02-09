import { React, useState } from "react";
import info from "../icons/info.png"
import contacto from "../icons/phone.png"
import "./TipoDenuncia.css"
import guardian from "../icons/policeman.gif"

function Informacao() {


    return (
        <div className="body">
            
            <div className="bodyLeft">
                <div className="titulo">
                <img src={info}  className="speech" alt="" width="30px" heigth="30px"></img>

                    <h1 className="infor">Informações</h1>
                    
                </div>

                <div className="paragrafoInfor">
                    <p>Se você já passou por uma situação de furto, roubo ou foi vítima de um outro crime? então
                        você está no lugar certo! aqui você pode fazer as suas denúncias destinadas a policia nacional
                        de angola sem sair de casa, sem gastar quaisquer recursos, basta que tenha um disposivo com 
                        acesso a internet. Click 
                        <a href="" className="AQUI"> AQUI </a>
                        para aprender a fazer uma denúncia.
                    </p>
                    
                </div>

                <div className="faleConnoscoI">

                    <button className="button">
                        <h3 className="">Fale connosco</h3>
                    </button>
                    <div className="contacto">
                    <img src={contacto} className="speech" alt="" width="20px" heigth="20px"></img>
                    <h3 className="">113</h3>
                    </div>
                    

                </div>

            </div>

            <div className="bodyRight">
            <img src={guardian}  className="guardian" alt="" width="500px" heigth="300px"></img>

            </div>

        </div>
    );
}

export default Informacao;