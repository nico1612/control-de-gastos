import { useSelector } from "react-redux"
import { TransaccionCards } from "./TransaccionCards"


export const TransaccionList=()=>{
    
    const {Transacciones} =useSelector(state=>state.transaciones)

    return(
            <div className="container text-center">
                <div className="row align-items-start">
                {
                    Transacciones.map(transaccion=>( 
                        <TransaccionCards key={transaccion.id} transaccion={transaccion}/>
                    ))
                }
                </div>
            </div>
    )
}