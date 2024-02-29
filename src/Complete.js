import React from 'react';
import { useState } from 'react'; 
import Login from './Login';
import Register from './Register';

function Complete(){
    const [showLogin,setShowLogin] = useState(true);
    const handleLinkClick = () =>{
        setShowLogin(!showLogin);
    }
    return(
        <>
          {showLogin ? (
            <Login onSignUpClick = {handleLinkClick} />
          ) : (
            <Register onLoginClick = {handleLinkClick} />
          )}
        </>
    );
}

export default Complete;