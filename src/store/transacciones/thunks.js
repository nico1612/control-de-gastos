import { findCategoryId, findTransactionTypesId, setCategories, setTransactionTypes } from "../categories/categoriesSlice"
import { deleteTransaccionById, setAllTransacciones, setTenTransacciones, setTransacciones, updateTransaccion } from "./transaccionesSlice"

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

export const createNewTransaccion=({transactionType,date,amount,concept,category,userId})=>{

    return async(dispatch,getState)=>{
        const {token} = getState().auth;
        const categorieId =dispatch(findCategoryId(category))
        const transactionTypeId =dispatch(findTransactionTypesId(transactionType))
        console.log(categorieId,transactionTypeId)
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
        //await fetch(`${url}/transaction/new`)

    }
}