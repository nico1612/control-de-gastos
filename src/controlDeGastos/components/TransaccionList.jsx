import { useSelector } from "react-redux"
import { TransaccionCards } from "./TransaccionCards"


export const TransaccionList=()=>{
    
    const {Transactions} =useSelector(state=>state.transaciones)

    return(
            <div className="container text-center">
                <div className="row align-items-start">
                {
                    Transactions.map(Transaction=>( 
                        <TransaccionCards key={Transaction.id} Transaction={Transaction}/>
                    ))
                }
                </div>
            </div>
    )
}