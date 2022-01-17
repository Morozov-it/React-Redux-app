import React from 'react'
import './app.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './main/Main';


const App = () => {
    return (
    <BrowserRouter>
        <div className="container">
            <Routes>
                <Route path="/" element={<Main />} />
                    
            </Routes>
        </div>
    </BrowserRouter>
    )
}

export default App
