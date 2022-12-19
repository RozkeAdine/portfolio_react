import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import '../styles/Banner.css';

function Banner () {
    return <div className="pra-banner">
                <button>
                    <Link to="/"> Accueil</Link>
                </button>
                <button>
                    <Link to="/Mise_En_Pratique">Mise en Pratique</Link>
                </button>
                <button>
                    <Link to="/Juvignac">Refonte du site</Link>
                </button>
                <button>
                    <Link to="/DonkeyCar">Location de voiture</Link>
                </button>
                <button>
                    <Link to="/ScrapAndCompare">Outils de comparaison</Link>
                </button>
                <button>
                    <Link to="/MonCV">Mon CV</Link>
                </button>
            </div>
}

export default Banner