import { React, useState } from "react";
import add from "../icons/add.png"
import "./PaginaDenuncia.css"
import Axios from "axios";
import guardian from "../icons/policeman.gif"
function PaginaDenuncia() {

    
    const [values, setValues] = useState();

    const handleChangeValues = value => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    };

    const handleClickButton = () => {
        Axios.post("http://localhost:3001/registarDenuncia",{
            bi_denunciante: values.bi,
            tipo_crime: values.tipo_crime,
            descricao:values.descricao,
            local_crime:values.local_crime,
            vitimas_mortais:values.vitimas_mortais,
            
        }).then((response) =>{
            console.log(response);
        });
        
    };

    return (
        <div className="body">

            <div className="bodyLeft">
                {/* <div className="titulo">
                    <h1 className="BemVindo"></h1>
                    
                </div> */}

                <div className="dadosDenuncia">
                    <div class="div">
                        <h3>Classificação do crime</h3>
                        <select name="tipo_crime" className="classeCrime" onChange={handleChangeValues}>
                            <option value="escolha uma opção">escolha uma opção</option>
                            <option value="estupro">Estupro</option>
                            <option value="assalto">Assalto</option>
                            <option value="homicidio">Homicídio</option>
                            <option value="violencia domestica">Violência domestica</option>
                            <option value="crimes contra a crianca">Crimes contra a criança</option>
                            <option value="outro">Outro</option>
                        </select>
                    </div>

                    <div className="local" class="div">
                        <h3>Onde aconteceu este crime?</h3>
                        <input name="local_crime" className="input" placeholder="Luanda" onChange={handleChangeValues}></input>
                    </div>

                    <div className="local" class="div">
                        <h3>bi</h3>
                        <input name="bi" className="input" placeholder="9439" onChange={handleChangeValues}></input>
                    </div>
                    <div className="vitimas" class="div1" >
                        <h3>Teve vítimas mortais? </h3>
                        <select name="vitimas_mortais" placeholder="vitimas" className="dadoSelect" onChange={handleChangeValues}>
                        <option value="escolha uma opção">escolha uma opção</option>
                        <option value="sim">sim</option>
                        <option value="nao">nao</option>
                    </select>
                    </div>
                    <div className="anexo" class="div">
                        <h3>Anexe fotos ou videos : </h3>
                        <button className="botao"><img src={add} className="imgBotao" alt="" width="25px" heigth="25px"></img></button>
                    </div>
                    <div  className="descricao" class="div">
                        <h3>Descrição da denúncia</h3>
                        <textarea name="descricao" className="descricaoText" onChange={handleChangeValues}></textarea>
                    </div>
                    <div id="botaoEnviar" class="div"> 
                        <button className="botaoEnviarB" onClick={handleClickButton}>Enviar denúncia</button>
                    </div> 
                </div>
            </div>

            <div className="bodyRight">
                <img src={guardian} className="guardian" alt="" width="500px" heigth="300px"></img>

            </div>


        </div>
    );
}

export default PaginaDenuncia;