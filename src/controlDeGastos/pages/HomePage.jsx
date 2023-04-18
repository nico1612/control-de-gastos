import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { startGettingTransacciones } from "../../store/transacciones/thunks"
import {TransaccionListHome, Button } from "../components"

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
            <div className="text-center">monto actual: {actualBalance}</div>
            <br/>
            <div className="text-center">
                <TransaccionListHome/>
            </div>
            <br/>

            <div class="container bg-light">
                <div class="col-md-12 text-center">
                    <Button Funcion={Movimientos} Name={'todos los movimientos'} />
                </div>
            </div>
            
        </>
    )
}