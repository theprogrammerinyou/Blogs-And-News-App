import React from 'react'

import { useSelector } from 'react-redux'
import { selectSignedIn } from '../features/userSlice'
import Login from './Login'

const Home = () => {

    const isSignedIn = useSelector(selectSignedIn)


    return (
        <div className="home__page" style={{ display: isSignedIn ? "none" : "black" }}>
            {!isSignedIn ? <Login /> : "" }
        </div>
    )
}

export default Home
