
import { Link } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { startRegister } from "../../store/auth/thunks"

const formData={ 
    email:'',
    surname:'',
    name:'',
    password:''
}

export const RegisterPage=()=>{

    const {email,name,surname,password,onInputChange}= useForm(formData)

    const onSubmit=(event)=>{
    
        event.preventDefault()
    
        //console.log({email,password})
    
        dispatch( startRegister({ email, password,name,surname }) );
    
    }

    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2 className="fw-bold text-center py-5">registrese</h2>
                </div>

                <form onSubmit={onSubmit}>

                    <div className="mb-6">
                        <label className="form-label"> ingresa password</label>
                        <input type="text" className="form-control" name= "surname" value={surname} onChange={onInputChange}/>
                    </div>

                    <div className="mb-6">
                        <label className="form-label"> ingresa password</label>
                        <input type="text" className="form-control" name= "name" value={name} onChange={onInputChange}/>
                    </div>

                    <div className="mb-6">
                        <label className="form-label"> Correo electronico</label>
                        <input type="email" className="form-control" name= "email" value={email} onChange={onInputChange}/>
                    </div>

                    <div className="mb-6">
                        <label className="form-label"> ingresa password</label>
                        <input type="password" className="form-control" name= "password" value={password} onChange={onInputChange}/>
                    </div>

                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary" > registrarse</button>
                    </div>
                    
                    <div className="my-3">
                        <span> tienes cuenta? </span> <Link to={"/auth/login"}>login</Link>
                    </div>
                </form>
            </div>

        </div>
        </>
    )
}