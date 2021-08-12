import React, { useContext } from 'react';

//pulling global providrs data
import { GlobalContext } from '../contextnew/globalstate';
//can pulled any data from globalcontext using usecontext hooks

import '../App.css'
import Transaction  from './transaction';

export default function Income() {
    const {transactions}=useContext(GlobalContext);
    
        return ( 
            <>
            <h3>History</h3>
            <ul id='list'  className='list header' >
            {transactions.map(transaction=>{
               return(<Transaction key={transaction.id} data={transaction} />) 
            })}
            </ul>
            </>
         );
   
}