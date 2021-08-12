import React,{useContext} from 'react';
import { GlobalContext } from '../contextnew/globalstate';
import '../App.css'



export default function Header() {  
    const {namee}=useContext(GlobalContext);
        return ( 
            <>
            <h3 className="header"  >

            Expense Tracker
            </h3>
            <h3 className='name'>Vaishnavi</h3>
            </>
         );
   
}
 
