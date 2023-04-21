import "./Equipo.css";

const Equipo = (props) => {
    const { colorPrimario, colorSecundario, titulo } = props.datos;

    const obj = {
        backgroundColor: colorSecundario
    }

    const estilotitulo = {borderColor: colorPrimario}

    return <section className = "equipo" style={obj}>
        <h3 style={estilotitulo} >{titulo}</h3>
        <div className="colaboradores">

        </div>
    </section>
}

export default Equipo;