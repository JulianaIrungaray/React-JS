import "./Equipo.css";
import Colaborador from "../Colaborador";

const Equipo = (props) => {
    const { colorPrimario, colorSecundario, titulo } = props.datos;
    const { colaboradores } = props;

    const obj = {
        backgroundColor: colorSecundario
    }

    const estilotitulo = {borderColor: colorPrimario}

    return <section className = "equipo" style={obj}>
        <h3 style={estilotitulo} >{titulo}</h3>
        <div className="colaboradores">
            {
                colaboradores.map((colaborador, index) => {
                    return <Colaborador 
                        datos={colaborador} 
                        key={index}
                    />;
                })
            }
        </div>
    </section>
}

export default Equipo;