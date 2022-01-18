import React from 'react'
import './app.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './main/Main';
import Card from './card/Card';


const App = () => {
    return (
    <BrowserRouter>
        <div className="container">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/card" element={<Card />} />
                    
                {/* редирект при некорректном URL */}
                <Route path="*" element={<Main /> || <div>Page not found</div>} />
            </Routes>
        </div>
    </BrowserRouter>
    )
}

export default App
