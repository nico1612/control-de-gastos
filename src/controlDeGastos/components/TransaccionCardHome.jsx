import { Parrafo } from "./Parrafo"



export const TransaccionCardsHome=({Transaction})=>{

  
    return(
        <>        
            <div className="row col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className="card">
                    <div className="row no-gutter">
                        <div>
                            <div className="card-body">
                                <h5 className="card-title">de: {Transaction.user}</h5>

                                <Parrafo Init={'concepto'}  Value={Transaction.concept}/>
                                
                                <Parrafo Init={'categoria'}  Value={Transaction.category}/>
                                
                                <Parrafo Init={'monto'}  Value={Transaction.amount}/>

                                <Parrafo Init={'día'}  Value={Transaction.date}/>

                                <Parrafo Init={'transacción'}  Value={Transaction.transactionType}/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}