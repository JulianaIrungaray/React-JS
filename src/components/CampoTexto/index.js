import { useState } from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {
    const placeholderModificado = `${props.placeholder}...`;

    const manejarCambios = (e) => {
        props.actualizarValor(e.target.value);
    }

    return <div className="campo-texto">
        <label>{ props.titulo }</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambios} 
        />
    </div>
}

export default CampoTexto;