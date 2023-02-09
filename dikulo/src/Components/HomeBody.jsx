import { React, useState } from "react";
import speech from "../icons/speech.png"
import guardian from "../icons/policeman.gif"
import "./HomeBody.css"
function HomeBody() {


    return (
        <div className="body">
            <div className="bodyLeft">
                <div className="titulo">
                    <h1 className="BemVindo">Bem vindo ao</h1>
                    <h1 className="BemVindo">DIKULO</h1>
                </div>

                <div className="titulo2">

                    <h2 className="h2Titulo2"> O seu aplicativo para fazer denúncias</h2>

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

                <div className="faleConnosco">

                    <button className="button">
                        <img src={speech}  className="speech" alt="" width="30px" heigth="30px"></img>
                        <h3 className="FC">Fale connosco</h3>
                    </button>

                </div>
            </div>

            <div className="bodyRight">
            <img src={guardian}  className="guardian" alt="" width="500px" heigth="300px"></img>

            </div>
            

        </div>
    );
}

export default HomeBody;