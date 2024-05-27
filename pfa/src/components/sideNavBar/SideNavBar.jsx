import "./sideNavBar.scss"
import { useAuth } from "../contexts/authContext"
import { Link } from "react-router-dom"
import clientIcon from "../../../public/assets/clientIcon.svg"
import convertIcon from "../../../public/assets/convertIcon.svg"
import historyIcon from "../../../public/assets/history.svg"
import interestIcon from "../../../public/assets/interest.svg"
import legalIcon from "../../../public/assets/legal.svg"
import paramsIcon from "../../../public/assets/params.svg"
import resIcon from "../../../public/assets/resIcon.svg"
import tabIcon from "../../../public/assets/tabIcon.svg"
import persona from "../../../public/persona.png"
import { useState } from "react"
import { useLocation } from "react-router-dom"

const SideNavBar = () => {

    const { currentUser } = useAuth()
    const currentRoute = useLocation().pathname.toLowerCase();

    return (
        <div id="sideBarContainer">
            <div id="top">
                <div id="photo">
                    <img src={persona} alt="" />
                </div>
                <div id="info">
                    
                <span>Comptable</span>
                </div>
            </div>
            <span id="user">{currentUser.displayName ? currentUser.displayName : currentUser.email}</span>
            <div id="bottomPage">
            <div id="mid">
                <Link className={currentRoute.includes("dashboard") ? "tabActive" : "tab"}
        to="/dashboard">
                    <div className="linkPage">  
                        <img src={tabIcon} alt="" />
                        <span className="widthSpan">Tableau de bord</span>
                    </div>
                </Link>
                <Link>
                    <div className="linkPage">  
                        <img src={resIcon} alt="" />
                        <span className="widthSpan">Mon réseau</span>
                    </div>
                </Link>
                <Link>
                    <div className="linkPage">  
                        <img src={clientIcon} alt="" />
                        <span className="widthSpan">Clients potentiels</span>
                    </div>
                </Link>
                <Link>
                    <div className="linkPage">  
                        <img src={convertIcon} alt="" />
                        <span className="widthSpan">Clients convertis</span>
                    </div>
                </Link>
                <Link>
                    <div className="linkPage">  
                        <img src={interestIcon} alt="" />
                        <span className="widthSpan">Intérêts</span>
                    </div>
                </Link>
                <Link>
                    <div className="linkPage">  
                        <img src={interestIcon} alt="" />
                        <span className="widthSpan">Intérêts potentiels</span>
                    </div>
                </Link>
                <Link>
                    <div className="linkPage">  
                        <img src={historyIcon} alt="" />
                        <span className="widthSpan">Historique des simulations</span>
                    </div>
                </Link>
            </div>
            <div id="bottom">
                <Link>
                    <div className="linkPage">  
                        <img src={paramsIcon} alt="" />
                        <span className="widthSpan">Paramètres</span>
                    </div>
                </Link>
                <Link>
                    <div className="linkPage">  
                        <img src={legalIcon} alt="" />
                        <span className="widthSpan">Mentions légales</span>
                    </div>
                </Link>

            </div>

            </div>
            

        </div>
    )
}

export default SideNavBar