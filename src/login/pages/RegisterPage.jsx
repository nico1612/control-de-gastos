import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { startLoginWithEmailPassword } from "../../store/auth/thunks"

export const RegisterPage=()=>{

    const dispatch =useDispatch()
    const {email,password,onInputChange}= useForm(formData)
    const onSubmit=(event)=>{
    
    event.preventDefault()

    //console.log({email,password})

    dispatch( startLoginWithEmailPassword({ email, password }) );

  }
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2 className="fw-bold text-center py-5">bienvenido</h2>
                </div>

                <form onSubmit={onSubmit}>
                    <div className="mb-6">
                        <label className="form-label"> Correo electronico</label>
                        <input type="email" className="form-control" name="email"/>
                    </div>
                    <div className="mb-6">
                        <label className="form-label"> ingresa password</label>
                        <input type="email" className="form-control" name="password"/>
                    </div>
                    <div className="mb-6">
                        <label className="form-label" name= "email" value={email}> ingresa password</label>
                        <input type="email" className="form-control" name="password"/>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary" > registrarse</button>
                    </div>
                    
                    <div className="my-3">
                        <span>no tienes cuenta? </span> <Link to={"/auth/login"}>registrarse</Link>
                    </div>
                </form>
            </div>

        </div>
        </>
    )
}