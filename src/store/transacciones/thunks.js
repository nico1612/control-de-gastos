import { deleteTransaccionById, setAllTransacciones, setCategories, setTenTransacciones, setTransacciones, setTransactionTypes, updateTransaccion } from "./transaccionesSlice"

const url=import.meta.env.VITE_APP_IP

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

export const startEliminar=()=>{

    return async(dispatch,getState)=>{
        const {token} = getState().auth;
        const {active:transaccion} = getState().transaciones;

        const option ={
            method: 'DELETE',
            headers:{
                "Content-Type": "application/json",
                "Authorization":`Bearer ${token}`
            },

        }

        await fetch(`${url}/transaction/${transaccion.id}`,option)

        dispatch(deleteTransaccionById(transaccion.id))       

    }
}

export const startingUpdating=({Id,Datas,TransaccionUpdate})=>{

    return async(dispatch,getState)=>{

        const {token} = getState().auth;
        
        
        const option ={
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Authorization":`Bearer ${token}`
            },
            body: JSON.stringify(Datas)
        }
        const result=await fetch(`${url}/transaction/${Id}`,option)
        
        if(result.status){
            dispatch(updateTransaccion(TransaccionUpdate))
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
    }
}