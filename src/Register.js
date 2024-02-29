import React from 'react';
import {useForm} from 'react-hook-form';
import './Register.css'; 

function Register({onLoginClick}) {
  const {register,handleSubmit,formState: {errors}} = useForm();
  function onSubmit(data){
    localStorage.setItem(data.email, JSON.stringify({
      fname: data.fname,lname:data.lname, password: data.password
    }));
    console.log(JSON.parse(localStorage.getItem(data.email)))
  }
  return (
    <div className='container' id='registration' >
       <form className='form' onSubmit={handleSubmit(onSubmit)}  >
         <div className="regClass" >
   
      {/*left panel on the display for credentials*/}
          <div className='leftPanel'> 
              <h2>Student Details</h2>

                <input type='text' {...register('fname')} name='fname'  placeholder='First Name' />

                <input type='text' {...register('lname')}  name='lname' placeholder='Last Name'/>

                <input type='email' {...register('email')}  name='email' placeholder='Email:example@gmail.com' />

                <input type='number' name='number' placeholder='Phone Number' />

                <input type='password' {...register('password')}  name='password' placeholder='Password' />

          </div> 

         {/*right panel having school data*/}
          <div  className='rightPanel'>
              <h2>School Details</h2>
               <input type='text' name='school' placeholder='Programme School' />
             
               <input type='text'  name='department' placeholder='Department' />
            
               <input type='text'  name='course' placeholder='Course' />
             
               <input type='text'  name='regNo' placeholder='Registration number' />

               <input type='text'  name='course' placeholder='Year of Administration' />

              <p><input type ='checkbox' name='check' /> I agree with the terms and conditions</p>
              
          </div>
          <input type={'submit'} className='submitBtn'/> 
          <p>Already have an account? <a href='#' onClick={onLoginClick}>Back to Login</a></p>
        </div>
        
      </form>
     </div>
  );
}

export default Register;
