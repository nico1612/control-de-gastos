

export const crearTransaccion=async({data,token})=>{
    const url=import.meta.env.VITE_APP_IP
    const formData={
        transactionTypeId:data.TransactionTypeId,
        date:data.date,
        amount:data.Amount,
        concept:data.Concept,
        categoryId:data.TransactionTypeId,
        userId:data.userId
    }
    const option ={
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization":`bearer ${token}`
        },
        body: JSON.stringify({
            transactionTypeId:data.TransactionTypeId,
            date:data.date,
            amount:data.Amount,
            concept:data.Concept,
            categoryId:data.TransactionTypeId,
            userId:data.userId    
        })
    }
console.log(option)
   const result=await fetch(`${url}/transaction/new` , option)
   console.log(result)
}