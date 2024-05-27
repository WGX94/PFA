import "./home.scss"
import woman from "../../../public/woman.png"
import man from "../../../public/man.png"


const Home = () => {
    return (
        <div id="homeContainer">
            <div id="top">
                
                <div id="content">
                    <div id="text">
                        <span id="firstLine">Estimer facilement </span>
                        <span id="secondLine">votre gain lors de votre affiliation</span>
                    </div>
                    <button>Démarrer une simulation</button>
                    <button>Découvrez en plus
                        <img src="" alt="" />
                    </button>
                    

                </div>
                <img src={woman} alt="" id="woman" />
                <img src={man} id="man" alt="" />

                <div id="bottom">

                </div>

            </div>

        </div>
    )
}

export default Home