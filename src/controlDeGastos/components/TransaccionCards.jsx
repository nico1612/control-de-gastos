import { useDispatch } from "react-redux"
import { setActiveTransaccion, startEliminar } from "../../store/transacciones"
import { useNavigate } from "react-router-dom"
import { Button } from "./Button"
import { Parrafo } from "./Parrafo"

export const TransaccionCards=({Transaction})=>{

    const TransactionActual=Transaction
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const eliminar=()=>{
        dispatch(setActiveTransaccion(TransactionActual))
        dispatch(startEliminar({TransactionActual}))
    }
    const iniciarModificar=()=>{
        dispatch(setActiveTransaccion(TransactionActual))
        navigate("/modificar")
    }
    return(
        <div className="row col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="card">
                <div className="row no-gutter">
                    <div>
                        <div className="card-body">
                            <h5 className="card-title">de:{Transaction.user}</h5>

                            <Parrafo Init={'Concepto'} Value={Transaction.concept}/>
                            
                            <Parrafo Init={'Categoria'} Value={Transaction.category}/>

                            <Parrafo Init={'Monto'} Value={Transaction.amount}/>

                            <Parrafo Init={'Día'} Value={Transaction.date}/>

                            <Parrafo Init={'Transacción'} Value={Transaction.transactionType}/>
                            
                            <Button Funcion={iniciarModificar} Name={'Modificar'} />
                            
                            <div className="container-fluid h-100"> 
                                <div className="row w-100">
                                    <div className="d-grid gap-2">
                                        <Button Funcion={eliminar} Name={'Eliminar'}/>
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