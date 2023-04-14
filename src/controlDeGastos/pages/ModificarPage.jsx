import { useDispatch, useSelector } from "react-redux"
import {  startingUpdating } from "../../store/transacciones/thunks"
import { useForm } from "../../hooks/useForm"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

let formData
export const ModificarPage=()=>{
    const dispatch =useDispatch()
    const navigate=useNavigate()
    const {active:transacion,Categories,TransactionTypes} =useSelector(state=>state.transaciones)

    useEffect(()=>{
        formData={
            id:transacion.id,
            user:transacion.user,
            concept:transacion.concept,
            category:transacion.category,
            amount:transacion.amount,
            date:transacion.date,
            transactionType:transacion.transactionType
        }
    },[])

    const transacionId=()=>{
        let id
        TransactionTypes.map(TransactionTyp=>{
            if(TransactionTyp.name===transactionType){

                id= TransactionTyp.id
            }
        })
        return id
    }

    const categoryid=(category)=>{
        let id
         Categories.map(categori=>{
            if(categori.name===category){
                id= categori.id
            }
        })
        return id
    }
    const {id,
        user,
        concept,
        category,
        amount,
        date,
        transactionType,
        onInputChange}= useForm(formData)

   
    const onSubmit=(event)=>{
        event.preventDefault()

        const transactionTypeId =transacionId()
        const categoryId=categoryid(category)
        dispatch(startingUpdating({id,
        user,
        concept,
        category,
        categoryId,
        amount,
        date, 
        transactionTypeId,
        transactionType}));
        navigate(-1)
    }

    return(
        <>
            <div className="container">
                <div className="row">
                    <form onSubmit={onSubmit}>
                        <div>id:{id}</div>
                        <br/>
                        <div>user:{user}</div>
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
                            modificar
                        </button>
                    </form>
                </div>
            </div>
        </>
        
    )
}