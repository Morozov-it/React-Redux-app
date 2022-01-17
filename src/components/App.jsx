import React from 'react'
import './app.css'
import { useDispatch, useSelector } from "react-redux";
import { setCount } from '../reducers/reposReducer';


const App = () => {
    //хук для вызова метода dispatch в redux-store
    const dispatch = useDispatch();

    //хук для получения данных из store
    const count = useSelector(state => state.repos.count);

    //функция для вызова конкретного action
    function onCount() {
        dispatch(setCount(1))
    };

    return (
        <div className='app'>
            <h1>React app</h1>
            <div>{ count }</div>
            <button onClick={ ()=>onCount() }>Count</button>
        </div>
    )
}

export default App
