import { React, useState } from "react";
import "./Header2.css"
import { Link, useParams, useRouteLoaderData } from "react-router-dom";
import search from "../icons/search_50px.png"
import user from "../icons/user.png"
import Axios from "axios";
import Use from "./use";
function Header2() {
    const [values, setValues] = useState();
    const [loginText, setLoginText] = useState();
    const [user, setUser] = useState();
    const control = 0;
    const [bil, setBil] = useState();
    const [primeiro_nome, setPrimeiro_nome] = useState();
    // const {primeiro} = useParams();
    // const [primeiro_nome1, setPrimeiro_nome] = useState(JSON.stringify(primeiro));
    function conteudoLog() {
        if (loginText == "logado com sucesso") {
            return (
                <div>
                    {typeof user !== "undefined" && user.map((value) => {
                        
                        return (<Use
                            key={value.bi}
                            listCard={user}
                            setListCard={setUser}
                            nome={value.primeiro_nome}
                        ></Use>);

                    })}
                    
                </div>
            );
        }
        else {
            return (
                <div className="log">
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

                        
                            <button
                                className="buttonDado"
                                onClick={double}
                            >Entrar</button>
                        
                    </div>
                    <div className="dado">
                    {/* <label>Email</label> */}
                    <Link
                        className="link"
                        id="link11"
                        to={'/Components/Registo'}>
                        <button
                            className="buttonDado"
                            
                        >Registar</button>
                    </Link>

                </div>
                </div>
            );
        }

    }

    const handleChangeValues = value => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    };
    // console.log("42"+primeiro);
    const handleClickButton = () => {

        Axios.post("http://localhost:3001/login", {
            bi: values.bi,
            password: values.password,

        }).then((response) => {
            setUser(response.data)
            console.log("o que chega ao header"+JSON.stringify(response.data[0]));
            if (response.data.length == 1) {
                setLoginText("logado com sucesso");
                control=1;
            } else if (values.password == "") {
                setLoginText("digite a sua password!");
            } else if (values.bi == "") {
                setLoginText("digite o numero do seu bi!");
            } else if(control == 1){
                setLoginText("sessao terminada");
            }else {
                setLoginText("nao foi possivel efetuar o login!");
            }
            // console.log(response.data.length);



        });
    };

    function double() {
        handleClickButton();
        alert(loginText);


    }
    return (
        <div>
            <div className="menu">
                <div className="searchBar">

                    <img src={search} alt="" width="20px" heigth="10px"></img>
                    <input className="inputSearch" type="text" placeholder="Search" />
                </div>

                <ul>
                    <li><Link className="link" to={'/'}><a className="linkee" href="">HOME</a></Link></li>
                    <li><Link className="link" to={'/Components/tipoDenuncia'}><a className="linkee" href="">DENÚNCIA</a></Link></li>
                    <li><Link className="link" to={'/Components/Historico'}><a className="linkee" href="">HISTORICO</a></Link></li>
                    <li><Link className="link" to={'/Components/Informacao'}><a className="linkee" href="">INFORMAÇÕES</a></Link></li>
                    <li className="log">
                        {/* <Link className="link" id ="link11" to={'/Components/Login'}><img className="linkImg" src={user} alt="" width="40px" heigth="20px"></img>{JSON.stringify(primeiro) ? JSON.stringify(primeiro) : "entrar/registar"}</Link> */}
                        {conteudoLog()}

                    </li>

                    {/* 
                    <li><a href="">HISTÓRICO</a></li>
                    <li><a href="">INFORMAÇÕES</a></li> */}
                </ul>
            </div>

        </div>
    );
}

export default Header2;