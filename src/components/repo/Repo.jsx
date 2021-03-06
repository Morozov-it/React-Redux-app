import React from 'react';
import './repo.css'
import star from './../../assets/star.png'
import { NavLink } from 'react-router-dom';

const Repo = (props) => {
    const repo = props.repo;
    return (
        <div className='repo'>
            <div className="repo-header">
                <div className="repo-header__name">
                    <NavLink
                        to={`/card/${repo.owner.login}/${repo.name}`}>
                        {repo.name}
                    </NavLink>
                </div>
                <div className="repo-header__stars">
                    <img src={star} alt="" />
                    {repo.stargazers_count}
                </div>
            </div>
            <div className="repo-description">{repo.description}</div>
            <div className="repo-language">{repo.language}</div>
            <div className="repo-avatar">
                <img src={repo.owner.avatar_url} alt="" />
            </div>
            <a href={repo.html_url} className='repo-link'>{repo.html_url}</a>
        </div>
    )
}

export default Repo
