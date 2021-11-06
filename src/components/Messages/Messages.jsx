/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import APIRequest from '../../utils/APIRequest';

function Messages () {

    const { disquette, setDisquette } = useState([]);

    useEffect(() => {

        APIRequest('/randomDisquette')
        .then(results => {
            setMessages(results);
        });

    }, []);



    return (
        <>
            { messages.map((message, i) => 
                <li className={ i % 2 === 0 ? '' : 'own' }>${}</li>
            ) }
        </>
    );
}

export default Messages;