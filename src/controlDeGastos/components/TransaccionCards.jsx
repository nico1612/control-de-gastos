import { useDispatch } from "react-redux"
import { setActiveTransaccion, startEliminar } from "../../store/transacciones"
import { useNavigate } from "react-router-dom"


export const TransaccionCards=({transaccion})=>{

    const Transaccion=transaccion
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const eliminar=()=>{
        dispatch(setActiveTransaccion(transaccion))
        dispatch(startEliminar())
    }
    const iniciarModificar=()=>{
        dispatch(setActiveTransaccion(Transaccion))
        navigate("/modificar")
    }
    return(
        <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="col animate__animated animate__fadeIn">
                    <div className="card">
                        <div className="row no-gutter">
                        
                            <div>
                                <div className="card-body">
                                    <h5 className="card-title">de:{transaccion.user}</h5>

                                    <p className="card-text">concepto:{transaccion.concept} </p>
                                    
                                    
                                    <p className="card-text">
                                        <small className="text-muted">categoria:{transaccion.category}</small>
                                    </p>

                                    <p className="card-text">
                                        <small className="text-muted">monto:{transaccion.amount}</small>
                                    </p>

                                    <p className="card-text">
                                        <small className="text-muted">dia:{transaccion.date}</small>
                                    </p>
                                    <p className="card-text">
                                        <small className="text-muted">transaccion:{transaccion.transactionType}</small>
                                    </p>

                                    <button type="button" className="btn btn-warning align-center" onClick={iniciarModificar}>
                                        modificar
                                    </button>
                                    
                                    <div className="container-fluid h-100"> 
                                        <div className="row w-100">
                                            <div className="d-grid gap-2">
                                                <button type="button" className="btn btn-danger" onClick={eliminar}>
                                                    eliminar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}