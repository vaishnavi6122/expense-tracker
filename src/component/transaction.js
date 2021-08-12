import React, { useContext } from 'react';
import '../App.css';
import { GlobalContext } from '../contextnew/globalstate';

export default function Transaction(props) {
    const {deleteTransaction}=useContext(GlobalContext)
    const {text,amount,id}=props.data;
    
    if(amount>0){
        return ( 
            <>
            
            <li className='btn-success'>
                   {text}  <span>$+{amount} </span><button onClick={()=>deleteTransaction(id)}  className='delete-btn'>x</button>
                </li>
            </>
         );
    }else{
        return ( 
            <>
            
            <li className='btn-error'>
                   {text}  <span>${amount} </span><button onClick={()=>deleteTransaction(id)}  className='delete-btn'>x</button>
                </li>
            </>
         );
    }
   
}