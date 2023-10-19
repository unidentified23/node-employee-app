import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [Email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const navigate = useNavigate();

    const handleregistration =(e)=> {
      e.preventDefault();
      navigate('/Home');
    }

  return (
    <div>SignIn
        <form onSubmit={handleregistration}>
           <input
            value={name}
            type="text"
            name="name"
            onChange={(e) =>setName(e.target.value)}
            placeholder="Enter name"
          />
          <input
            value={surname}
            type="text"
            name="surname"
            onChange={(e) =>setSurname(e.target.value)}
            placeholder="Enter surname"
          />
          <input
            value={Email}
            type="text"
            name="email"
            onChange={(e) =>setEmail(e.target.value)}
            placeholder="Enter Email"
          />
        
          <input
            value={password}
            type="text"
            name="phonenumber"
            onChange={(e) =>setPassword(e.target.value)}
            placeholder="Enter Phone number"
          />
          <input
            value={phonenumber}
            type="text"
            name="employeeposition"
            onChange={(e) =>setPhonenumber(e.target.value)}
            placeholder="Enter Employee position"
          />
          <button type='submit'>Register</button>
          </form>

        
    </div>
  )
}

export default SignUp