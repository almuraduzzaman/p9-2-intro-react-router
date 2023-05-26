import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendDetails = () => {
    const friendDetails = useLoaderData();
    // console.log(friendDetails);
    const { name, address, company } = friendDetails;

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <h5>Everything about my this friend is here...</h5>
            <h3>Name: {name}</h3>
            <p>{`Address: ${address.street}, ${address.city}`}</p>
            <h4>Company: {company.name}</h4>
            <button onClick={handleGoBack}>{`<= Go Back`}</button>

        </div>
    );
};

export default FriendDetails;