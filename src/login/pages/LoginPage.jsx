import { Link } from "react-router-dom"


export const LoginPage=()=>{

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2 className="fw-bold text-center py-5">bienvenido</h2>
                </div>

                <form>
                    <div className="mb-6">
                        <label className="form-label"> Correo electronico</label>
                        <input type="email" className="form-control" name="email"/>
                    </div>
                    <div className="mb-6">
                        <label className="form-label"> password</label>
                        <input type="email" className="form-control" name="password"/>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary" > iniciar sesion</button>
                    </div>
                    
                    <div className="my-3">
                        <span>no tienes cuenta? </span> <Link to={"/auth/register"}>registrarse</Link>
                    </div>
                </form>
            </div>

        </div>
    )
}