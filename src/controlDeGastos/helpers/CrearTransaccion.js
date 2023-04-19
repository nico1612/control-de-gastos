import axios from "axios"


export const crearTransaccion=async({data,token})=>{
    const url=import.meta.env.VITE_APP_IP
    await axios.post(`${url}/transaction/new`, {
        userId:data.userId,
        concept: data.Concept,
        categoryId:data.TransactionTypeId,
        amount: data.Amount,
        date: data.date,
        transactionTypeId: data.TransactionTypeId,
    }, {
        headers: {
            'Content-Type': 'application/json',
            "Authorization":`Bearer ${token}`
        }
      }
    )
      .then(function (response) {
        console.log(response);
      })
      .catch( (error)=> {
        console.log(error);
      });
}