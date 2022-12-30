import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import '../styles/Banner.css';
import burger from "../assets/menu_burger_withe.png";


function Banner () {


    return <div className="pra-banner">
        <label for="burger">
            <img src={burger} alt="image menu"/>
        </label>
        <input type="checkbox" id="burger"></input>
        <ul id="navlinks">
            <li>
                <a className="navlink" >
                    <Link to="/">
                        Accueil
                    </Link></a>
            </li>
            <li>
                <a className="navlink" >
                    <Link to="/Mise_En_Pratique">
                        Mise en Pratique
                        </Link></a>
            </li>
            <li>
                <a className="navlink">
                    <Link to="/Juvignac">
                        Refonte du site
                        </Link></a>
            </li>
            <li>
                <a className="navlink">
                    <Link to="/DonkeyCar">
                        Location de voiture
                        </Link></a>
            </li>
            <li>
                <a className="navlink">
                    <Link to="/ScrapAndCompare">
                        Outils de comparaison
                        </Link></a>
            </li>
            <li>
                <a className="navlink">
                    <Link to="/MonCV">
                        Mon CV
                        </Link></a>
            </li>
        </ul>
        
            </div>
            
}

export default Banner