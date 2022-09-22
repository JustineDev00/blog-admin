import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const AccountDetailScreen = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('http://blog.api/appuser/'+id, {
            method: "POST",
            body : JSON.stringify({with : ['account', 'role', 'article', 'comment']})  //ajout de la methode POST et des paramètres de with 
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
            <hr/>

            {user?.Id_role === '1' && <>
                <h3>Articles rédigés</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Titre de l'article</th>
                            <th scope='col'>Date de publication</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user?.articles_list.map(article =>
                            {
                                return(<tr key={article.Id_article}>
                                    <td>{article.title}</td>
                                    <td>{new Date(article.created_at).toLocaleString()}</td>

                                </tr>)
                            })}
                    </tbody>
                </table>
            
            
            </>}
            {user?.Id_role === '2' && <>
                <h3>Commentaires rédigés</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Titre du commentaire</th>
                            <th scope='col'>Date de publication</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user?.comments_list.map(comment =>
                            {
                                return(<tr key={comment.Id_commment}>
                                    <td>{comment.title}</td>
                                    <td>{new Date(comment.created_at).toLocaleString()}</td>

                                </tr>)
                            })}
                    </tbody>
                </table>
            
            
            </>}
        </div>
    );
};

export default AccountDetailScreen;