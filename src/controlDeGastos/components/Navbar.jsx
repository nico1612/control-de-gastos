import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { startLogout } from "../../store/auth/thunks"
import { Button } from "./Button"


export const Navbar =()=>{
    const dispatch=useDispatch()

    const logouts=()=>{
        dispatch(startLogout())
    }
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark border" data-bs-theme="dark">
            <div className="container-fluid">
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    home
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                className={(isActive)=>`nav-item nav-link ${isActive ? 'active':''}`}
                                to="/movimientos"
                            >
                                movimientos
                            </Link>
                        </li>
                    </ul>
                </div>
                <Button Funcion={logouts} Name={'logout'}/>
            </div>
        </nav>


    )
}