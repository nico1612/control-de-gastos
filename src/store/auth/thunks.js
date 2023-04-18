import { clearTransaccionLogout } from "../transacciones/transaccionesSlice";
import { checkingCredentials, login,logout, setError } from "./authSlice";

const url='http://54.221.175.120:3001'
const urls =import.meta.env.VITE_APP_IP

export const startLogin=({Email, Password})=>{
    return async(dispatch)=>{

        dispatch( checkingCredentials() );
        const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({"eMail":Email,"password":Password})
        };
        console.log(Email)
        const result=await fetch(`${url}/user/login`, options)
        console.log(result)
        if(result.ok){
            const {body}=await result.json()
            dispatch( login( body ));
        }
        else{
            dispatch(logout(result.status))
            dispatch(setError())
        }

    }

    
}

export const startRegister=({email,surname,name,password})=>{
    
    return async(dispatch)=>{


        dispatch( checkingCredentials() );

        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"name":name,"surname":surname,"eMail":email,"password":password})
        };
        const data=await fetch(`${url}/user/register`,config)
    
        
        if(data.ok){dispatch( startLogin( {email,password} ));}
        else{
            dispatch(logout(data.ok))
            dispatch(setError())

        }

    }
}

export const startLogout=()=>{
    return (dispatch)=>{

        dispatch(clearTransaccionLogout())
        dispatch(logout())
        
    }

}