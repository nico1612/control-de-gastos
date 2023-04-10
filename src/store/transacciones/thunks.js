import { deleteTransaccionById, setTenTransacciones, setTransacciones } from "./transaccionesSlice"

const url= 'http://54.242.99.47:3001'

export const startGettingTransacciones=()=>{
    
    return async (dispatch,getState)=>{


        const transacciones= await fetch(`${url}/`)
        console.log(transacciones)

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

export const startingUpdating=()=>{

    return async(dispatch)=>{

        const {token} = getState().auth;
        const {active:transaccion} = getState().journal

        const docRef = fetch(`${url}/transaction/${transaccion.id}`,)
        await deleteDoc(docRef)

        dispatch(deleteNoteById(note.id))
    }
}