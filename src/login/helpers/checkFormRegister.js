
export const checkFormRegister=({ErrorName,Email,Password,Name,Surname,setErrorMail,setErrorName,setErrorPassword,setErrorSurname})=>{
    let ok=true;
    if (Email===''){
        setErrorMail(true)
        ok=false
    }
    else{
        setErrorMail(false)
    }
    if(Password===''){
        setErrorPassword(true)
        ok=false
    }
    else{
        setErrorPassword(false)
    }
    if(Name===''){
        setErrorName(true)
        ok=false
    }
    else{
        setErrorName(false)
    }
    if(Surname===''){
        setErrorSurname(true)
        ok=false
    }
    else{
        setErrorSurname(false)
    }

    return ok
}