import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setActiveTransaccion } from "../../store/transacciones/transaccionesSlice"


export const ButtonModificar=({transaccion})=>{

    const navigate=useNavigate()
    const dispatch = useDispatch()
    const iniciarModificar=()=>{
        console.log("hola")
        dispatch(setActiveTransaccion(transaccion))
        navigate("/modificar")
    }
    return(
        <button type="button" className="btn btn-warning align-center" onClick={iniciarModificar}>modificar</button>
    )
}