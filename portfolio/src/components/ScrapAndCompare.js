import scrapandcompare from "../assets/scrapandcompare.png";

function ScrapAndCompare () {
    return (
        <div class="content">
            <div class="title">
                <h4>Site de comparaison<br/></h4>
                <h3>Scrap and Compare</h3>
            </div>
                <div id="presentation">
                    <a href="../assets/scrapandcomparesiteenconstruction.png" target="_blank" rel="noreferrer">
                        <img src={scrapandcompare} alt="page accueil scrap and compare"/>
                    </a>
                    <p>
                        C'est le projet final de formation.<br/>
                        il s'agit là d'une demande professionnelle de création d'un site de comparaison de pièces automobiles du client par rapport à ses concurrents.
                        Expérience formatrice via la mise en place et en pratique des outils comme Angular pour le front-end et Symfony pour la back-end avec API REST (api platform) et le typage pour les languages JAVA-SCRIPT et PHP.
                    </p>
                </div>
        </div>
    )
}

export default ScrapAndCompare