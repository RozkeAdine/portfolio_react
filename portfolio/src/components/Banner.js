import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import '../styles/Banner.css';

function Banner () {
    return <div className="pra-banner">
                <a>
                    <Link to="/"> Accueil</Link>
                </a>
                <a>
                    <Link to="/Mise_En_Pratique">Mise en Pratique</Link>
                </a>
                <a>
                    <Link to="/Juvignac">Refonte du site</Link>
                </a>
                <a>
                    <Link to="/DonkeyCar">Location de voiture</Link>
                </a>
                <a>
                    <Link to="/ScrapAndCompare">Outils de comparaison</Link>
                </a>
                <a>
                    <Link to="/MonCV">Mon CV</Link>
                </a>
            </div>
}

export default Banner