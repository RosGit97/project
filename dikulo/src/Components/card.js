import React from "react";
import "./Denuncia.css";

export default function Card(props) {
    return (

        <div className="detalhe">
            <button className="detalhe_button">{props.descricao}</button>
            <p className="card_local">Local do crime: {props.local_crime}</p>
        </div>
        );
}