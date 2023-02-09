import { React, useState } from "react";
import "./Denuncia.css"
function Denuncia(props) {


    return (
        <div >
            <button className="detalhe">
                {props.detalhes}
            </button>
        </div>
    );
}

export default Denuncia;