import juvignacV3 from "../assets/juvignacV3.png";

function Juvignac () {
    return (
        <div class="content">
        <div class="title">
            <h4>Refonte du site <a href="http://juvignac-rc.fr/">Juvignac (V1)</a><br/></h4>
            <h3>Juvignac-rc (V3)</h3>
        </div>
        <div id="presentation">
        <a href="http://juvignac-rc.fr/V3/" target="_blank">
                    <img src={juvignacV3} alt="page accueil Juvignac rugby club"/>
        </a>
            <p>Première mise en situation professionnelle avec un projet proposé par le centre de formation via une véritable demande client.
            Il s'agit de refaire le site du club de rugby de la ville de Juvignac.
            La refonte du site <a href="http://juvignac-rc.fr/">Juvignac-rc</a> devait se faire via Wordpress en équipe de 3 personnes.
            </p>
        </div>
    </div>
    )
}

export default Juvignac