import React , { useContext } from 'react';
import '../App.css'
import { GlobalContext } from '../contextnew/globalstate';

export default function Income() {
    const {transactions}=useContext(GlobalContext); 
   
  
    const income=transactions.reduce(function(result,transaction){
        if(transaction.amount>0){
            return result+transaction.amount;
        }
        return result;
    },0).toFixed(2);

    const expense=transactions.reduce(function(result,transaction){
        if(transaction.amount<0){
            return result+transaction.amount;
        }
        return result;
    },0).toFixed(2);
  
        return ( 
            <>
            <div className='header'>
                <div>
                <h4>Income</h4>
                    <p id='moneyplus' className='moneyplus'>+${income} </p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p id='moneyminus' className='moneyminus'>-${expense} </p>
                </div>
            </div>
            </>
         );
   
}