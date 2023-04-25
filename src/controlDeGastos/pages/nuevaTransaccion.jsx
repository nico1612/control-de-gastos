import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { dataFormat } from "../helpers"
import { createNewTransaccion, startGettingTransaccionesAll } from "../../store"
import { useForm } from "../../hooks"

let formData
export const NuevaTransaccion=()=>{

    const dispatch =useDispatch()
    const navigate =useNavigate()

    const {userId} =useSelector(state=>state.auth)
    const {active:Transaction,Categories,TransactionTypes} =useSelector(state=>state.transaciones)

    useEffect(()=>{

        formData={
            UserId:userId,
            Concept:Transaction.concept,
            Category:Transaction.category,
            Amount:Transaction.amount,
            dates:new Date(),
            TransactionType:Transaction.transactionType
        }

        dispatch(startGettingTransaccionesAll())
    },[])

    const {
        Concept,
        Category,
        Amount,
        dates,
        TransactionType,
        onInputChange
    }= useForm(formData)

    const onSubmit=(event)=>{
        event.preventDefault()

        const {data} =dataFormat({Concept, Category, Amount, dates, TransactionType,userId,Categories,TransactionTypes})

        dispatch(createNewTransaccion({data}))
        navigate('/movimientos')
    }

    return(
        <>
            <div className="container">
                <div className="row">
                    <form onSubmit={onSubmit}>
                      
                        <br/>
                        <div>
                            <label className="form-label">concepto </label>
                            <input type="text" className="form-control" name= "Concept" value={Concept} onChange={onInputChange}/>
                        </div>
                        <br/>
                        <div>categoria</div>
                        <div>
                            <div name="category" onChange={onInputChange}>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <input type="radio" value="Ingresos fijos" name="Category"/> Ingresos fijos
                                    </li>
                                    <li className="list-group-item">
                                    <input type="radio" value="Ingresos ocasionales" name="Category"/> Ingresos ocasionales
                                    </li>
                                    <li className="list-group-item">
                                        <input type="radio" value="Viáticos" name="Category"/>Viáticos
                                    </li>
                                    <li className="list-group-item">
                                        <input type="radio" value="Alimentos y bebidas" name="Category"/> Alimentos y bebidas
                                    </li>
                                    <li className="list-group-item">
                                        <input type="radio" value="Víveres" name="Category"/> Víveres
                                    </li>
                                    <li className="list-group-item">
                                        <input type="radio" value="Salidas" name="Category"/> Salidas
                                    </li>
                                </ul>
                            </div>                        
                        </div>
                        <br/>
                        <div>
                            <label className="form-label">monto </label>
                            <input type="text" className="form-control" name= "Amount" value={Amount} onChange={onInputChange}/>
                        </div>
                        <br></br>
                        <div>tipo de transaccion</div>

                        <div name="TransactionType" onChange={onInputChange}>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <input type="radio" value="Ingresos" name="TransactionType"/> Ingresos
                                </li>
                                <li className="list-group-item">
                                <input type="radio" value="Egresos" name="TransactionType"/> Egresos
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