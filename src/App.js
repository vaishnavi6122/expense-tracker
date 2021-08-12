import logo from './logo.svg';
import './App.css';
import SignUp from './component/signup';
import { AuthProvider } from './context/Authcontext';
import Header from './component/header'
import Balanced from './component/balanced'
import Income from './component/income'
import TrasactionList from './component/transactionList'
import Addtransaction from './component/addtransaction'
import { GlobalProvider  } from './contextnew/globalstate';

// function App() {
//   return (
//     <AuthProvider>
//       <SignUp/>
//     </AuthProvider>
  
//   );
// }
function App() {
  return (
    <GlobalProvider>
    <Header />
   <div className='container'>
     <Balanced  className="balanced" />
     <Income/>
     <TrasactionList/>
     <Addtransaction  className='header' />
   </div>

</GlobalProvider>
  
  );
}

export default App;
