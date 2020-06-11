import React from "react";
import Header from "../header/Header";
import Style from "./NavPage.module.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";
import LeafBlock from "../header/LeafBlock";

const NavPage = () => {
    return (
        <div className={ Style.container }>
            <Header/>
            <LeafBlock/>
            <div className={ Style.platform }/>
            <div className={ Style.maskQuestion }>
                <img alt="personnage en pause" src={require("../../assets/imgJeu/spritePersoPause.svg")} className={ Style.question }/>
            </div>
            <Router>
                <ul className={ Style.nav}>
                    <li><Link to="/cvPage" refresh="true">Mon CV</Link></li>
                    <li>Contactez-moi</li>
                    <li>Commencer la partie</li>
                    <li>Tableau des scores</li>                
                </ul>
            </Router>
            <ul className={ Style.social }>
                <li>
                    <a href="https://github.com/brunosneak" target="_blank" rel="noopener noreferrer">
                        <img src={require("../../assets/imgAccueil/iconeGit.svg")} alt="github" className={ Style.github }/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/bruno-neak/" target="_blank" rel="noopener noreferrer">
                        <img src={require("../../assets/imgAccueil/iconeLinkedin.svg")} alt="linkedin" className={ Style.linkedin }/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default NavPage;