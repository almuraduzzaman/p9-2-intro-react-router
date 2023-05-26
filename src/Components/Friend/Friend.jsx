import React from 'react';
import './Friend.css';
import { Link, useNavigate } from 'react-router-dom';

const Friend = ({ friend }) => {
    const { name, email, id, phone } = friend;

    const navigate = useNavigate();
    
    const handleNavigation = () => {
        navigate(`/friend/${id}`)
    };

    return (
        <div className='friend'>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <div className='btns'>
                <p><Link to={`/friend/${id}`}>1. Details (link)</Link></p>
                <Link to={`/friend/${id}`}><button>2. Details (btn)</button></Link>
                <button onClick={handleNavigation}>3. Details (btn handler)</button>
            </div>
        </div>
    );
};

export default Friend;