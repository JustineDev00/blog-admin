import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ThemeDetailScreen = () => {
    const {id} = useParams();

    const[theme, setTheme] = useState(null);
    useEffect( ()=>{
        fetch('http://blog.api/theme/'+id, {
            method : 'POST',
            body : JSON.stringify({with : ['article']})
        })
        .then(resp => resp.json())
        .then(json => setTheme(json));
    },
    [id])
    
    
    
    return (
        <div>
            <h1>
                Détail du thème : {theme?.title}
            </h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Nom du thème</th>
                        <th scope='col'>Image d'illustration</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{theme?.title}</td>
                        <td>
                            <img src={theme?.img_src +'.jpeg'} alt={theme?.title}></img>
                            {theme?.image}</td>
                    </tr>
                </tbody>

            </table>
            <h3>Liste des articles</h3>
            <ul>
                {theme?.articles_list?.map(article =>{
                    return <li key={article.Id_article}><span className='me-3'>{article.title}</span> <span>publié le: {new Date(article.created_at).toLocaleString()}</span></li>
                })}
            </ul>


        </div>
    );
};

export default ThemeDetailScreen;