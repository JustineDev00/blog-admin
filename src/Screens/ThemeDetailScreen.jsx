import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ThemeDetailScreen = () => {
    const {id} = useParams();

    const[theme, setTheme] = useState();
    useEffect( ()=>{
        fetch('http://blog.api/theme/'+id)
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



        </div>
    );
};

export default ThemeDetailScreen;