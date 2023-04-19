import { useSelector } from "react-redux"
import { TransaccionCardsHome } from "./TransaccionCardHome"


export const TransaccionListHome=()=>{
    
    const {Transactions} =useSelector(state=>state.transaciones)

    return(
            <div className="container text-center">
                <div className="row align-items-start">
                {
                    Transactions.map(Transaction=>( 
                        <>
                        <TransaccionCardsHome key={Transaction.id} Transaction={Transaction}/>
                        <br/>
                        </>

                    ))
                }
                </div>
            </div>
    )
}