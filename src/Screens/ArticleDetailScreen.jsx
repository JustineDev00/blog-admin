import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const ArticleDetailScreen = () => {
   const {id} = useParams();
   const [article, setArticle] = useState(null);

    useEffect( () => {
        fetch('http://blog.api/article/'+id)
        .then(resp => resp.json())
        .then(json => {setArticle(json)})
        .catch(error => console.log(error))

    },[id]);


    return (
        <div>
            <h1>Détails de l'article : {article?.title}</h1>

            <table className='table'>
                <thead>
                    <tr>
                        <th>
                            Titre
                        </th>
                        <th>
                            Contenu
                        </th>
                        <th>
                            Date de publication
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{article?.title} </td>
                        <td> {article?.content}</td>
                        <td> {article?.created_at}</td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default ArticleDetailScreen;