import React, {useEffect, useState} from 'react';
import './main.css'
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from '../../actions/repos';
import Repo from './../repo/Repo'
import { setCurrentPage } from '../../reducers/reposReducer';
import { createPages } from '../../utils/pagesCreator';


const Main = () => {
    //хук для вызова метода dispatch в redux-store
    const dispatch = useDispatch();

    //хук для получения данных из store
    const repos = useSelector(state => ({
        items: state.repos.items,
        isFetching: state.repos.isFetching,
        currentPage: state.repos.currentPage,
        perPage: state.repos.perPage,
        totalCount: state.repos.totalCount
    }));

    //вычисления для постраничного вывода репозиториев
    const totalPages = Math.ceil(repos.totalCount / repos.perPage);
    const pages = [];
    createPages(pages, totalPages, repos.currentPage);

    //хук состояния компоненты для управляемого инпута
    const [searchValue, setSearchValue] = useState('');

    //хук для выполнения сторонних эффектов (асинхронные запросы)
    useEffect(() => {
        dispatch(getRepos(searchValue, repos.currentPage, repos.perPage))
    }, [repos.currentPage])
    
    //функция для поиска
    function searchHandler() {
        dispatch(setCurrentPage(1));
        dispatch(getRepos(searchValue, repos.currentPage, repos.perPage));
    };

    return (
        <div className='main'>
            <div className="search">
                <input
                    value={searchValue}
                    onChange={(e)=>setSearchValue(e.target.value)}
                    autoFocus
                    type='text'
                    placeholder='search...'
                    className='search-input' />
                <button
                    onClick={searchHandler}
                    className='search-btn'>search</button>
            </div>
            {!repos.isFetching ?
                repos.items.map(repo => <Repo repo={repo} key={repo.id} />)
                :   
                <div className='fetching'></div>
            }
            <div className="pages">
                {pages.map((page, index) => <span
                    key={index}
                    onClick={()=>dispatch(setCurrentPage(page))}
                    className={repos.currentPage === page ? "current-page" : "page"}>{page}</span>)}
            </div>
        </div>
    )
}

export default Main
