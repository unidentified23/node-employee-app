import './App.css';
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/Login';
import {Link, useNavigate} from "react-router-dom";

function App() {
return(
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<SignIn/>} />
      <Route path='/Home' element={<Home/>} />
      <Route path='/SignUp' element={<SignUp/>} />
     </Routes>
     </BrowserRouter>

    </div>
  )
} export default App;
