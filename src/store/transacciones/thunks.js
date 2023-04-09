import { deleteTransaccionById, setTransacciones } from "./transaccionesSlice"

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
            
            dispatch(setTransacciones(transacciones.json()))
        }

    }
}

export const startEliminar=()=>{

    return async(dispatch)=>{
        const {uid} = getState().auth;
        const {active:transaccion} = getState().transacciones

        const formData = new FormData();
        //formData.append('first_name', profile.firstName);
        //formData.append('last_name', profile.lastName);
        //formData.append('email', profile.email);

        const result=await fetch(`${url}/transaction/${transaccion.id}`, {
            method: 'DELETE',
            body: formData
        })
        const data=result.json()
        if(data.ok){
            dispatch(deleteTransaccionById(transaccion.id))
        }
        

    }


}