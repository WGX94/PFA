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