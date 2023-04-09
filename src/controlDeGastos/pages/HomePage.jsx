import { useEffect } from "react"
import { Navbar, TransaccionCards } from "../components"
import { useDispatch, useSelector } from "react-redux"
import { startGettingTransacciones } from "../../store/transacciones/thunks"
import { useNavigate } from "react-router-dom"


export const HomePage=()=>{

    const dispatch =useDispatch()
    const navigate=useNavigate()

    const {transacciones} =useSelector(state=>state.transacciones)

    useEffect(()=>{
        dispatch(startGettingTransacciones())
    },[transacciones])
    const Movimientos=()=>{
        navigate("/movimientos")
    }
    return(

        
        <>

        <Navbar/>

        
        {
           
           transacciones.map(transaccion=>( 
               <TransaccionCards key={transaccion.id} transaccion={transaccion}/>
           ))
       }
        <button onClick={Movimientos}>
           mas...
        </button> 
        </>


        
    )
}