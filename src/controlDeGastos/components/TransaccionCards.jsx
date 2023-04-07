

export const TransaccionCards=()=>{

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

                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}