import React, {useEffect} from 'react';
import './main.css'
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from '../../actions/repos';
import Repo from './../repo/Repo'


const Main = () => {
    //хук для вызова метода dispatch в redux-store
    const dispatch = useDispatch();

    //хук для получения данных из store
    const repos = useSelector(state => state.repos.items);
    const isFetching = useSelector(state => state.repos.isFetching);
    
    //хук для выполнения сторонних эффектов (асинхронные запросы)
    useEffect(() => {
        dispatch(getRepos())
    }, [])
    
    //функция для вызова конкретного action
    function onCount() {
        dispatch()
    };

    return (
        <div className='main'>
            <div className="search">
                <input type='text' placeholder='search...' className='search-input' />
                <button className='search-btn'>search</button>
            </div>
            {!isFetching ?
                repos.map(repo => <Repo repo={repo} key={repo.id} />)
                :   
                <div className='fetching'></div>
            }
        </div>
    )
}

export default Main
