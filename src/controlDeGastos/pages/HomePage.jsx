import { useEffect } from "react"
import { TransaccionList } from "../components"
import { useDispatch, useSelector } from "react-redux"
import { startGettingTransacciones } from "../../store/transacciones/thunks"
import { useNavigate } from "react-router-dom"
import { TransaccionListHome } from "../components/TransaccionListHome"

export const HomePage=()=>{

    const dispatch =useDispatch()
    const navigate=useNavigate()

    const {actualBalance,chance} =useSelector(state=>state.transaciones)

    useEffect(()=>{
        dispatch(startGettingTransacciones())
    },[chance])

    const Movimientos=()=>{
        navigate("/movimientos")
    }
    return(
        <>
            <br/>
            <div>monto actual: {actualBalance}</div>
            <br/>
            <TransaccionListHome/>
            <br/>
            <button onClick={Movimientos}>
            mas...
            </button> 
            
        </>
    )
}