import React, { useContext, useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import { GlobalContext } from '../contextnew/globalstate';
import '../App.css'



export default function Income() {  
    const {addTransaction,transactions}=useContext(GlobalContext);
    const [Text,settext]=useState('');
    const [Amount,setamount]=useState(0);

    function createtransaction(){
        console.log("hello1")
       const size=transactions.length;
        const obj={
            id:size+1,
            text:Text,
            amount:parseInt(Amount)
        }
        console.log("hello")
        addTransaction(obj);
    }

        return ( 
            <>
            <h3>Add new transaction</h3>
            <Form   >
        <Form.Group  id='text'>
<Form.Label >Text</Form.Label>
<Form.Control type ='text' value={Text} onChange={(e)=>settext(e.target.value)}  placeholder="Enter text..."/>
        </Form.Group>

        <Form.Group id='amount' >
<Form.Label>Amount (negative-expenses, positive-income) </Form.Label>
<Form.Control type ='number' value={Amount}   onChange={(e)=>setamount(e.target.value)}  placeholder="Enter Amount..." />
        </Form.Group>

        
        <Button onClick={createtransaction} className="btn">Add transaction</Button>
    </Form>
            </>
         );
   
}