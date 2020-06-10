import React from "react";
import Header from "../header/Header";
import Style from "./NavPage.module.scss";
import LeafBlock from "../header/LeafBlock";
import github from "../../assets/imgAccueil/iconeGit.svg";
import linkedin from "../../assets/imgAccueil/iconeLinkedin.svg";
import question from "../../assets/imgJeu/spritePersoPause.svg";

const NavPage = () => {
    return (
        <div className={ Style.container }>
            <Header/>
            <LeafBlock/>
            <div className={ Style.platform }/>
            <div className={ Style.maskQuestion }>
                <img src={ question } className={ Style.question }/>
            </div>
            <ul className={ Style.nav}>
                <li>Mon CV</li>
                <li>Contactez-moi</li>
                <li>Commencer la partie</li>
                <li>Tableau des scores</li>                
            </ul>
            <ul className={ Style.social }>
                <li>
                    <a href="https://github.com/brunosneak" target="_blank" rel="noopener noreferrer">
                        <img src={ github } alt="github" className={ Style.github }/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/bruno-neak/" target="_blank" rel="noopener noreferrer">
                        <img src={ linkedin } alt="linkedin" className={ Style.linkedin }/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default NavPage;