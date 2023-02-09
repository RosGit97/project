import { React, useState,useEffect } from "react";
import add from "../icons/add.png"
import "./Registo.css"
import { Link } from "react-router-dom";
import Axios from "axios";
import guardian from "../icons/policeman.gif"
function Login() {

    const [values, setValues] = useState();
    const use =null;
    const [user, setUser] = useState();
    const [primeiro_nome, setPrimeiro_nome] = useState();
    const handleChangeValues = value => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    };
    
    // const handleClickButton = () => {
    //     Axios.get("http://localhost:3001/login", {
    //         bi: values.bi,
    //         password: values.password,
    //     }).then((response) => {
    //         console.log(JSON.stringify(response.data));
    //         setUser(response.data);
            
    //     });
        
    // };
                
   
    const handleClickButton = () => {
        
        Axios.post("http://localhost:3001/login", {
            bi: values.bi,
            password: values.password,
        }).then((response) => {
            console.log(response.data);
            use=response.data;
            
            {typeof user !== "undefined" && user.map((value) =>{
                
                console.log("99");
                setPrimeiro_nome(value[0].primeiro_nome);
                // console.log("99"+);
            })}
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
                    {/* <label>Bilhete de identidade</label> */}
                    <input
                        name="bi"
                        className="dado1"
                        placeholder="310382832LA039"
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

                    {typeof user !== "undefined" && user.map((value) =>{
                        return ( <h1>rwfd</h1>)
                        
                    })}
                    <Link
                        className="link"
                        id="link11"
                        to={'/'}>
                            
                        <button
                        className="buttonDado"
                        onClick={double}
                    >Entrar</button>
                    </Link>
                    
                </div>
                <div className="dado">
                    {/* <label>Email</label> */}
                    <Link
                        className="link"
                        id="link11"
                        to={'/Components/Registo'}>
                        <button
                            className="buttonDado"
                            onClick={{ handleClickButton }}
                        >Registar</button>
                    </Link>

                </div>

            </div>
        </div>
    );
}

export default Login;