import { deleteTransaccionById, setTenTransacciones, setTransacciones, updateTransaccion } from "./transaccionesSlice"

const url= 'http://54.242.99.47:3001'

export const startGettingTransacciones=()=>{
    
    return async (dispatch,getState)=>{


        const transacciones= await fetch(`${url}/`)

        const {body}=await transacciones.json()
        dispatch(setTenTransacciones(body))
    }
}

export const startGettingTransaccionesAll=()=>{

    return async (dispatch,getState)=>{

        const transacciones= await fetch(`${url}/transaction`)
        const {body}=transacciones.json()
        dispatch(setTransacciones(body))
    }

}

export const startEliminar=()=>{

    return async(dispatch,getState)=>{
        const {token} = getState().auth;
        const {active:transaccion} = getState().transacciones

        const formData =transaccion;
        //formData.append('first_name', profile.firstName);
        //formData.append('last_name', profile.lastName);
        //formData.append('email', profile.email);

        const result=await fetch(`${url}/transaction/${transaccion.id}`, {
            method: 'DELETE',
            headers:{
                "token":token
            },
            body: formData
        })
        dispatch(deleteTransaccionById(transaccion.id))       

    }
}

export const startingUpdating=()=>{

    return async(dispatch)=>{

        const {token} = getState().auth;
        const {active:transaccion} = getState().journal

        updateTransaccion={
            id:transaccion.id,
            user:transaccion.user,
            concept:transaccion.concept,
            category:transaccion.category,
            amount:transaccion.amount,
            date:transaccion.date,
            transactionType:transaccion.transactionType
        }
        const result = fetch(`${url}/transaction/${transaccion.id}`,{
            method:"PUT",
            body:{
                updateTransaccion
            }
        })
        if(result.status)
        dispatch(updateTransaccion(transaccion))
    }
}

