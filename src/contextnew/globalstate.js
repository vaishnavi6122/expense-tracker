import React, { createContext, useReducer } from 'react';
import AppReducer from './Appreducer';
//initial state
const initialstate={
    name:"vaishnavi",
    transactions:[
        {id:1,text:'flower',amount:20},
        {id:2,text:'vegies',amount:-500},
        {id:3,text:'grocery',amount:200},
        {id:4,text:'crocery',amount:-50},

    ]
}

//create global conteaxt
export const GlobalContext=createContext(initialstate);

//crate provider component
export const GlobalProvider=({children})=>{
 //reducer
 const [state,dispatch]=useReducer(AppReducer,initialstate);

//actions
function deleteTransaction(id){
    dispatch({
        type:'DELETE_TRANSACTION',
        payload:id//data we want to send
    });
}


function addTransaction(transaction){
    console.log("heelo",transaction)
    dispatch({
        type:'ADD_TRANSACTION',
        payload:transaction
    })
}


 return(<GlobalContext.Provider value={{
     transactions:state.transactions,
     namee:state.name,
        deleteTransaction,
        addTransaction
        }
 } >
     {children}
 </GlobalContext.Provider>)

}