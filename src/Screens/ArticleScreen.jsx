import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ArticleScreen = () => {
    const [articles, setArticles] = useState([]);

    const navigate = useNavigate();
    
    useEffect( ()=>{
        fetch('http://blog.api/article/0', {
            method : 'POST',
            body : JSON.stringify({with : ['appuser', 'theme']})
        })
        .then(response => response.json())
        .then(json => {json = json.sort(

            (a,b) => {return new Date(a.created_at) > new Date(b.created_at) ? -1 : 1
            });
            setArticles(json);
        })
        
        
    }, 
[])



    return (
        <div>
             <h1> Liste articles </h1>
            <table className='table'>
            <thead>
                <tr className = 'fw-bold'>
                    <th scope="col">
                        Titre
                    </th>
                    <th scope='col'>
                        Auteur
                    </th>
                    <th scope="col">
                        Date de publication
                    </th>
                    <th>Thème</th>
                </tr>
                </thead>
                <tbody>
                {articles.map(article => {
                    return (<tr key={article.Id_article} onClick = {() => {navigate(`/article/${article.Id_article}`)}}> 
                    {/* attention à bien emballer navigate dans une fonction sinon la redirection s'effectue automatiquement */}

                        <td>{article.title}</td>
                        <td>{article.appUser.pseudo}</td>
                        <td>{article.created_at}</td>
                        <td>{article.theme.title}</td>
                    </tr>);
                })}


                </tbody>


            </table>



        </div>
    );
};

export default ArticleScreen;