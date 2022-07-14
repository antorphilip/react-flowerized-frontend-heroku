import React from 'react'
import  "./Login.css";

function Login() {
  return (
    <div className='Login-form'>
        <div className='head'>
        <h2>CUSTOMER LOG IN</h2>
        <p>IF YOU HAVE NOT CREATED AN ACCOUNT YET, THEN PLEASE SIGN UP FIRST</p>
            </div>
        

        <div className='login'>
            <label htmlFor='email'>Email:</label>
            <input type= "email" name="email" id="email"/>
        </div> 
        <div className='login'>
            <label htmlFor='password'>Password:</label>
            <input type= "password" name="password" id="password"/>
        </div> 
        <div>
            <input type= "submit" value="LOG IN"/>
            <input type= "submit" value="SIGN UP"/>
        </div> 
      
    </div>
  )
}

export default Login
