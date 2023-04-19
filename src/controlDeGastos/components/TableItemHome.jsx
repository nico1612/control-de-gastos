

export const TablaItemHome=(Transaction)=>{

 /*   <th>Id</th>
                    <th>Usuario</th>
                    <th>Concepto</th>
                    <th>Categoria</th>
                    <th>Monto</th>
                    <th>Dia</th>
                    <th>Tipo de transaccion</th>
*/
    return(
        <>
            <tr>
                <td>{Transaction.id}</td>
                <td>{Transaction.user}</td>
                <td>{Transaction.concept}</td>        
                <td>{Transaction.category}</td>          
                <td>{Transaction.amount}</td>
                <td>{Transaction.date}</td>
                <td>{Transaction.transactionType}</td>
            </tr>
        </>
    )
}