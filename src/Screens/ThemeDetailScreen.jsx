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
            <h1 className='px-2'>
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
                            <img src={theme?.img_src +'.jpeg'} alt={theme?.title} className='small-img'></img>
                            {theme?.image}</td>
                    </tr>
                </tbody>

            </table>
            <h3 className='px-2'>Liste des articles</h3>
            <table>
                <thead>
                    <tr>
                        <th className='px-2'>Titre</th>
                        <th className='px-2'>Publié le</th>
                    </tr>
                </thead>
                <tbody>
                   {theme?.articles_list?.map(article=>{
                        return <tr>
                            <td className='px-2'>{article.title}</td>
                            <td className='px-2'>{new Date(article.created_at).toLocaleString()}</td></tr>
                        
                    })}
                </tbody>
            </table>


        </div>
    );
};

export default ThemeDetailScreen;