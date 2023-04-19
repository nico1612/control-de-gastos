import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"

import { startGettingTransaccionesAll } from "../../store/transacciones/thunks"
import { Button, TransaccionList } from "../components"
import { setActiveTransaccion } from "../../store/transacciones"
import { useNavigate } from "react-router-dom"

export const ListaCompletaMovimientosPage=()=>{

    const navigate = useNavigate();
    const dispatch =useDispatch()

    const {chance} =useSelector(state=>state.transaciones)
    const {userId} =useSelector(state=>state.auth)

    useEffect(()=>{
        dispatch(startGettingTransaccionesAll())
    },[chance])

    const CrearNueva=()=>{
        dispatch(setActiveTransaccion({
            userId:userId,
            concept:"",
            category:"Ingresos fijos",
            amount:0,
            date:"",
            transactionType:"Ingresos"
        }))
        navigate("/nuevaTransaccion")
    }

    return(
        <>
            <br/>
            <TransaccionList/>
            <br/>
            <div class="container bg-light">
                <div class="col-md-12 text-center">
                    <Button Funcion={CrearNueva} Name={'crear nueva transaccion'}/>
                </div>
            </div>
       </>
    )
}