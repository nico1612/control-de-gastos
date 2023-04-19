import { useSelector } from "react-redux"

export const TablaHome=()=>{

    const {Transactions} =useSelector(state=>state.transaciones)

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
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}