import { setTransacciones } from "./transaccionesSlice"

const url= 'http://54.242.99.47:3001'

export const startGettingTransacciones=()=>{
    return async(dispatch)=>{

        return async (dispatch,getState)=>{

            const {uid} =getState().auth
    
            if(!uid) throw new Error('el uid del usuario no existe')
    
            const transacciones= await fetch(`${url}/`)
    
            dispatch(setTransacciones(transacciones))
        }

    }
}

export const startGettingTransaccionesAll=()=>{
    return async(dispatch)=>{

        return async (dispatch,getState)=>{

            const {uid} =getState().auth
    
            if(!uid) throw new Error('el uid del usuario no existe')
    
            const transacciones= await fetch(`${url}/transaction`)
    
            dispatch(setTransacciones(transacciones))
        }

    }
}