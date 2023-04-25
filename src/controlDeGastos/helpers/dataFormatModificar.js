import { categoryId } from "./categoryId"
import { transacionId } from "./transaccionId"

export const dataFormatModificar=({Id, User, Concept, Category, Amount, date, TransactionType, TransactionTypes, Categories})=>{

    const TransactionTypeId =transacionId({TransactionType,TransactionTypes})
    const CategoryId=categoryId({Category, Categories})

    const Datas={
        TransactionTypeId,
        date,
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
        date,
        TransactionType,  
    }

    return{
        Datas,
        TransaccionUpdate
    }

}