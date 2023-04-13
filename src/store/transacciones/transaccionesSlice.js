import { createSlice } from '@reduxjs/toolkit';

export const transaccionSlice = createSlice({
    name: 'transaccion',
    initialState: {
        isSaving: false,
        messageSaved: '',
        Transacciones: [],
        Categories: [],
        TransactionTypes:[],
        actualBalance:0,
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
            state.Transacciones=action.payload.body;
        },

        setAllTransacciones:(state, action)=>{
            state.Transacciones=action.payload
        },

        setTenTransacciones:(state,action)=>{
            state.Transacciones=action.payload.lastTenTransactions;
            state.actualBalance=action.payload.actualBalance;
        },

        setCategories: (state, action ) => {
            console.log(action.payload)
            state.Categories=action.payload
        },

        setTransactionTypes: (state, action ) => {
            console.log(action.payload)
            state.TransactionTypes=action.payload;
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
            state.Transacciones=[],
            state.Categories=[],
            state.active=null;
        },

        deleteTransaccionById: (state, action ) => {
            state.active=null
            state.Transacciones=state.Transacciones.filter(Transaccion=>Transaccion.id!==action.payload)
        },
        findCategoryId:(state,{payload})=>{
            console.log(payload)
            const id= state.Categories.map(categorie=>{
                if(categorie.name===payload){
                    return categorie.id
                }
            })
            return id
        },
        findTransactionTypesId:(state,{payload})=>{
            const id= state.TransactionTypes.map(TransactionType=>{
                if(TransactionType.name===payload){
                    return TransactionType.id
                }
            })
            
            
            return id
        }

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
    findCategoryId,
    findTransactionTypesId
} = transaccionSlice.actions;
