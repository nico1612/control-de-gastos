import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { startGettingTransaccionesAll,setActiveTransaccion } from "../../store"
import { Button, TransaccionList, TransaccionTable } from "../components"

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
            {/*<TransaccionTable/>*/}
            <br/>
            <div className="container bg-light">
                <div className="col-md-12 text-center">
                    <Button Funcion={CrearNueva} Name={'crear nueva transaccion'}/>
                </div>
            </div>
       </>
    )
}