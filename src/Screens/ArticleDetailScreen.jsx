import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const ArticleDetailScreen = () => {
   const {id} = useParams();
   const [article, setArticle] = useState(null);

    useEffect( () => {
        fetch('http://blog.api/article/'+id, {
            method : 'POST',
            body : JSON.stringify({with : ['appuser', 'theme', 'image', 'comment']})

        })
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
                            Date de publication
                        </th>
                        <th>Auteur</th>
                        <th>Thème</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{article?.title} </td>

                        <td> {article?.created_at}</td>
                        <td>{article?.appUser?.pseudo}</td>
                        <td>{article?.theme?.title}</td>
                    </tr>
                </tbody>

            </table>

            <h5>Contenu de l'article</h5>
            <div className='p-2'> {article?.content}</div>
            <div>
                {article?.images_list.map(image =>
                     <img key={image.Id_image} src={image.src} alt={image.alt}/>)}
            
            </div>
            <h5>Commentaires:</h5>
                    {article?.comments_list?.map(comment =>
                        <>
                        <p><span className='me-1'>{comment.title}</span><span>{new Date(comment.created_at).toLocaleString()}</span></p>
                        <p>{comment.content}</p>
                        </>)}
        </div>
    );
};

export default ArticleDetailScreen;