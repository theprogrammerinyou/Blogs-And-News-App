import React from 'react'

import '../styles/login.css'
import GoogleLogin from 'react-google-login'
import { setIsSignedIn, setUserData } from '../features/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {

    const dispatch = useDispatch();
    const login = (resp) => {
        console.log(resp);
        dispatch(setIsSignedIn(true))
        dispatch(setUserData(resp.profileObj));
    }

    return (
        <div>
            <div className="login__message">
                <h2> 📘 </h2>
                <h1>A Reader's favorite place</h1>
                <p>
                    We provide high quality online resource for reading blogs. Just sign up and start reading some
                     quality blogs. 
                </p>
                <GoogleLogin
                    clientId={process.env.REACT_APP_CLIENT_ID}
                    render={(renderProps) => (
                        <button
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            className="login__button"
                        > Login With Google </button>
                    )}
                    onSuccess={login}
                    onFailure={login}
                    isSignedIn={true}
                    cookiePolicy={"single_host_origin"}
                />
            </div>
        </div>
    )
}

export default Login
