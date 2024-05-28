/*
import React, { useEffect, useState } from 'react';
import { app } from '../firebaseConfig';
import { getDatabase, ref, get, remove } from "firebase/database";
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const UpdateRead = () => {

    const navigate = useNavigate();

    let [clientsArray, setClientsArray] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const auth = getAuth();
            const user = auth.currentUser;
    
            if (!user) {
                console.log("Aucun utilisateur connecté.")
            }
            const uid = user.uid
            const db = getDatabase(app);
            const dataRef = ref(db, `comptables/${uid}/clients/`);
            const snapshot = await get(dataRef);
            if (snapshot.exists()) {
    
                const myData = snapshot.val();
                const temporaryArray = Object.keys(myData).map(myFireId => {
                    return {
                        ...myData[myFireId],
                        clientId: myFireId
                    }
                })
                setClientsArray(temporaryArray);
            } else {
                alert("error");
            }
        }
        fetchData();

        
       

    })

    const deleteClient = async (clientIdParam) => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (!user) {
            console.log("Aucun utilisateur connecté.")
        }
        const uid = user.uid
        const db = getDatabase(app);
        const dataRef = ref(db, `comptables/${uid}/clients/${clientIdParam}`);
        await remove(dataRef);
        window.location.reload();
    }
    

    

    return (
        <div>
            <h1>UPDATE READ</h1>
            
            <ul>
                {clientsArray.map(item => (
                
                        <li key={item.clientId}>
                            {item.Name}: {item.clientId}
                            <button className='button1' onClick={() => navigate(`/updatewrite/${item.clientId}`)}>UPDATE</button>
                            <button className='button1' onClick={() => deleteClient(item.clientId)}>DELETE</button>
                        </li>

                    

                ))}
            </ul>
            <button className='button1' onClick={() => navigate("/")}>GO HOMEPAGE</button> <br />
            <button className='button1' onClick={() => navigate("/read")}>GO READ PAGE</button>




        </div>
    )
}

export default UpdateRead

*/



import React, { useEffect, useState } from 'react';
import { app } from '../firebaseConfig';
import { getDatabase, ref, get, remove } from "firebase/database";
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const UpdateRead = () => {
    const navigate = useNavigate();
    const [clientsArray, setClientsArray] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const auth = getAuth();
            const user = auth.currentUser;

            if (!user) {
                console.log("Aucun utilisateur connecté.");
                return;
            }

            const uid = user.uid;
            const db = getDatabase(app);
            const dataRef = ref(db, `comptables/${uid}/clients/`);
            const snapshot = await get(dataRef);

            if (snapshot.exists()) {
                const myData = snapshot.val();
                const temporaryArray = Object.keys(myData).map(myFireId => {
                    return {
                        ...myData[myFireId],
                        clientId: myFireId
                    };
                });
                setClientsArray(temporaryArray);
            } else {
                alert("Erreur lors de la récupération des données.");
            }
        };

        fetchData();
    }, []);

    const deleteClient = async (clientId) => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (!user) {
            console.log("Aucun utilisateur connecté.");
            return;
        }

        const uid = user.uid;
        const db = getDatabase(app);
        const dataRef = ref(db, `comptables/${uid}/clients/${clientId}`);
        await remove(dataRef);
        window.location.reload();
    };

    const getClientStatus = (client) => {
        const hasPersonalInfo = client.address && client.name && client.email && client.phone && client.businessName;
        return hasPersonalInfo ? 'Intéressé' : 'Refus';
    };

    return (
        <div>
            <h1>UPDATE READ</h1>
            <table>
                <thead>
                    <tr>
                        <th>Date d'enregistrement</th>
                        <th>Nom du client</th>
                        <th>ID du client</th>
                        <th>Statut</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {clientsArray.map(client => (
                        <tr key={client.clientId} className='border'>
                            <td>{client.createdAt ? new Date(client.createdAt).toLocaleString() : 'N/D'}</td>
                            <td>{client.Name || 'N/D'}</td>
                            <td>{client.clientId}</td>
                            <td>{getClientStatus(client)}</td>
                            <td>
                                <button className='button1' onClick={() => navigate(`/updatewrite/${client.clientId}`)}>UPDATE</button>
                                <button className='button1' onClick={() => deleteClient(client.clientId)}>DELETE</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className='button1' onClick={() => navigate("/")}>GO HOMEPAGE</button> <br />
            <button className='button1' onClick={() => navigate("/read")}>GO READ PAGE</button>
        </div>
    );
};

export default UpdateRead;
