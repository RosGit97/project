import { React, useState,useEffect } from "react";
import Denuncia from "./Denuncia";
import guardian from "../icons/policeman.gif"
import Card from "./card";
import Axios from "axios";
import "./Historico.css"
function Historico() {
    const [values, setValues] = useState();
    const [listDenuncia,setListDenuncia] = useState();
    console.log(listDenuncia);
    
    useEffect(() => {
        Axios.get("http://localhost:3001/getCards").then((response) => {
            setListDenuncia(response.data);
            
        });
    }, []);

    return (
        <div className="body">
            
            <div className="bodyLeft">
                <div className="titulo">
                    <h1 className="BemVindo">Histórico de denúncias</h1>
                    
                </div>
                
                <div className="denuncias">

                  {/* <Denuncia detalhes="Assalto na rua x, com tiroteio e Y pessoas feridas..."></Denuncia>
                  <Denuncia detalhes="Estupro no bairro D, pelas x horas... "></Denuncia>
                  <Denuncia detalhes="Roubo de uma viatura na centralidade do sequele..."></Denuncia> */}
                    {typeof listDenuncia !== "undefined" && listDenuncia.map((value) =>{
                        return (<Card 
                        key={value.id}
                        listCard={listDenuncia}
                        setListCard = {setListDenuncia}
                        bi_denunciante= {value.bi_denunciante}
                        descricao = {value.descricao}
                        local_crime={value.local_crime}
                        tipo_crime={value.tipo_crime}
                        vitimas_mortais={value.vitimas_mortais}
                        
                        ></Card>);
                        
                    })}
                    

                </div>
            </div>

            <div className="bodyRight">
            
            <img src={guardian}  className="guardian" alt="" width="500px" heigth="300px"></img>

            
            </div>
            

        </div>
    );
}

export default Historico;