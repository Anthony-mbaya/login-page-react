import React from 'react';
import {useForm} from 'react-hook-form';
import './Register.css';  

function Login({onSignUpClick}){
    const {register,handleSubmit,formState:{errors},} = useForm();  
    function onSubmitFun(data){
        {/*userData retrieved from the key(data.email in the registartion form)*/}
        const userData = JSON.parse(localStorage.getItem(data.email)); 
        if(userData){
            if(userData.password === data.password){
                alert('You have successful logged in.');
            }else{
                alert('email or password not matching')
            }
        }else{
            alert('email or password not recorded')
        }
    };
    
    return( 
            <form onSubmit={handleSubmit(onSubmitFun)}>
                <div id='login'>
            <h1>Student Login Form</h1>
                <input type='email' id='email' placeholder='Enter email address' {...register('email')}/>
                <input type='password' id='password' placeholder='Enter password' {...register('password')}/>
                <input type={'submit'} id='submit' />
                <p>Don't have an account? <a href='#' onClick={onSignUpClick}>Sign Up</a></p>
                </div>
            </form>  
    )
}

export default Login;