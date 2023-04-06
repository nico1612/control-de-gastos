import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { startLogin } from "../../store/auth/thunks"


const formData={ 
    email:'',
    password:''
}

export const LoginPage=()=>{

    const dispatch =useDispatch()
    const {email,password,onInputChange}= useForm(formData)
    
    const onSubmit=(event)=>{
    
  
        event.preventDefault()

        dispatch( startLogin( {email, password} ) );
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2 className="fw-bold text-center py-5">bienvenido</h2>
                </div>

                <form onSubmit={onSubmit}>
                    <div className="mb-6">
                        <label className="form-label"> Correo electronico</label>
                        <input type="email" className="form-control" name= "email" value={email} onChange={onInputChange}/>
                    </div>
                    <div className="mb-6">
                        <label className="form-label"> password</label>
                        <input type="password" className="form-control" name= "password" value={password} onChange={onInputChange}/>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary" onClick={onSubmit} > iniciar sesion</button>
                    </div>
                    
                    <div className="my-3">
                        <span>no tienes cuenta? </span> <Link to={"/auth/register"}>registrarse</Link>
                    </div>
                </form>
            </div>

        </div>
    )
}