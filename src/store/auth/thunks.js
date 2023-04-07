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

export const startRegister=({email,password})=>{
    
    return async(dispatch)=>{

        dispatch( checkingCredentials() );

        try{
            let config={
                method:'POST',
                header:{
                    'Accept':'Application/json',
                    'Content-Type':'Application/json'
                },
                body:JSON.stringify({"password":"Ni123456% ","eMail":"nico@gmail.com"})
            }
            const data=await fetch("http://54.242.99.47:3001//user/register",config)
            console.log(data)
        }
        catch{

        }
        
        
        //dispatch( login( email ));

    }
}