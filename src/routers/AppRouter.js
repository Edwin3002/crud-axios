import React from 'react'
import {BrowserRouter as Router, 
    Routes,
    Route,
    Navigate} 
    from 'react-router-dom';
import { Form } from '../components/Form';
import { Navbar } from '../components/Navbar';

export const AppRouter = () => {
    return (
        <div>
            <Router>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<Form/>}/>
                    <Route path="/*" element={<Navigate to="/"/>}/>
                </Routes>
            </Router>
        </div>
    )
}
