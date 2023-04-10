import { useDispatch, useSelector } from "react-redux"
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
    
    const {error} =useSelector(state=>state.auth)

    const onSubmit=(event)=>{
        console.log(email)
        event.preventDefault()

        dispatch( startLogin( {email, password} ) );
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2 className="fw-bold text-center py-5">bienvenido</h2>
                </div>

                {
                    (error)?
                    <div class="alert alert-danger" role="alert">
                        error en usuario o contraseña
                    </div>
                    :<></>
                }

                <form onSubmit={onSubmit}>
                    <div className="mb-6 col-sm-4-auto  p-4 text-center">
                        <label className="form-label"> Correo electronico</label>
                        <input type="email" className="form-control" name= "email" value={email} onChange={onInputChange}/>
                    </div>
                    <div className="mb-6 col-sm-4-auto  p-4 text-center">
                        <label className="form-label"> password</label>
                        <input type="password" className="form-control" name= "password" value={password} onChange={onInputChange}/>
                    </div>
                    <div className="mb-6 col-sm-4-auto  p-4 text-center">
                        <button type="submit" className="btn btn-primary" onClick={onSubmit} > iniciar sesion</button>
                    </div>
                    
                    <div className="my-3 mb-6 col-sm-4-auto  p-5 text-center">
                        <span>no tienes cuenta? </span> <Link to={"/auth/register"}>registrarse</Link>
                    </div>
                </form>
            </div>

        </div>
    )
}