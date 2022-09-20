import {useEffect, useState, React} from 'react';
import { useNavigate } from 'react-router-dom';

const ThemeScreen = () => {
    const [theme, setTheme] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch("http://blog.api/theme")
            .then(resp => resp.json())
            .then(json => {json = json.sort(
                
                (a,b) => {return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
                });
                setTheme(json);
            });
        }, []);

    return (

        <>
        <h1>Liste des thèmes</h1>
        <table className="table">
            <thead>
                <tr>
                    <td scope='col' className='fw-bold'>
                        Thèmes
                    </td>
                    <td scope='col' className='fw-bold'>
                        Images
                    </td>
                </tr>
            </thead>
            <tbody>
                {theme.map(theme => {
                    return (<tr key={theme.Id_theme}  onClick = {()=> {navigate(`/theme/${theme.Id_theme}`)}}>
                        <td>{theme.title}</td>
                        <td></td>
                    </tr>);
                })}
            </tbody>
        </table>
        </>
    );
};


export default ThemeScreen;