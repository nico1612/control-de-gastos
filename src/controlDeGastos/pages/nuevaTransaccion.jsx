import { useFormAction } from "react-router-dom"
import { Navbar } from "../components"


export const NuevaTransaccion=()=>{

    const {id,user,concept,category,amount,date,transactionType,onInputChange}= useFormAction(transacion)
    const onSubmit=()=>{}

    return(
        <>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <form onSubmit={onSubmit}>
                        <div className="mb-6">
                            <label className="form-label"> {concept}</label>
                            <input type="email" className="form-control" name= "email" value={concept} onChange={onInputChange}>{concept}</input>
                        </div>
                        <div className="mb-6">
                            <label className="form-label"> {category}</label>
                            <input type="number" className="form-control" name= "category" value={category} onChange={onInputChange}/>
                        </div>
                        
                        <div className="mb-6">
                            <label className="form-label"> {amount}</label>
                            <input type="number" className="form-control" name= "amount" value={amount} onChange={onInputChange}/>
                        </div>
                        <div className="mb-6">
                            <label className="form-label"> {transactionType}</label>
                            <input type="number" className="form-control" name= "transactionType" value={amount} onChange={onInputChange}/>
                        </div>
                        <br/>
                        <button type="button" className="btn btn-primary" onClick={onSubmit}>crear</button>
                    </form>
                </div>
            </div>

        </>
        
    )
}