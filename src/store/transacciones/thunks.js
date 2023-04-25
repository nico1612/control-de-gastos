import { ActualizarTransaccion, EliminarTransaccion, crearTransaccion } from "../helpers"
import { deleteTransaccionById, setAllTransacciones, setCategories, setTenTransacciones, setTransactionTypes, updateTransaccion } from "./transaccionesSlice"

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

        await EliminarTransaccion({url,TransactionActual,token})

        dispatch(deleteTransaccionById(TransactionActual.id))       

    }
}

export const startingUpdating=({Id,Datas,TransaccionUpdate})=>{

    return async(dispatch,getState)=>{

        const {token} = getState().auth;

        const {result} = await ActualizarTransaccion({Id,Datas,token,url})

        if(result.status){
            dispatch(updateTransaccion(TransaccionUpdate))
        }
    }
}

export const createNewTransaccion=({data})=>{

    return async(dispatch,getState)=>{

        const {token} = getState().auth;

        await crearTransaccion({url,data,token})
    }
}