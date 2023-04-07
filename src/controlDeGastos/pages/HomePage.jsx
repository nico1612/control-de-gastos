import { useEffect } from "react"
import { Link, Navigate } from "react-router-dom"
import { Navbar } from "../components"
import { useDispatch, useSelector } from "react-redux"
import { TransaccionSlice } from "../../store/transacciones/transaccionesSlice"
import { startGettingTransacciones } from "../../store/transacciones/thunks"


export const HomePage=()=>{

    const dispatch =useDispatch()

    const {transacciones} =useSelector(state=>state.transacciones)

    useEffect(()=>{
        dispatch(startGettingTransacciones())
    },[transacciones])
    
    return(

        
        <>

        <Navbar/>

        
        {
            transacciones.map(transaccion=>( 
                <TransaccionSlice key={transaccion.id} {...transaccion}/>
            ))
        }
        <button>
            <Link to={"/movimientos"}>
                más..
            </Link>
        </button> 
        </>


        
    )
}