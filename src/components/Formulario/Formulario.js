import "./Formulario.css";
import CampoTexto from "../CampoTexto/index.js";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = () => {

    const manejarEnvio = (e) => {
        // preventDefault: Cancela el evento si este es cancelable, sin detener 
        //el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.
        e.preventDefault();
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required/>
            <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" required/>
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" required/>
            <ListaOpciones/>
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}

export default Formulario;