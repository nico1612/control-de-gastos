import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setActiveTransaccion } from "../../store/transacciones/transaccionesSlice"


export const ButtonModificar=({transaccion})=>{

    navigate=useNavigate()
    dispatch = useDispatch()
    const modificar=()=>{
        dispatch(setActiveTransaccion(transaccion))
        navigate("/modificar")
    }
    return(
        <button type="button" className="btn btn-warning btn-outline-warning" onclick={modificar}>modificar</button>
    )
}