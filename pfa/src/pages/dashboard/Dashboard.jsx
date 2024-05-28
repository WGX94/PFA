import "./dashboard.scss"
import React, { useEffect, useState } from "react"
import { useAuth } from "../../components/contexts/authContext"
import SideNavBar from "../../components/sideNavBar/SideNavBar"
import UpdateRead from "../../components/UpdateRead"
import { useNavigate } from "react-router-dom"
import { getAuth } from "firebase/auth"
import { getDatabase, ref, get, remove } from "firebase/database"
import { app } from "../../firebaseConfig"
import circleIcon from "../../../public/assets/circleIcon.svg"
import change from "../../../public/assets/changeIcon.svg"
import deleteC from "../../../public/assets/deleteIcon.svg"
import MyResponsiveLine from "../../components/Graph"

const Dashboard = () => {
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
        return hasPersonalInfo ? 'Refus' : 'Intéressé';
    };


    return (
        <div id="dashboardContainer">
            <div id="content">
                <SideNavBar />
                <div id="contentRight">
                    <div id="left">
                        <div id="nav">
                            <div className="block" id="firstBlock">
                                <img src={circleIcon} alt="" id="more" />
                                Nouvelle simulation</div>
                            <div className="block">Brochure</div>
                            <div className="block">Ajouter une agence</div>
                        </div>
                        <div id="top">
                            <span id="title">Historique des simulations</span>
                            <table id="table">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Nom</th>
                                        <th>Statut</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clientsArray.map(client => (
                                        <tr key={client.clientId} className="border">
                                            <td>{client.createdAt ? new Date(client.createdAt).toLocaleString() : 'N/D'}</td>
                                            <td>{client.Name || 'N/D'}</td>
                                            <td>{getClientStatus(client)}</td>
                                            <td className="actions">
                                                <button className='button1' onClick={() => navigate(`/updatewrite/${client.clientId}`)}>
                                                    <img src={change} alt="" />
                                                </button>
                                                <button className='button1' onClick={() => deleteClient(client.clientId)}>
                                                    <img src={deleteC} alt="" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>


                        </div>
                        <div id="bottom">
                            <span id="titleGraph">Intérêts(en €)</span>
                            <div id="graph">
                                <MyResponsiveLine />

                            </div>
                        

                        </div>
                    </div>
                    <div id="right">

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Dashboard