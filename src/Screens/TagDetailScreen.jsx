import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const TagDetailScreen = () => {
    const {id} = useParams();  //va chercher la valeur correspondant à 'id' dans l'URL de la page (url = localhost:3000/tag/id)
    const [tag, setTag] = useState(null);

    useEffect(() => {
        fetch(`http://blog.api/tag/`+id, {
            method : 'POST',
            body : JSON.stringify({with : [{article : 'article_tag'}]})
        })
        .then(resp => resp.json())
        .then (json => {setTag(json)});


    }, [id])
    
    
    return (
        <>
            <h1>Détail du mot-clé : {tag?.title}</h1>
           
           <h3>Liste des articles avec ce mot-clé: </h3>
            <table>
                <thead>
                    <tr>
                        <th className='px-2'>Titre</th>
                        <th className='px-2'>Publié le</th>
                    </tr>
                </thead>
                <tbody>
                   {tag?.articles_list?.map(article=>{
                        return <tr>
                            <td className='px-2'>{article.title}</td>
                            <td className='px-2'>{new Date(article.created_at).toLocaleString()}</td></tr>
                        
                    })}
                </tbody>
            </table>


        </>
    );
};

export default TagDetailScreen;