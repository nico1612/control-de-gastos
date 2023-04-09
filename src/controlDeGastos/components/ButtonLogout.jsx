import { useDispatch } from "react-redux"
import { logout } from "../../store/auth/authSlice"


export const ButtonLogout=()=>{

    const dispatch=useDispatch()

    const logouts=()=>{
        dispatch(logout)
    }

    return(
        <button type="button" className="btn btn-warning btn-outline-warning" onClick={logouts}>
            logout
        </button>
    )

}