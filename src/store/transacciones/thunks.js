import { deleteTransaccionById, setAllTransacciones, setCategories, setTenTransacciones, setTransacciones, setTransactionTypes, updateTransaccion } from "./transaccionesSlice"

const url= import.meta.env.VITE_APP_IP

export const startGettingTransacciones=()=>{
    
    return async (dispatch,getState)=>{

        const transacciones= await fetch(`${url}/`)

        const {body}= await transacciones.json()
        dispatch(setTenTransacciones(body))
    }
}

export const startGettingTransaccionesAll=()=>{

    return async (dispatch,getState)=>{

        const transacciones= await fetch(`${url}/transaction`)
        const {body}= await transacciones.json()
        
        const {allTransactions,categories,transactionTypes}=body
        dispatch(setAllTransacciones(allTransactions))
        dispatch(setCategories(categories))
        dispatch(setTransactionTypes(transactionTypes))

    }

}

export const startEliminar=({id})=>{

    return async(dispatch,getState)=>{
        const {token} = getState().auth;
        
        const option ={
            method: 'DELETE',
            headers:{
                "Content-Type": "application/json",
                "Authorization":`bearer ${token}`
            },

        }

        await fetch(`${url}/transaction/${id}`,option)

        dispatch(deleteTransaccionById(id))       

    }
}

export const startingUpdating=({id,
    user,
    concept,
    category,
    categoryId,
    amount,
    date,
    transactionType,
    transactionTypeId})=>{

    return async(dispatch,getState)=>{

        const {token} = getState().auth;
        
        const formDatas={
            transactionTypeId:transactionTypeId,
            date:date,
            amount:amount,
            concept:concept,
            categoryId:categoryId,
        }
        const option ={
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Authorization":`bearer ${token}`
            },
            body: JSON.stringify(formDatas)
        }
        console.log(option)
        const result=await fetch(`${url}/transaction/${id}`,option)
        const transaccionUpdate={
            id:id,
            user:user,
            concept:concept,
            category:category,
            amount:amount,
            date:date,
            transactionType:transactionType,  
        }
        if(result.status){
            dispatch(updateTransaccion(transaccionUpdate))
        }
        
    }
}

export const createNewTransaccion=({transactionTypeId,date,amount,concept,categoryId,transactionType,category})=>{

    return async(dispatch,getState)=>{

        const {token,userId} = getState().auth;
        const formDatas={
            userId:userId,
            date:date,
            amount:amount,
            transactionTypeId:transactionTypeId,
            categoryId:categoryId,
            concept:concept,
        }
        
        const option ={
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization":`bearer ${token}`
            },
            body: JSON.stringify({
                "transactionTypeId":transactionTypeId,
                "date":date,
                "amount":amount,
                "concept":concept,
                "categoryId":categoryId,
                "userId":userId
            })
        }

        console.log(option)
        const result=await fetch(`${url}/transaction/new`,option)
        console.log(result)
    }
}