import { deleteTransaccionById, findCategoryId, findTransactionTypesId, setAllTransacciones, setCategories, setTenTransacciones, setTransacciones, setTransactionTypes, updateTransaccion } from "./transaccionesSlice"

const url= 'http://34.229.140.16:3001'

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
                "Authorization":`bearer ${token}`
            },

        }

        const result=await fetch(`${url}/transaction/${id}`,option)

        dispatch(deleteTransaccionById(id))       

    }
}

export const startingUpdating=({id,user,concept,category,amount,date,transactionType})=>{

    return async(dispatch,getState)=>{

        const {token} = getState().auth;

       const updateTransaccion={
            id:id,
            user:user,
            concept:concept,
            category:category,
            amount:amount,
            date:date,
            transactionType:transactionType
        }
        const result = fetch(`${url}/transaction/${id}`,{
            method:"PUT",
            headers:{
                "Authorization":`bearer ${token}`
            },
            body:updateTransaccion

        })
        if(result.status)
        dispatch(updateTransaccion(transaccion))
    }
}

export const createNewTransaccion=({transactionTypes,date,amount,concept,category,userId})=>{

    return async(dispatch,getState)=>{

        dispatch(startGettingCategorias())
        const {token} = getState().auth;
        console.log(token)
        console.log(getState().categories)
        const categorieId=dispatch(findCategoryId(category))
        const transactionTypeId =dispatch(findTransactionTypesId(transactionTypes))
        const formDatas={
            transactionTypeId:transactionTypeId,
            date:date,
            amount:amount,
            concept:concept,
            categoryId:categorieId,
            userId:userId
        }
        const option ={
            method: 'POST',
            headers:{
                "Authorization":`bearer ${token}`
            },
            body: formDatas
        }
        console.log(categorieId)
        //await fetch(`${url}/transaction/new`)

    }
}