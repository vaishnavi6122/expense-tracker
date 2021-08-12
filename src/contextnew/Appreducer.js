//specify the state changes and respond to events or actions

export default(state,action)=>{
    switch(action.type){
case 'DELETE_TRANSACTION':
    return{
        ...state, //since state is return state will get update everywhere
        transactions:state.transactions.filter(transaction=>transaction.id!==action.payload)
    }

case 'ADD_TRANSACTION':
    return{
        ...state,
        transactions:[action.payload,...state.transactions]
        
    }    

        default:
            return state;
    }
}