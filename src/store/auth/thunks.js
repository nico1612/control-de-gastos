import { checkingCredentials, login } from "./authSlice";


export const startLoginWithEmailPassword=({email,password})=>{
    
    return async(dispatch)=>{

        dispatch( checkingCredentials() );

     
        dispatch( login( email ));

    }
}