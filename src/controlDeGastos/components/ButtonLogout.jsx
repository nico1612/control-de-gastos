import { useDispatch } from "react-redux"
import { startLogout } from "../../store/auth/thunks"


export const ButtonLogout=()=>{

    const dispatch=useDispatch()

    const logouts=()=>{
        dispatch(startLogout())
    }

    return(
        <button type="button" className="btn btn-warning" onClick={logouts}>
            logout
        </button>
    )

}