import { categoryId } from "./categoryId";
import { transacionId } from "./transaccionId";

export const dataFormat=({Concept, Category, Amount, dates, TransactionType,userId,Categories,TransactionTypes})=>{

    dates.setHours(dates.getHours()-6)
    const TransactionTypeId =transacionId({TransactionType,TransactionTypes})
    const CategoryId= categoryId({Category, Categories});
    const data={
        userId,
        Concept,
        CategoryId,
        Amount,
        date:new Date(dates).toJSON(),
        TransactionTypeId,
    }

    return {
        data
    }
}