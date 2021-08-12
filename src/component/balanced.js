import React , { useContext } from 'react';
import '../App.css'
import { GlobalContext } from '../contextnew/globalstate';

export default function Income() {
    const {transactions}=useContext(GlobalContext); 
    const tot= transactions.reduce(function(result,transaction) {
        return result +transaction.amount ;
      }, 0);
   


    console.log(typeof(transactions.amount))  
        return ( 
            <>
            <div id='balanced'>
           <h4>Your Balance</h4>
           <h4 >${tot}</h4>

            </div>
            </>
         );  
}
