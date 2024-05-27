import React, { useEffect, useState } from "react";
import { app, auth } from "../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database"
import { getAuth } from "firebase/auth";
import { useAuth } from "./contexts/authContext";

const Read = () => {

    const { currentUser } = useAuth()
    let [clientsArray, setClientsArray] = useState([])

    useEffect(() => {
        const fetchData = async () => {

            const auth = getAuth()
            const user = auth.currentUser;
        
            if(!user) {
                console.log("Aucun utilisateur connecté.")
            }

            const uid = user.uid
            const db = getDatabase(app);
            const dataRef = ref(db, `comptables/${uid}/clients`);
            
            const snapshot = await get(dataRef);
            if (snapshot.exists()) {
                setClientsArray(Object.values(snapshot.val()));
            } else {
                alert("Error fetching data");
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className='text-2xl font-bold pt-14'>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.
            </div>
            <ul>
                {clientsArray.map((item, index) => (
                    <li key={index}>
                        {item.Name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Read