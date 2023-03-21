import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [loginUser, setLoginUser] = useState({});

  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
        <Route exact path='/' element={
            loginUser && loginUser._id ? <Homepage setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>
          }/>
        <Route exact path='/login' element={<Login setLoginUser={setLoginUser}/>}/>
        <Route exact path='/register' element={<Register/>}/>
       </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
