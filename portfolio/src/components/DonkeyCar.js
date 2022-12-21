import donkeycar from "../assets/donkeycar.png";

function DonkeyCar () {
    return (
        <div class="content">
                <div class="title">
                <h4>Site de location de voiture factice<br/></h4>
                <h3>DonkeyCar</h3>
                </div>
                <div id="presentation">
                        <a href="http://portfoliorozkeadine.com/DonkeyCar/index.php" target="_blank">
                        <img src={donkeycar} alt="page accueil donkeycar"/>
                        </a>
                        <p>Ce projet nous a permis de mettre en pratique la méthode SCRUM consistant à la gestion de projet via des sprints hebdomadaires et du dialogue entre développeurs.<br/>
                        La mise en pratique de la méthode CRUD fut indispensable à la création de ce projet.</p>
                </div>
        </div>
    )
}

export default DonkeyCar