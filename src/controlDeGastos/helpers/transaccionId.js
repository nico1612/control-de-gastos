
export const transacionId=({TransactionType,TransactionTypes})=>{

    let id

    TransactionTypes.map(Type=>{
        if(Type.name===TransactionType){

            id= Type.id
        }
    })

    return id
}