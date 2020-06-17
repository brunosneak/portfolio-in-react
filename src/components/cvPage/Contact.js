import React from "react";
import Style from "./Contact.module.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Contact = () => {
    return (
        <section className={ Style.contact }>
            <img className={ Style.winSkull } alt="window and skulls" src={require("../../assets/imgCv/illustration.svg")}/>
            <section className={ Style.dlcv }>
                <h3>Alors si on <br/> travaillait ensemble !</h3>
                <button type="button">Télécharger mon cv.pdf</button>
                <Router>
                    <Link to="/contactPage"><button type="button">Contactez-moi</button></Link>
                </Router>
            </section>
            <section className={ Style.social }>
                <h3>Vous pouvez <br/> aussi me suivre</h3>
                <nav>
                    <ul>
                        <li>
                            <img alt="github" src={require("../../assets/imgContact/github.svg")}/>
                            <p>github.com/brunosneak</p>
                        </li>
                        <li>
                            <img alt="linkedin" src={require("../../assets/imgContact/linkedin.svg")}/>
                            <p>linkedin.com/in/bruno-neak</p>
                        </li>
                    </ul>
                </nav>
            </section>
        </section>
    )
}

export default Contact;