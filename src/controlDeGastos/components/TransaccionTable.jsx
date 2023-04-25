import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setActiveTransaccion, startEliminar } from "../../store"

export const TransaccionTable=()=>{

    const {Transactions} =useSelector(state=>state.transaciones)
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const eliminar=({Transaction})=>{
        dispatch(setActiveTransaccion(Transaction))
        dispatch(startEliminar({Transaction}))
    }

    const iniciarModificar=({Transaction})=>{
        dispatch(setActiveTransaccion(Transaction))
        navigate("/modificar")
    }

    return(
        <>
            <table className="table align-middle table-striped table-bordered table-bordered border-primary">
                <thead className="table-active">
                    <tr>
                        <th>Id</th>
                        <th>Usuario</th>
                        <th>Concepto</th>
                        <th>Categoria</th>
                        <th>Monto</th>
                        <th>Dia</th>
                        <th>Tipo de transaccion</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {
                        Transactions.map(Transaction=>( 
                            <tr key={Transaction.id}>
                                <td>{Transaction.id}</td>
                                <td>{Transaction.user}</td>
                                <td>{Transaction.concept}</td>
                                <td>{Transaction.category}</td>
                                <td>{Transaction.amount}</td>
                                <td>{Transaction.date}</td>
                                <td>{Transaction.transactionType}</td>
                                <td><button onClick={iniciarModificar({Transaction})}>Modificar</button></td>
                                <td><button onClick={eliminar({Transaction})}>eliminar</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}