import { ButtonModificar } from "./ButtonModificar"


export const TransaccionCards=({transaccion})=>{

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

                                    <ButtonModificar transaccion={transaccion}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}