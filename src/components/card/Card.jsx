import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { getContributors, getCurrentRepo } from '../../actions/repos';
import star from './../../assets/star.png'
import "./card.css"

const Card = () => {
    //хук для взаимодействия с url
    const history = useNavigate();

    //хук для получения данных из url
    const { username, reponame } = useParams();
    
    //внутреннее состояние компонента
    //обязательно первоначально должен быть объект с полем!
    const [repo, setRepo] = useState({ owner:{} });
    const [contributors, setContributors] = useState([]);
    
    //side effect
    useEffect(() => {
        getCurrentRepo(username, reponame, setRepo);
        getContributors(username, reponame, setContributors);
    }, [])

    return (
        <div className='card'>
            <button className='card-btn'
                onClick={() => history('/')}>back</button>
            <div className="card-name">
                <div>{repo.name}</div>
                <div className="card-name__stars">
                    <img src={star} alt="" />
                    {repo.stargazers_count}
                </div>
            </div>
            <div className="card-avatar">
                <img src={repo.owner.avatar_url} alt="" />
            </div>
            <div className="card-description">{repo.description}</div>
            <div className="card-contributors">
                <h3>Contributors:</h3>
                {contributors.map((c, index)=><div key={index}>{index + 1}. {c.login}</div>)}
            </div>
        </div>
    )
}

export default Card
