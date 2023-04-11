import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setActiveTransaccion } from "../../store/transacciones/transaccionesSlice"


export const ButtonModificar=({id})=>{

    const {Transacciones} =useSelector(state=>state.transaciones)

    const navigate=useNavigate()
    const dispatch = useDispatch()
    const iniciarModificar=()=>{
        console.log("hola")
        dispatch(setActiveTransaccion(Transacciones[id-1]))
        navigate("/modificar")
    }
    return(
        <button type="button" className="btn btn-warning align-center" onClick={iniciarModificar}>modificar</button>
    )
}