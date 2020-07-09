import React from "react";
import Style from "./Contact.module.scss";
import { Link } from "react-router-dom";
import cv from "../../assets/cv/neak-bruno-cv-3WA.pdf";

const Contact = () => {
    return (
        <section className={ Style.contact }>
            <img className={ Style.winSkull } alt="window and skulls" src={require("../../assets/img/illustration.svg")}/>
            <section className={ Style.dlcv }>
                <h3>Alors si on <br/> travaillait ensemble !</h3>
                <a href={ cv } target="_blank" rel="noopener noreferrer">
                    <button type="button" className={ Style.btnDlcv }>Télécharger mon cv.pdf</button>
                </a>
                <Link to="/contactPage" className={ Style.link }>
                    <button type="button" className={ Style.btnContact }>Contactez-moi</button>
                </Link>
            </section>
            <section className={ Style.social }>
                <h3>Vous pouvez <br/> aussi me suivre</h3>
                <nav>
                    <ul>
                        <li>
                            <a href="https://github.com/brunosneak" target="_blank" rel="noopener noreferrer">
                                <img alt="github" src={require("../../assets/img/iconeGit.svg")}/>
                                <p>github.com/brunosneak</p>
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com/in/bruno-neak" target="_blank" rel="noopener noreferrer">
                                <img alt="linkedin" src={require("../../assets/img/linkedin.svg")}/>
                                <p>linkedin.com/in/bruno-neak</p>
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
        </section>
    )
}

export default Contact;