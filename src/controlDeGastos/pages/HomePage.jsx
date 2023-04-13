import { useEffect } from "react"
import { Navbar, TransaccionList } from "../components"
import { useDispatch, useSelector } from "react-redux"
import { startGettingTransacciones } from "../../store/transacciones/thunks"
import { useNavigate } from "react-router-dom"

export const HomePage=()=>{

    const dispatch =useDispatch()
    const navigate=useNavigate()

    const {actualBalance} =useSelector(state=>state.transaciones)

    useEffect(()=>{
        dispatch(startGettingTransacciones())
    },[])

    const Movimientos=()=>{
        navigate("/movimientos")
    }
    return(
        <>
            <Navbar/>
            <br/>
            <div>monto actual: {actualBalance}</div>
            <br/>
            <TransaccionList/>
            <br/>
            <button onClick={Movimientos}>
            mas...
            </button> 
            
        </>
    )
}