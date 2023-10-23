
import './App.css';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';


import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Profile from './components/Profile';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>
       <Router>
        <div className='App' > 
            <Navbar/>
         <Routes>
            <Route  path='/'  element={<HomePage/>} />
            <Route  path='/login' element={<Login/>} />
             <Route   path='/signup' element={<Signup/>}  />
             <Route   path='/profile' element={<Profile/>}  />

       </Routes>
             
        
          </div>
       

         
           
       </Router>

       <ToastContainer />


     </>
  );
}

export default App;
