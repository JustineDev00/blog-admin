import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const ArticleDetailScreen = () => {
   const {id} = useParams();
   const [article, setArticle] = useState(null);

    useEffect( () => {
        fetch('http://blog.api/article/'+id, {
            method : 'POST',
            body : JSON.stringify({with : ['appuser', 'theme', 'image', 'comment', {tag : 'article_tag'}]})

        })
        .then(resp => resp.json())
        .then(json => {setArticle(json)})
        .catch(error => console.log(error))

    },[id]);


    return (
        <div className='mx-3'>
            <h1>Détails de l'article : {article?.title}</h1>

            <div className='d-flex flex-row'>
            <p className='me-1 mb-0'>Publié le : {article?.created_at}</p> <p className='me-1 mb-0'>par  {article?.appUser?.pseudo}</p>
            <p className="me-2 mb-0">dans  {article?.theme?.title}</p>
            </div>
            <div>
                {article?.tags_list.map(tag=> {
                    return <span class="badge bg-secondary me-2">{tag.title}</span>
                })}
            </div>
           
            <div> {article?.content}</div>
            <div>
                {article?.images_list.map(image =>
                     <img key={image.Id_image} src={image.src} alt={image.alt} />)}
            
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