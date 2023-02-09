import React from "react";
import "./Denuncia.css";
import user from "../icons/user.png"
export default function Use(props) {
    return (

        <div className="USUARIO">
            <img className="linkImg" src={user} alt="" width="40px" heigth="20px"></img>
            {/* <button className="detalhe_button">{props.descricao}</button> */}
            <div className="n">{props.nome}</div>
        </div>
        );
}