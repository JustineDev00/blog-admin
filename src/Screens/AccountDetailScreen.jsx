import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const AccountDetailScreen = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('http://blog.api/appuser/'+id)
        .then(response => response.json())
        .then(json => setUser(json))

    }, [id])
    
    
    return (
        <div>
            <h1>Détail de l'utilisateur: {user?.pseudo}</h1>
        </div>
    );
};

export default AccountDetailScreen;