import "./home.scss"
import woman from "../../../public/woman.png"
import man from "../../../public/man.png"
import downArrow from"../../../public/assets/arrowIcon.svg"


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
                        <button id="bSimulation">Démarrer une simulation</button>
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
            <div id='middleBlockNoir'></div>
            <div id='middleBlockJaune'></div>
            <div id='middleBlockNoir2'></div>

        </div>
    )
}

export default Home