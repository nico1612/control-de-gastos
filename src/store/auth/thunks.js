import { checkingCredentials, login } from "./authSlice";

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
        //let config=
        const result=await fetch(`${url}/user/login`, options)
        const {body}=await result.json()
        dispatch( login( body ));
        console.log(body)

    }

    
}

export const startRegister=({email,surname,name,password})=>{
    
    return async(dispatch)=>{


        dispatch( checkingCredentials() );

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"name":name,"surname":surname,"eMail":email,"password":password})
        };
        const data=await fetch(`${url}/user/register`,config)
        console.log(data)
    
        
        //dispatch( login( email ));

    }
}