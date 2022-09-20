import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const TagDetailScreen = () => {
    const {id} = useParams();  //va chercher la valeur correspondant à 'id' dans l'URL de la page (url = localhost:3000/tag/id)
    const [tag, setTag] = useState(null);

    useEffect(() => {
        fetch(`http://blog.api/tag/`+id)
        .then(resp => resp.json())
        .then (json => {setTag(json)});


    }, [id])
    
    
    return (
        <>
            <h1>Détail du mot-clé : {tag?.title}</h1>
        </>
    );
};

export default TagDetailScreen;