import { useDispatch } from "react-redux"
import { startEliminar } from "../../store/transacciones/thunks"


export const ButtonEliminar=()=>{

    const dispatch=useDispatch()

    const eliminar=()=>{
       dispatch(startEliminar)
    }

    return(
        <button type="button" className="btn btn-warning btn-outline-warning" onClick={eliminar}>
            logout
        </button>
    )
}