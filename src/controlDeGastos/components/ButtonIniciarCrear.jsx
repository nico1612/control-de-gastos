import { useNavigate } from "react-router-dom";


export const ButtonInicarCrear=()=>{

    const navigate = useNavigate();

    const CrearNueva=()=>{
        navigate("/nuevaTransaccion")
    }

    return(
        <button className="btn btn-primary" onClick={CrearNueva}>
            crear nueva transaccion
        </button>
    )
}