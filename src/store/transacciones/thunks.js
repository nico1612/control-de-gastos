import { deleteTransaccionById, setAllTransacciones, setCategories, setTenTransacciones, setTransacciones, setTransactionTypes, updateTransaccion } from "./transaccionesSlice"

const url=import.meta.env.VITE_APP_IP

export const startGettingTransacciones=()=>{
    
    return async (dispatch)=>{

        const transacciones= await fetch(`${url}/`)

        const {body}= await transacciones.json()
        dispatch(setTenTransacciones(body))
    }
}

export const startGettingTransaccionesAll=()=>{

    return async (dispatch)=>{

        const transacciones= await fetch(`${url}/transaction`)
        const {body}= await transacciones.json()
        
        const {allTransactions,categories,transactionTypes}=body
        dispatch(setAllTransacciones(allTransactions))
        dispatch(setCategories(categories))
        dispatch(setTransactionTypes(transactionTypes))

    }

}

export const startEliminar=({TransactionActual})=>{

    return async(dispatch,getState)=>{
        const {token} = getState().auth;
        const option ={
            method: 'DELETE',
            headers:{
                "Content-Type": "application/json",
                "Authorization":`bearer ${token}`
            },

        }
        await fetch(`${url}/transaction/${TransactionActual.id}`,option)
        //await EliminarTransaccion({url,TransactionActual,token}) sin probar
        dispatch(deleteTransaccionById(TransactionActual.id))       

    }
}

export const startingUpdating=({Id,Datas,TransactionActual})=>{

    return async(dispatch,getState)=>{

        const {token} = getState().auth;

        const Data={
            transactionTypeId:Datas.TransactionTypeId,
            date:Datas.date,
            amount:Datas.Amount,
            concept:Datas.Concept,
            categoryId:Datas.CategoryId,
        }
        const option ={
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Authorization":`bearer ${token}`
            },
            body: JSON.stringify(Data)
        }
        const result=await fetch(`${url}/transaction/${Id}`,option)
        //const {result} = await ActualizarTransaccion(Datas,token,url) sin probar
        if(result.status){
            dispatch(updateTransaccion(TransactionActual))
        }
    }
}

export const createNewTransaccion=({transactionTypeId,date,amount,concept,categoryId,transactionType,category})=>{

    return async(dispatch,getState)=>{

        const {token,userId} = getState().auth;
        const formDatas={
            "userId":userId,
            "concept":concept,
            "categoryId":categoryId,
            "amount":amount,
            "date":date,
            "transactionTypeId":transactionTypeId,
        }
        
        const option ={
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization":`bearer ${token}`
            },
            body: JSON.stringify(formDatas)
        }

        await fetch(`${url}/transaction/new` , option)
        //await CrearTransaccion(url,data,token) sin probar
    }
}