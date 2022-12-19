import React from 'react';
import CV_BOUYAHIA from "../assets/CV_BOUYAHIA.png";

function MonCV () {
    return (
        <div>
            <h4>consulter ou télécharger<br/></h4>
            <h3>Mon CV</h3>
                <a href='../assets/CV_PDF_BOUYAHIA.pdf'>
                    <img src={CV_BOUYAHIA} alt="curriculum vitae BOUYAHIA"/>
                </a>
                <div className="pra-moncv">
                <p>pour telecharger mon CV cliquez sur l'image.</p>
                </div>
        </div>
    )
}

export default MonCV