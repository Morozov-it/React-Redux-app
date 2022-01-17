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
            {repos.map(repo =>
                <Repo repo={repo} key={repo.id} />
            )}
        </div>
    )
}

export default Main
