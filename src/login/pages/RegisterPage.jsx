
import { useEffect } from "react"

import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { startRegister } from "../../store/auth/thunks"
import { setError } from "../../store/auth/authSlice"
import { useError, useForm } from "../../hooks"
import { checkFormRegister } from "../helpers"

const formData={ 
    Email:'',
    Surname:'',
    Name:'',
    Password:''
}

export const RegisterPage=()=>{

    const {Email,Name,Surname,Password,onInputChange}= useForm(formData)

    const {error} =useSelector(state=>state.auth)
    const dispatch =useDispatch()
    const {ErrorMail,
        setErrorMail,
        ErrorPassword,
        setErrorPassword,
        ErrorName,
        setErrorName,
        ErrorSurname,
        setErrorSurname}= useError()
    useEffect(()=>{
        if(error)
        dispatch(setError())
    })
    const onSubmit=(event)=>{

        event.preventDefault()
        if(checkFormRegister({ErrorName,Email,
            Password,
            Name,
            Surname,
            setErrorMail,
            setErrorName,
            setErrorPassword,
            setErrorSurname})){

            dispatch( startRegister({ Email, Password,Name,Surname }) );
        }
    }

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="fw-bold text-center py-5">registrese</h2>
                    </div>
                    {
                        (error) && <div className="alert alert-danger" role="alert">
                                usuario registrado
                            </div>
                    }

                    <form className="col-xs-12" onSubmit={onSubmit}>


                    {(ErrorName)
                        ?<>
                        <div className="mb-6 col-sm-4-auto p-4 text-center border border-danger">
                            <label className="form-label"> nombre</label>
                            <input type="text" className="form-control" name= "Name" value={Name} onChange={onInputChange}/>
                        </div>
                        <p>nombre es requerido</p>
                        </>
                        :<div className="mb-6 col-sm-4-auto p-4 text-center">
                            <label className="form-label"> nombre</label>
                            <input type="text" className="form-control" name= "Name" value={Name} onChange={onInputChange}/>
                        </div>
                    }

                    {(ErrorSurname)
                        ?<>
                        <div className="mb-6 col-sm-4-auto p-4 text-center border border-danger">
                            <label className="form-label"> apellido</label>
                            <input type="text" className="form-control" name= "Surname" value={Surname} onChange={onInputChange}/>
                        </div>
                        <p>apellido es requerido</p>
                        </>
                        :<div className="mb-6 col-sm-4-auto p-4 text-center ">
                            <label className="form-label"> apellido</label>
                            <input type="text" className="form-control" name= "Surname" value={Surname} onChange={onInputChange}/>
                        </div>
                    }


                    {(ErrorMail)
                        ?<>
                            <div className="mb-6 col-sm-4-auto p-4 text-center border border-danger">
                                <label className="form-label"> mail</label>
                                <input type="email" className="form-control" name= "Email" value={Email} onChange={onInputChange}/>
                            </div> <p>mail es requerido</p>
                        </>
                        :<div className="mb-6 col-sm-4-auto p-4 text-center">
                            <label className="form-label"> mail</label>
                            <input type="email" className="form-control" name= "Email" value={Email} onChange={onInputChange}/>
                        </div>
                    }

                        {
                        (!ErrorPassword)
                        ?<div className="mb-6 col-sm-4-auto p-4 text-center">
                            <label className="form-label"> password</label>
                            <input type="password" className="form-control" name= "Password" value={Password} onChange={onInputChange}/>
                            <span id="passwordHelpInline" className="form-text">
                                debe tener 8 caracteres, por lo menos 1 mayuscula, 1 minuscula, 1 numero y 1 caracter especial.
                            </span>
                        </div>
                        :<><div className="mb-6 col-sm-4-auto p-4 text-center border  border-danger">
                            <label className="form-label"> password</label>
                            <input type="password" className="form-control" name= "Password" value={Password} onChange={onInputChange}/>
                            <span id="passwordHelpInline" className="form-text">
                                debe tener 8 caracteres, por lo menos 1 mayuscula, 1 minuscula, 1 numero y 1 caracter especial.
                            </span>
                        </div>
                        <p>contraseña es requerido</p>
                        </>
                        }
                        
                        <div className="mb-6 col-sm-4-auto p-4 text-center">
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