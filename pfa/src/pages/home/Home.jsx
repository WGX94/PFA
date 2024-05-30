import "./home.scss"
import woman from "../../../public/woman.png"
import man from "../../../public/man.png"
import downArrow from"../../../public/assets/arrowIcon.svg"
import numberCammenber from"../../../public/assets/numberCammenber.svg"
import keyNumber from"../../../public/assets/keyNumber2.png"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div id="homeContainer">
            <div id="top">
                
                <div id="content">
                    <div id="text">
                        <span id="firstLine">Estimer facilement </span>
                        <span id="secondLine">votre gain lors de votre affiliation</span>
                    </div>
                    <div id='bContent'>
                        <Link id="link" to="/login">
                            <button id="bSimulation">Démarrer une simulation</button>
                        </Link>
                        
                        <button id="bDecouvrez">Découvrez en plus
                            <img src={downArrow} alt="" />
                        </button>
                    </div>
                </div>
                <img src={woman} alt="" id="woman" />
                <img src={man} id="man" alt="" />

                <div id="bottom">

                </div>

            </div>
            <div id='middleBlockNoir'>
                <img src={numberCammenber} id='numberC'></img>
                <div id="text">
                    <span id="firstLine">D’augmentation de CA en moyenne</span>
                    <span id="secondLine">De visibilité  </span>
                    <span id="thirdLine">De temps gagné avec nos solutions numériques adaptées</span>
                    <span id="forthLine">Agences sont déjà franchisées</span>
                </div>
            </div>
            <div id='middleBlockJaune'></div>
            <div id='middleBlockNoir2'>
                <span id="Mais">Mais aussi... beaucoup d’autres avantages</span>
            </div>
            <div id='lastBlock'>
                <img src={keyNumber} id='keyNumber'></img>
            </div>

        </div>
    )
}

export default Home