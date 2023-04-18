import { createSlice } from '@reduxjs/toolkit';

export const transaccionSlice = createSlice({
    name: 'transaccion',
    initialState: {
        isSaving: false,
        messageSaved: '',
        Transactions: [],
        Categories: [],
        TransactionTypes:[],
        actualBalance:0,
        active: null,
        change:true
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
            state.Transactions.push( action.payload );
            state.isSaving = false;
        },

        setActiveTransaccion: (state, action ) => {
            state.active = action.payload;
        },

        setTransacciones: (state, action ) => {
            state.Transactions=action.payload.body;
        },

        setAllTransacciones:(state, action)=>{
            state.Transactions=action.payload
        },

        setTenTransacciones:(state,action)=>{
            state.Transactions=action.payload.lastTenTransactions;
            state.actualBalance=action.payload.actualBalance;
        },

        setCategories: (state, action ) => {
            state.Categories=action.payload
        },

        setTransactionTypes: (state, action ) => {
            state.TransactionTypes=action.payload;
        },

        setSaving: (state ) => {
            state.isSaving
            state.messageSaved=''
        },

        updateTransaccion: (state, action ) => { 
            state.isSaving=false;
            state.Transactions=state.Transactions.map(Transaction=>{

                if(Transaction.id===action.payload.id){
                    return action.payload
                }
                return Transaction
            })

            state.messageSaved=`${action.payload.title}, actualizada correctamente`
        },
        
       
        clearTransaccionLogout: (state) => {
            state.isSaving=false;
            state.messageSaved='';
            state.Transactions=[];
            state.TransactionTypes=[],
            state.Categories=[],
            state.active=null;
        },

        deleteTransaccionById: (state, action ) => {
            state.active=null
            state.Transacciones=state.Transacciones.filter(Transaccion=>Transaccion.id!==action.payload)
            state.change=!state.change
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
    setTenTransacciones,
    setTransacciones,
    setSaving,
    updateTransaccion,
    setAllTransacciones,
    setCategories,
    setTransactionTypes,
} = transaccionSlice.actions;
