import React from "react";
import Header from "../header/Header";
import Style from "./Accueil.module.scss";
import bgMain from "../../assets/imgAccueil/bgMain.svg";
import bg1 from "../../assets/imgAccueil/bg1.svg";
import bg2 from "../../assets/imgAccueil/bg2.svg";
import bg3 from "../../assets/imgAccueil/bg3.svg";
import bg4 from "../../assets/imgAccueil/bg4.svg";
import bg5 from "../../assets/imgAccueil/bg5.svg";
import bg6 from "../../assets/imgAccueil/bg6.svg";


const Accueil = () => {
    return (
        <>
            <Header/>
            <section>
                <img src={ bgMain } className={ Style.bgMain } alt="main-background"/>
                <img src={ bg1 } className={ Style.bg1 } alt="tree-background"/>
                <img src={ bg2 } className={ Style.bg2 } alt="skull-background"/>
                <img src={ bg3 } className={ Style.bg3 } alt="leaf-background"/>
                <img src={ bg4 } className={ Style.bg4 } alt="worms-background"/>
                <img src={ bg5 } className={ Style.bg5 } alt="platform-background"/>
                <img src={ bg6 } className={ Style.bg6 } alt="wall-background"/>
            </section>
        </>
    )
}

export default Accueil;