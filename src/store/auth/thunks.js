import { clearTransaccionLogout } from "../transacciones/transaccionesSlice";
import { checkingCredentials, login,logout } from "./authSlice";

const url=' http://54.242.99.47:3001'

export const startLogin=({email,password})=>{
    return async(dispatch)=>{

        dispatch( checkingCredentials() );

        const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({"eMail":email,"password":password})
        };
        
        const result=await fetch(`${url}/user/login`, options)
        if(result.status){
            const {body}=await result.json()
            //console.log(body)
            dispatch( login( body ));
        }
        else{
            dispatch(logout(result.status))
        }
        console.log(result)

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
        console.log(data)
    
        
        if(data.ok){dispatch( startLogin( {email,password} ));}
        else{logout(data.ok)}

    }
}

export const startLogout=()=>{
    return (dispatch)=>{

        dispatch(clearTransaccionLogout())
        dispatch(logout())
        
    }

}