import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { setActiveTransaccion, startEliminar } from "../../store/"
import { Parrafo } from "./Parrafo"
import { Button } from "./Button"

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
        <div className="row col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" >
            <div className="card">
                <div className="row no-gutter">
                    <div>
                        <div className="card-body">
                            <h4 className="card-title">de: {Transaction.user}</h4>

                            <Parrafo Init={'Concepto'} Value= {Transaction.concept}/>

                            <Parrafo Init={'Categoria'} Value={Transaction.category}/>

                            <Parrafo Init={'Monto'} Value={Transaction.amount}/>

                            <Parrafo Init={'Día'} Value={Transaction.date}/>

                            <Parrafo Init={'Transacción'} Value={Transaction.transactionType}/>

                            <div className="btn-group" role="group" aria-label="Basic example">
                                <Button Funcion={iniciarModificar} Name={'Modificar'}/>
                                <Button Funcion={eliminar} Name={'Eliminar'}/>
                            </div>                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}