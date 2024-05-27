import "./dashboard.scss"
import { useAuth } from "../../components/contexts/authContext"
import SideNavBar from "../../components/sideNavBar/SideNavBar"

const Dashboard = () => {
    
    return (
        <div id="dashboardContainer">
            <div id="content">
                <SideNavBar />
                <div id="contentRight">
                    <div id="left">
                        <div id="nav">
                            <div className="block">Nouvelle simulation</div>
                            <div className="block">Brochure</div>
                            <div className="block">Ajouter une agence</div>
                        </div>
                        <div id="top">

                        </div>
                        <div id="bottom">
                            
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