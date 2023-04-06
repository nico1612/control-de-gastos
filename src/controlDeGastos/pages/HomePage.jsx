import { useEffect } from "react"
import { Link, Navigate } from "react-router-dom"
import { Navbar } from "../components"
import { useDispatch } from "react-redux"


export const HomePage=()=>{

    const dispatch =useDispatch()

    dispatch()
    return(

        
        <>

        <Navbar/>

        
        
        </>


        
    )
}