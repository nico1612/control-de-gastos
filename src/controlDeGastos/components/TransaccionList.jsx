import { useSelector } from "react-redux"
import { TransaccionCards } from "./TransaccionCards"


export const TransaccionList=()=>{
    
    const {Transacciones} =useSelector(state=>state.transaciones)

    return(
            <div class="container text-center">
                <div class="row align-items-start">
                {
                    Transacciones.map(transaccion=>( 
                        <TransaccionCards key={transaccion.id} transaccion={transaccion}/>
                    ))
                }
                </div>
            </div>
    )
}