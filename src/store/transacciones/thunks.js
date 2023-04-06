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
        const result=await fetch("http://54.242.99.47:3001/user/login", options)
        const {body}=await result.json()
        dispatch( login( body ));
        console.log(body)

    }

    
}