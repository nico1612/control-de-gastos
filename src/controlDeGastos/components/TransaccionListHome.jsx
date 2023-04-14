import { useSelector } from "react-redux"
import { TransaccionCardsHome } from "./TransaccionCardHome"


export const TransaccionListHome=()=>{
    
    const {Transacciones} =useSelector(state=>state.transaciones)

    return(
            <div className="container text-center">
                <div className="row align-items-start">
                {
                    Transacciones.map(transaccion=>( 
                        <TransaccionCardsHome key={transaccion.id} transaccion={transaccion}/>
                    ))
                }
                </div>
            </div>
    )
}