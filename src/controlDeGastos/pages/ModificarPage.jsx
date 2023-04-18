import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { categoryId,transacionId} from "../helpers"
import {  startingUpdating } from "../../store/transacciones/thunks"
import { useForm } from "../../hooks"
import { Button } from "../components"

let formData
export const ModificarPage=()=>{
    const dispatch =useDispatch()
    const navigate=useNavigate()
    const {active:Transaction,Categories,TransactionTypes} =useSelector(state=>state.transaciones)

    useEffect(()=>{
        formData={
            Id:Transaction.id,
            User:Transaction.user,
            Concept:Transaction.concept,
            Category:Transaction.category,
            Amount:Transaction.amount,
            Date:Transaction.date,
            TransactionType:Transaction.transactionType
        }
    },[])

    const {Id,
        User,
        Concept,
        Category,
        Amount,
        Date,
        TransactionType,
        onInputChange}= useForm(formData)

   
    const onSubmit=(event)=>{
        event.preventDefault()

        const TransactionTypeId =transacionId({TransactionType,TransactionTypes})
        const CategoryId=categoryId({Category, Categories})
        const Datas={
            TransactionTypeId,
            Date,
            Amount,
            Concept,
            CategoryId,
        }
        const TransaccionUpdate={
            Id,
            User,
            Concept,
            Category,
            Amount,
            Date,
            TransactionType,  
        }
        dispatch(startingUpdating({Id,Datas,TransaccionUpdate}));
        navigate(-1)
    }

    return(
        <>
            <div className="container">
                <div className="row">
                    <form onSubmit={onSubmit}>
                        <div>Id: {Id}</div>
                        <br/>
                        <div>User: {User}</div>
                        <br/>
                        <div>
                            <label className="form-label">Concepto </label>
                            <input type="text" className="form-control" name= "Concept" value={Concept} onChange={onInputChange}/>
                        </div>
                        <br/>
                        <div>Categoria</div>
                        <div>
                            <div name="category" onChange={onInputChange}>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <input type="radio" value="Ingresos fijos" name="Category"  checked={("Ingresos fijos"===Category)} /> Ingresos fijos
                                    </li>
                                    <li className="list-group-item">
                                    <input type="radio" value="Ingresos ocasionales" name="Category" checked={("Ingresos ocasionales"===Category)} /> Ingresos ocasionales
                                    </li>
                                    <li className="list-group-item">
                                        <input type="radio" value="Viáticos" name="Category" checked={("Viáticos"===Category)} />Viáticos
                                    </li>
                                    <li className="list-group-item">
                                        <input type="radio" value="Alimentos y bebidas" name="Category" checked={("Alimentos y bebidas"===Category)} /> Alimentos y bebidas
                                    </li>
                                    <li className="list-group-item">
                                        <input type="radio" value="Víveres" name="Category" checked={("Víveres"===Category)} /> Víveres
                                    </li>
                                    <li className="list-group-item">
                                        <input type="radio" value="Salidas" name="Category" checked={("Salidas"===Category)} /> Salidas
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
                        <div>tipo de transacción</div>
                        <div name="transactionType" onChange={onInputChange}>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <input type="radio" value="Ingresos" name="TransactionType"  checked={("Ingresos"===TransactionType)} /> Ingresos
                                </li>
                                <li className="list-group-item">
                                <input type="radio" value="Egresos" name="TransactionType" checked={("Egresos"===TransactionType)} /> Egresos
                                </li>
                            </ul>
                        </div> 
                        <br/>
                        <Button Funcion={onSubmit} Name={'modificar'}/>
                        {/*<button type="button" className="btn btn-success" onClick={onSubmit}>
                            modificar
                        </button>*/}
                    </form>
                </div>
            </div>
        </>
    )
}