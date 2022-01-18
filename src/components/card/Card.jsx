import React from 'react'
import { useNavigate } from "react-router-dom";
import "./card.css"

const Card = (props) => {
    const history = useNavigate();
    return (
        <div>
            <button onClick={()=> history('/')}>back</button>
            Card repo
        </div>
    )
}

export default Card
