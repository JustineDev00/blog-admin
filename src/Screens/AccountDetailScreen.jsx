import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const AccountDetailScreen = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('http://blog.api/appuser/'+id, {
            method: "POST",
            body : JSON.stringify({with : ['account', 'role']})  //ajout de la methode POST et des paramètres de with 
        })
        .then(response => response.json())
        .then(json => setUser(json))

    }, [id])
    
    
    return (
        <div className='m-5'>
            <h1>Détail de l'utilisateur: {user?.pseudo}</h1>
            <b> e-mail: {user?.account?.email}</b>
            <br/>
            <b>Rôle : {user?.role?.title}</b>
        </div>
    );
};

export default AccountDetailScreen;