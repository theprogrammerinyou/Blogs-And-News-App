import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Blogs from './components/Blogs';

import './styles/app.css'
import { useSelector } from 'react-redux';
import { selectSignedIn } from './features/userSlice';

const App = () => {
    
    const isSignedIn = useSelector(selectSignedIn);

    return (
        <div>
            <Navbar />
            <Home />
            {isSignedIn && <Blogs />}
        </div>
    )
}

export default App
