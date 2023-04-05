import { useEffect } from "react"
import { Link, Navigate } from "react-router-dom"


export const HomePage=()=>{

    useEffect(()=>{

    },[])


    return(
        <>

        <h1>hola mundo</h1>

        <Navigate to={"/movimientos"}>
            <button className="btn btn-primary"></button>
        </Navigate>
        </>


        
    )
}