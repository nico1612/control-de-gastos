import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
    name: 'new transaccion',
    initialState: {
        isSaving: false,
        messageSaved: '',
        Categories: [],
        transactionTypes:[],
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
        
        setCategories: (state, action ) => {
            state.Categories=action.payload
        },

        setTransactionTypes: (state, action ) => {
            state.transactionTypes=action.payload;
        },
        

        setSaving: (state ) => {
            state.isSaving
            state.messageSaved=''
        },

        clearTransaccionLogout: (state) => {
            state.isSaving=false;
            state.messageSaved='';
            state.transactionTypes=[];
            state.categories= [];
            state.active=null;
        },

    }
});

// Action creators are generated for each case reducer function
export const { 
    setCategories,
    setTransactionTypes,
    setSaving,
    clearTransaccionLogout
} = categoriesSlice.actions;
