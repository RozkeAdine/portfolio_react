import page01 from "../assets/page01.png";

function MiseEnPratique () {
return (
    <div>
        <h4>mise en pratique</h4>
        <h3>Premier portfolio</h3>
        <div id="presentation">
            <a href="http://portfoliorozkeadine.com/premier_portfolio/portfolio.html" target="_blank" rel="noreferrer">
                <img src={page01} alt="page accueil premier portfolio"/>
            </a>
            <p>Lors de mon intégration en formation, nous avons appris les bases du HTML et CSS.
                Nous avons mis en place cela dans un portfolio.
                Il s'agit donc là du tout premier projet et de la mise en pratique des premiers codes.</p>
        </div>
    </div>
)
}

export default MiseEnPratique