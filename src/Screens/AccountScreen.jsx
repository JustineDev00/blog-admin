import {useEffect, useState, React} from 'react';
import { useNavigate } from 'react-router-dom';

const AccountScreen = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch("http://blog.api/appuser/0", {
            method: "POST",
            body : JSON.stringify({with : ['account', 'role']})
        })
            .then(resp => resp.json())
            .then(json => {json = json.sort(
                
                (a,b) => {return a.pseudo.toLowerCase() > b.pseudo.toLowerCase() ? 1 : -1
                });
                setUsers(json);
            });
        }, []);

    return (
<>
        <h1> Liste comptes utilisateurs </h1>
        <table className="table">
            <thead>
                <tr>
                    <th scope='col' className='fw-bold'> Pseudonymes</th>
                    <th scope='col' className='fw-bold'>Email</th>
                    <th scope='col' className='fw-bold'>Rôle</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => {
                    return (<tr key={user.Id_appUser} onClick = {() => {navigate(`/appuser/${user.Id_appUser}`)}}>
                        <td>{user.pseudo}</td>
                        <td>{user.account.email}</td>
                        <td>{user.role.title}</td>
                    </tr>);
                })}
            </tbody>
        </table>
        </>
    );

};

export default AccountScreen;