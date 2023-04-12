import { setCategories, setTransactionTypes } from "./categoriesSlice"

const url= 'http://34.229.140.16:3001'

export const startGettingCategorias=()=>{
    
    return async (dispatch,getState)=>{


        const transacciones= await fetch(`${url}/transaction/new`)

        const {body}=await transacciones.json()
      
        const {transactionTypes,categories}= body
        dispatch(setCategories(categories))
        dispatch(setTransactionTypes(transactionTypes))
    }
}

export const clearCategoriasLogout=()=>{

    return async (dispatch,getState)=>{
    
    dispatch(clearTransaccionLogout())
    }
}