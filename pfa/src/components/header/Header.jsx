import React from 'react'
import "./header.scss"
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'
import { doSignOut } from '../../auth'
import logo from "../../../public/centuryLogo.svg"
import burger from "../../../public/assets/burgerIcon.svg"
import account from "../../../public/assets/accountIcon.svg"

const Header = () => {
    const navigate = useNavigate()
    const { userLoggedIn } = useAuth()
    return (
        <div id='headerContainer'>
            <div id='topHeader'>
                <span>Agences immobilières CENTURY 21 : immobilier, achat, vente, location et activités de gestion immobilière</span>
            </div>
            <div id='bottomHeader'>
                <img src={logo} alt="" />
                <div id='nav'>
                {
                        userLoggedIn
                            ?
                            <button className='buttons' id='lastButton' onClick={() => {navigate('/Dashboard')}}>Dashboard</button>
                            : null
                            
                }
                    <div id='hiddenBlock'></div>
                    <button className='buttons'id='firstButton'>Voir nos biens de luxe

                    </button >
                    <button className='buttons' id='secondButton'>Estimer votre bien

                    </button>
                    <button id='becameF'>Devenir franchisé

                    </button>
                    <div id='account'>
                        <img src={account} alt="" />
                    {
                        userLoggedIn
                            ?
                            <>
                                <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} id='logoutButton' >Se déconnecter</button>
                            </>
                            :
                            <>
                                <Link className='text' to={'/login'}>Se connecter</Link>
                            </>
                    }
                    </div>
                    <img src={burger} alt="" id='burger' />
                    

                </div>

            </div>


        </div>
    )
}

export default Header