import React, { useState, useEffect } from 'react';

function Nav (props) {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Vous avez cliqué ${count} fois`;
    });

    return (
        <>
            <p>Tu as cliqué { count } fois</p>
            <button onClick={() => setCount(count + 1)}>
                Clique ici
            </button>
        </>
    );
}

export default Nav;