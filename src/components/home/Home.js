import React, { Component } from "react";
import Header from "../header/Header";
import Style from "./Home.module.scss";
import bgMain from "../../assets/imgAccueil/bgMain.svg";
import bg1 from "../../assets/imgAccueil/bg1.svg";
import bg2 from "../../assets/imgAccueil/bg2.svg";
import bg3 from "../../assets/imgAccueil/bg3.svg";
import bg4 from "../../assets/imgAccueil/bg4.svg";
import bg5 from "../../assets/imgAccueil/bg5.svg";
import bg6 from "../../assets/imgAccueil/bg6.svg";
import croix from "../../assets/imgAccueil/croix.svg";
import flecheDroite from "../../assets/imgAccueil/flecheDroite.svg";
import flecheGauche from "../../assets/imgAccueil/flecheGauche.svg";
import flecheHautBas from "../../assets/imgAccueil/flecheHautBas.svg";

class Home extends Component {

    constructor(){
        super();
        
    }

    render(){
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



                <button type="button" className={ Style.start }>START</button>

                <section className={ Style.boiteInfo }>
                    <div className={ Style.flechesDir }>
                        <img className={ Style.flecheGauche } src={ flecheGauche } alt="flèche directionnelle gauche"/>
                        <img className={ Style.flecheHautBas } src={ flecheHautBas } alt="flèche directionnelle haut et bas"/>
                        <img className={ Style.flecheDroite } src={ flecheDroite } alt="flèche directionnelle droite"/>
                    </div>
                    <p><span>But du jeu</span> : Récupérer les pièces pour gagner des points en utilisant
                        les flèches directionnelles de votre clavier pour vous déplacer.<br/> Atteindre 30.000 points.
                    </p>
                    <img className={ Style.croix } src={ croix } alt="croix"/>
                </section>
            </>
        )
    }
}

export default Home;