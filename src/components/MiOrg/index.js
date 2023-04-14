import { useState } from "react";
import "./MiOrg.css";


const MiOrg = (props) => {
//Estado - Hooks: permiten la construcción de componentes mucho más limpios y reutilizables, sin la necesidad de escribir componentes dentro de clases.
//El hook useState() es utilizado para agregar estado a nuestro componente.

    // const [mostrar, actualizarMostrar] = useState(true);
     
    // const manejarClick = () => {     
    //     console.log("Mostrar/Ocultar elemento", !mostrar);
    //     actualizarMostrar(!mostrar);
    // }

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/Boton.png" alt="add" onClick={props.cambiarMostrar}/>

    </section>
}

export default MiOrg;