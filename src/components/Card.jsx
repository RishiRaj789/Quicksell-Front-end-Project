import React from 'react'
import '../Stylesheets/Card.css'

const Card = ({ ticket }) => {
    const { id, title, priority } = ticket;
    return (
        <div className="Card">
            <p>{id}</p>
            <p>{title}</p>
            <p>Priority: {priority}</p>
        </div>
    );
};

export default Card