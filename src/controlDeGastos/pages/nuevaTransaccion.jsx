import { useDispatch, useSelector } from "react-redux"
import { Navbar } from "../components"
import {  createNewTransaccion, startingUpdating } from "../../store/transacciones/thunks"
import { useForm } from "../../hooks/useForm"
import { useEffect } from "react"

let formData
export const NuevaTransaccion=()=>{
    const dispatch =useDispatch()
    const {active:transacion} =useSelector(state=>state.transaciones)
    const {userId} =useSelector(state=>state.auth)

    useEffect(()=>{
        formData={
            userId:userId,
            concept:transacion.concept,
            category:transacion.category,
            amount:transacion.amount,
            date:new Date().toJSON(),
            transactionType:transacion.transactionType
        }
    },[])
    const {
        concept,
        category,
        amount,
        date,
        transactionType,
        onInputChange}= useForm(formData)

   
    const onSubmit=(event)=>{
        event.preventDefault()
        dispatch(createNewTransaccion({
        transactionType,
        date,
        amount,
        concept,
        category,
        userId}));
    }

    return(
        <>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <form onSubmit={onSubmit}>
                      
                        <br/>
                        <div>
                            <label className="form-label">concept </label>
                            <input type="text" className="form-control" name= "concept" value={concept} onChange={onInputChange}/>
                        </div>
                        <br/>
                        <div>category</div>
                        <div>
                            <div name="category" onChange={onInputChange}>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <input type="radio" value="Ingresos fijos" name="category"  checked={("Ingresos fijos"===category)} /> Ingresos fijos
                                    </li>
                                    <li className="list-group-item">
                                    <input type="radio" value="Ingresos ocasionales" name="category" checked={("Ingresos ocasionales"===category)} /> Ingresos ocasionales
                                    </li>
                                    <li className="list-group-item">
                                        <input type="radio" value="Viáticos" name="category" checked={("Viáticos"===category)} />Viáticos
                                    </li>
                                    <li className="list-group-item">
                                        <input type="radio" value="Alimentos y bebidas" name="category" checked={("Alimentos y bebidas"===category)} /> Alimentos y bebidas
                                    </li>
                                    <li className="list-group-item">
                                        <input type="radio" value="Víveres" name="category" checked={("Víveres"===category)} /> Víveres
                                    </li>
                                    <li className="list-group-item">
                                        <input type="radio" value="Salidas" name="category" checked={("Salidas"===category)} /> Salidas
                                    </li>
                                </ul>
                            </div>                        
                        </div>
                        <br/>
                        <div>
                            <label className="form-label">amount </label>
                            <input type="text" className="form-control" name= "amount" value={amount} onChange={onInputChange}/>
                        </div>
                        <br></br>
                        <div>transactionType</div>
                        <div name="transactionType" onChange={onInputChange}>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <input type="radio" value="Ingresos" name="transactionType"  checked={("Ingresos"===transactionType)} /> Ingresos 
                                </li>
                                <li className="list-group-item">
                                    <input type="radio" value="Egresos" name="transactionType" checked={("Egresos"===transactionType)} /> Egresos
                                </li>
                            </ul>
                        </div>
                        <br></br>
                        <button type="button" className="btn btn-success" onClick={onSubmit}>
                            crear
                        </button>
                    </form>
                </div>
            </div>
        </>
        
    )
}