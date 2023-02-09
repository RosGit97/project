import { React, useState } from "react";
import add from "../icons/add.png"
import "./Registo.css"
import Axios from "axios";
import guardian from "../icons/policeman.gif"
function Registo() {

    const [values, setValues] = useState();

    const handleChangeValues = value => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    };

    const handleClickButton = () => {
        Axios.post("http://localhost:3001/register",{
            bi: values.bi,
            morada: values.morada,
            primeiro_nome:values.primeiro_nome,
            ultimo_nome:values.ultimo_nome,
            nascimento:values.nascimento,
            email:values.email,
            password:values.password,
        }).then((response) =>{
            console.log(response);
        });
        
    };
    function double(){
        handleClickButton();
            alert("sucess");
        
       
    }
    return (
        <div className="bodyRegisto">
            <div>CRIE A SUA CONTA</div>
            <div className="dadosRegisto">
                <div className="dado">
                    {/* <label>NOME </label> */}
                    <input
                        name="primeiro_nome"
                        className="dado1"
                        placeholder="primeiro nome"
                        onChange={handleChangeValues}
                    ></input>
                    <input
                        name="ultimo_nome"
                        className="dado1"
                        placeholder="ultimo nome"
                        onChange={handleChangeValues}
                    ></input>
                </div>

                <div className="dado">
                    {/* <label>Morada </label> */}
                    <select name="morada" placeholder="morada" className="dadoSelect" onChange={handleChangeValues}>
                        <option value="Belas">Belas</option>
                        <option value="Viana">Viana</option>
                        <option value="Talatona">Talatona</option>
                        <option value="Luanda">Luanda</option>
                        <option value="Maianga">Maianga</option>
                    </select>
                </div>

                <div className="dado">
                    {/* <label>Data de Nascimento </label> */}
                    <input
                        name="nascimento"
                        className="dado1"
                        placeholder="dd/mm/aa"
                        type="date"
                        onChange={handleChangeValues}
                    ></input>
                </div>
                <div className="dado">
                    {/* <label>Bilhete de identidade</label> */}
                    <input
                        name="bi"
                        className="dado1"
                        placeholder="310382832LA039"
                        onChange={handleChangeValues}
                    ></input>
                </div>
                <div className="dado">
                    {/* <label>Email</label> */}
                    <input name="email" className="dado1" type="email" placeholder="imjs@mail.com"
                        onChange={handleChangeValues}
                    ></input>
                </div>
                <div className="password">
                    {/* <label>Email</label> */}
                    <input name="password" className="dado1" type="password" placeholder="******"
                        onChange={handleChangeValues}
                    ></input>
                </div>
                <div className="dado">
                    {/* <label>Email</label> */}
                    <button
                        className="buttonDado"
                        onClick={double}
                    >Continue</button>
                </div>
                
            </div>
        </div>
    );
}

export default Registo;