import React from "react";
import Header from "../header/Header";
import LeafBlock from "../header/LeafBlock";
import Style from "./ContactPage.module.scss";

const ContactPage = () => {
    return (
        <div className={ Style.container }>
            <Header/>
            <LeafBlock/>
            <div className={ Style.bgForm }>
                <section className={ Style.contact }>
                    <h2>CONTACT</h2>
                    <section className={ Style.coord }>
                        <p>
                            <img alt="localisation" src={require("../../assets/imgContact/map.svg")}/>
                            Paris, France
                        </p>
                        <a href="tel:+33650381812">
                            <img alt="numero de telephone" src={require("../../assets/imgContact/mobile.svg")}/>
                            06 50 38 18 12
                        </a>
                    </section>
                    <section className={ Style.social }>
                        <a href="https://github.com/brunosneak" target="_blank" rel="noopener noreferrer">
                            <img alt="github" src={require("../../assets/imgContact/iconeGit.svg")}/>
                            github.com/brunosneak
                        </a>
                        <a href="https://www.linkedin.com/in/bruno-neak/" target="_blank" rel="noopener noreferrer">
                            <img alt="linkedin" src={require("../../assets/imgContact/iconeLinkedin.svg")}/>
                            linkedin.com/in/bruno-neak
                        </a>
                    </section>
                </section>
                <section className={ Style.myForm }>
                    <form>
                        <label>Nom*</label>
                        <input/>
                        <label>Email*</label>
                        <input/>
                        <label>Message*</label>
                        <textarea/>
                        <button type="submit">Envoyer</button>
                    </form>
                </section>
            </div>
            <div className={ Style.bg1 }/>
            <div className={ Style.bg2 }/>
        </div>
    )
}

export default ContactPage;