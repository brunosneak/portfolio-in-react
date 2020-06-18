import React from "react";
import Header from "../header/Header";
import Style from "./NavPage.module.scss";
import { Link } from "react-router-dom";

const NavPage = () => {
    return (
        <div className={ Style.container }>
            <Header/>
            <div className={ Style.platform }/>
            <div className={ Style.maskQuestion }>
                <img alt="personnage en pause" src={require("../../assets/img/spritePersoPause.svg")} className={ Style.question }/>
            </div>
            <ul className={ Style.nav}>
                <li><Link to="/cvPage">Mon CV</Link></li>
                <li><Link to="/contactPage">Contactez-moi</Link></li>
                <li>Commencer la partie</li>
                <li>Tableau des scores</li>                
            </ul>
            <ul className={ Style.social }>
                <li>
                    <a href="https://github.com/brunosneak" target="_blank" rel="noopener noreferrer">
                        <img src={require("../../assets/img/iconeGit.svg")} alt="github" className={ Style.github }/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/bruno-neak/" target="_blank" rel="noopener noreferrer">
                        <img src={require("../../assets/img/iconeLinkedin.svg")} alt="linkedin" className={ Style.linkedin }/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default NavPage;