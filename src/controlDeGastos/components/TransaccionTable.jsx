import { useSelector } from "react-redux"
import { Button } from "./Button"

export const TransaccionTable=()=>{

    const {Transactions} =useSelector(state=>state.transaciones)

    const eliminar=()=>{
        dispatch(setActiveTransaccion(TransactionActual))
        dispatch(startEliminar())
    }
    const iniciarModificar=()=>{
        dispatch(setActiveTransaccion(TransactionActual))
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
                            <>
                            <tr key={Transaction.id}>
                                <td>{Transaction.id}</td>
                                <td>{Transaction.user}</td>
                                <td>{Transaction.concept}</td>        
                                <td>{Transaction.category}</td>          
                                <td>{Transaction.amount}</td>
                                <td>{Transaction.date}</td>
                                <td>{Transaction.transactionType}</td>
                                <td><Button Funcion={iniciarModificar} Name={'Modificar'} /></td>
                                <td><Button Funcion={eliminar} Name={'Eliminar'}/></td>
                            </tr>
                            </>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}