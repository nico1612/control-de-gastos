import { ButtonModificar } from "./ButtonModificar"


export const TransaccionCards=({transaccion})=>{

    return(
        <div className="col animate__animated animate__fadeIn">
        <div className="card">
            <div className="row no-gutter">
                
                <div>
                    <div className="card-body">
                        <h5 className="card-title">{}</h5>

                        <p className="card-text">{} </p>
                        
                        
                        <p className="card-text">
                            <small className="text-muted">{}</small>
                        </p>

                        <p className="card-text">
                            <small className="text-muted">{}</small>
                        </p>

                       <ButtonModificar transaccion={transaccion}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}