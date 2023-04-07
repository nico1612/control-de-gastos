import { createSlice } from '@reduxjs/toolkit';

export const TransaccionSlice = createSlice({
    name: 'Transaccion',
    initialState: {
        isSaving: false,
        messageSaved: '',
        Transacciones: [],
        active: null,
        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 1234567,
        //     imageUrls: [], // https://foto1.jpg, https://foto2.jpg, https://foto3.jpg
        // }
    },
    reducers: {

        savingNewTransaccion: ( state ) => {
            state.isSaving = true;
        },
        
        addNewEmptyTransaccion: (state, action ) => {
            state.Transacciones.push( action.payload );
            state.isSaving = false;
        },

        setActiveTransaccion: (state, action ) => {
            state.active = action.payload;
        },

        setTransacciones: (state, action ) => {
            state.Transacciones=action.payload;
        },

        setSaving: (state ) => {
            state.isSaving
            state.messageSaved=''
        },

        updateTransaccion: (state, action ) => { 
            state.isSaving=false;
            state.Transacciones=state.Transacciones.map(Transaccion=>{

                if(Transaccion.id===action.payload.id){
                    return action.payload
                }
                return note
            })

            state.messageSaved=`${action.payload.title}, actualizada correctamente`
        },
        
       
        clearTransaccionLogout: (state) => {
            state.isSaving=false;
            state.messageSaved='';
            state.Transacciones=[];
            state.active=null;
        },

        deleteTransaccionById: (state, action ) => {
            state.active=null
            state.Transacciones=state.Transacciones.filter(Transaccion=>Transaccion.id!==action.payload)
        },
    }
});

// Action creators are generated for each case reducer function
export const { 
    addNewEmptyTransaccion,
    clearTransaccionLogout,
    deleteTransaccionById, 
    savingNewTransaccion,
    setActiveTransaccion,
    setTransacciones,
    setSaving,
    updateTransaccion,
} = TransaccionSlice.actions;
