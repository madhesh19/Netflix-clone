import React, { useState } from 'react'
import './LoginScreen.css'
import SignupScreen from './SignupScreen'

function LoginScreen() {
  const[signIn,setSignIn] = useState(false)
  return (
    <div className="loginscreen">
      <div className="loginscreen_background">
        <img 
         className='loginscreen_logo'
         src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
         alt=""
         />
         <button onClick={() => setSignIn(true)}
          className="loginscreen_button">
          Sign In
         </button>

         <div className="loginscreen-gradient"/>
      </div>

      <div className="loginscreen_body">
        {signIn ? (
          <SignupScreen />
        ): (
          <>
           <h1>Unlimited films, TV programmes and more.</h1>
           <h2>Watch anywhere. Cancel at any time.</h2>
           <h3>Ready to watch? Enter your email to create pr restart your membership.</h3>  

           <div className="loginscreen_input">
             <form>
               <input type="email" placeholder='Email Addres' />
               <button onClick={() => setSignIn(true)}    className='loginscreen-getstarted'>
                GET STARTED
               </button>
             </form>
           </div>      
          </>
        )}
        
      </div>
    </div>
  )
}

export default LoginScreen