import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Button } from "./Button"
import { setActiveTransaccion, startEliminar } from "../../store/transacciones"


export const TransaccionTable=()=>{

    const {Transactions} =useSelector(state=>state.transaciones)
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const eliminar=()=>{
        dispatch(setActiveTransaccion(TransactionActual))
        dispatch(startEliminar({TransactionActual}))
    }
    const iniciarModificar=({Transaction})=>{
        dispatch(setActiveTransaccion(Transaction))
        navigate("/modificar")
    }
    return(
        <>
        <table className="table table-sm ">
                <thead className="table-active">
                    <th>Id</th>
                    <th>Usuario</th>
                    <th>Concepto</th>
                    <th>Categoria</th>
                    <th>Monto</th>
                    <th>Dia</th>
                    <th>Tipo de transaccion</th>
                </thead>
                <tbody>
                    {
                        Transactions.map(Transaction=>( 
                            <tr key={Transaction.id}>
                                <th>{Transaction.id}</th>
                                <th>{Transaction.user}</th>
                                <th>{Transaction.concept}</th>        
                                <th>{Transaction.category}</th>          
                                <th>{Transaction.amount}</th>
                                <th>{Transaction.date}</th>
                                <th>{Transaction.transactionType}</th>
                                <th><button onClick={iniciarModificar(Transaction)}>Modificar</button></th>
                                <th>
                                    <div className="container-fluid h-100"> 
                                        <div className="row w-100">
                                            <div className="d-grid gap-2">
                                                <Button Funcion={eliminar} Name={'Eliminar'} Transaction={Transaction}/>
                                            </div>
                                        </div>
                                    </div>
                            </th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}