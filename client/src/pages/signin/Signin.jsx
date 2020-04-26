import React from 'react'
import './Signin.css'
import { GoogleLogin } from 'react-google-login'
import FacebookLogin from 'react-facebook-login'

const Signin = ({ onGoogleSignInSuccess, onGoogleSignInFailure, onFacebookSignInSuccess, onFacebookSignInFailure }) => {
  return (
    <div id='signin'>
        <header>
            <h2>Signin</h2>
        </header>

      <div className='providers'>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_ID}
          onSuccess={onGoogleSignInSuccess}
          onFailure={onGoogleSignInFailure}
          buttonText='Google Login'
          cookiePolicy={'single_host_origin'} />

        <FacebookLogin
          appId={process.env.REACT_APP_FACEBOOK_ID}
          fields='name,email,picture'
          icon='fa-facebook'
          textButton='Facebook Login'
          cssClass='facebook-button'
          callback={onFacebookSignInSuccess}
          onFailure={onFacebookSignInFailure} />
      </div>
    </div>
  )
}

export default Signin
