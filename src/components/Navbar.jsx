import React, { useState } from 'react'

import '../styles/navbar.css';
import { selectSignedIn, setIsSignedIn, setUserData, setSearchInput } from '../features/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar } from '@material-ui/core';
import { selectuserData } from './../features/userSlice';
import { GoogleLogout } from 'react-google-login';

const Navbar = () => {

    const [inputValue, setInputValue] = useState('tech');
    const isSignedIn = useSelector(selectSignedIn);
    const userData = useSelector(selectuserData);
    const dispatch = useDispatch();
    
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(setSearchInput(inputValue))
     };

    const logout = (resp) => {
        dispatch(setIsSignedIn(false))
        dispatch(setUserData(null))
     };
    
    return (
        <div className="navbar">
            <h1 className="navbar__header">BlogMania 💬</h1>
            {isSignedIn && (
                <div className="blog__search">
                    <input
                        className="search"
                        placholder="Search for a blog"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button
                        className="submit"
                        onClick={handleClick}
                    > Search </button>
                </div>
            )}

            {
                isSignedIn ?
                    <div className="navbar__user__data">
                        <Avatar className="user" src={userData?.imageUrl} alt={userData?.name} />
                        <h1 className="signedIn">{userData?.givenName}</h1>
                        <GoogleLogout
                            clientId="718405019783-dgumddv9sbgi8dcpl26c3v4rgjjdmj31.apps.googleusercontent.com"
                            render={(renderProps) => (
                                <button
                                    
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                    className="logout__button"
                                >Logout </button>
                            )}
                            onLogoutSuccess={logout}
                        />
                    </div>
                    :
                    <h1 className="notSignedIn"> User not available 😞</h1>

            }

        </div>
    )
}

export default Navbar
