import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActiveTransaccion } from "../../store/transacciones";


export const ButtonInicarCrear=()=>{

    const navigate = useNavigate();
    const dispatch= useDispatch()
    const CrearNueva=()=>{
        dispatch(setActiveTransaccion({
            userId:userId,
            concept:"",
            category:"Ingresos fijos",
            amount:0,
            date:"",
            transactionType:"Ingresos"
        }))
        navigate("/nuevaTransaccion")
    }

    return(
        <button className="btn btn-primary" onClick={CrearNueva}>
            crear nueva transaccion
        </button>
    )
}