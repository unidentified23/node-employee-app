import React from 'react';
import { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";


function Login() {
    const [Email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const HandleLogin =(e)=> {
    e.preventDefault();
    navigate('/Home')
    };
  return (
    <div>SignUp
           <form onSubmit={HandleLogin}>
           <input
            value={Email}
            type="text"
            name="name"
            onChange={(e) =>setEmail(e.target.value)}
            placeholder="Enter name"
          />
          <input
            value={password}
            type="text"
            name="surname"
            onChange={(e) =>setPassword(e.target.value)}
            placeholder="Enter surname"
          />
          <button type='submit'>login</button>
          </form>
          <text>
            Don't have an account?<Link to='/SignUp'>sign up</Link>
          </text>
    </div>
  )
}

export default Login