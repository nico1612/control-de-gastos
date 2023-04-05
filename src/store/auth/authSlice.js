import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    
    name: 'auth',
    
    initialState: {
        status: 'checking',//'checking', 'not-authenticated' , 'authenticated'
        email:null,
        errorMessage:null
    }, 

    reducers: {
        login:(state,{payload})=>{
            state.status = 'authenticated',
            state.email = payload.email;
        },
        logout:(state,{payload})=>{
            state.status='not-authenticated';
            state.email=null;
            state.errorMessage=payload?.errorMessage;
        },
        checkingCredentials:(state)=>{
            state.status='checking'
        }
    }
});

export const { login,logout,checkingCredentials } = authSlice.actions;