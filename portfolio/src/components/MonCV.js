import React from 'react';
import CV_BOUYAHIA from "../assets/CV_BOUYAHIA.png";
import CV_PDF_BOUYAHIA from "../assets/CV_PDF_BOUYAHIA.pdf";
import '../styles/MonCV.css';

function MonCV () {
    return (
        <div className="container">
            {/* <h4>consulter ou télécharger<br/></h4>
            <h3>Mon CV</h3> */}
            <div className="pra-moncv">
                <a href={CV_PDF_BOUYAHIA} target="_blank" rel="noreferrer">
                    <img src={CV_BOUYAHIA} alt="curriculum vitae BOUYAHIA"/>
                </a>
                <div>
                <p className="pra-moncv-p">pour <br/>consulter et telecharger <br/>mon CV <br/>cliquez sur l'image.</p>
                </div>
            </div>
        </div>
    )
}

export default MonCV