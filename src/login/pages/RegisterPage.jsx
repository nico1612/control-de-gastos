
import { Link } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { startRegister } from "../../store/auth/thunks"
import { useDispatch, useSelector } from "react-redux"

const formData={ 
    email:'',
    surname:'',
    name:'',
    password:''
}

export const RegisterPage=()=>{

    const {email,name,surname,password,onInputChange}= useForm(formData)

    const {error} =useSelector(state=>state.auth)
    const dispatch =useDispatch()

    const onSubmit=(event)=>{
    
        event.preventDefault()
    
        console.log({email,password,name,surname})
    
        dispatch( startRegister({ email, password,name,surname }) );
    
    }

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="fw-bold text-center py-5">registrese</h2>
                    </div>
                    {
                        (error)?
                            <div class="alert alert-danger" role="alert">
                                usuario registrado
                            </div>
                            :<></>

                    }
                    <form className="col-xs-12" onSubmit={onSubmit}>
                        <div className="row g-3 align-items-center">
                            <div className="col-auto">
                                <label className="form-label"> ingrese nombre</label>
                            </div>
                            <div className="col-auto">
                                <input type="text" className="form-control" name= "name" value={name} onChange={onInputChange}/>
                            </div>
                        </div>
                        <br/>
                        <div className="row g-3 align-items-center">
                            <div className="col-auto">
                                <label className="form-label"> ingresa surname</label>
                            </div>
                            <div className="col-auto">
                                <input type="text" className="form-control" name= "surname" value={surname} onChange={onInputChange}/>
                            </div>
                        </div>
                        <br/>
                        <div className="row g-3 align-items-center">
                            <div className="col-auto">
                                <label className="form-label"> Correo electronico</label>
                            </div>
                            <div className="col-auto">
                                <input type="email" className="form-control" name= "email" value={email} onChange={onInputChange}/>
                            </div>
                        </div>
                        <br/>
                        <div className="row g-3 align-items-center">
                            <div className="col-auto">
                                <label className="form-label"> ingresa password</label>
                            </div>
                            <div className="col-auto">
                                <input type="password" className="form-control" name= "password" value={password} onChange={onInputChange}/>
                            </div>
                            <div className="col-auto">
                                <span id="passwordHelpInline" className="form-text">
                                    debe tener 8 caracteres, por lo menos 1 mayuscula, 1 minuscula, 1 numero y 1 caracter especial.
                                </span>
                            </div>
                        </div>
                        <br/>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary" > registrarse</button>
                        </div>
                        
                        <div className="mb-6 col-sm-4-auto  p-5 text-center">
                            <span> tienes cuenta? </span> <Link to={"/auth/login"}>login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}