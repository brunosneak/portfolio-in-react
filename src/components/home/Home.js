import React, { Component } from "react";
import Header from "../header/Header";
import Style from "./Home.module.scss";

class Home extends Component {

    constructor(){
        super();
        this.state = {
            left: "",
            opacity: ""
        }
    }

    disapear = (event) => {
        event.stopPropagation();
        this.setState({
            opacity: 0
        })
    }

    jump = () => {
        setInterval(() => {
            this.setState({
                left: this.state.left + "-198.7px"
            })  
        }, 1000);
    }

    render(){
        return (
            <div className={ Style.container }>
                <Header/>
                <section>
                    <div className={ Style.bgMain }/>
                    <div className={ Style.bg1 }/>
                    <div className={ Style.bg2 }/>
                    <div className={ Style.bg3 }/>
                    <div className={ Style.bg4 }/>
                    <div className={ Style.bg5 }/>
                    <div className={ Style.bg6 }/>
                </section>

                <div className={ Style.masquePerso }>
                    <img style={ this.state } className={ Style.perso } src={require("../../assets/img/sautPersoVide.svg")} alt="Personnage saute dans le vide"/>
                </div>

                <button type="button" onClick={ this.jump } className={ Style.start }>START</button>

                <section className={ Style.boiteInfo }>
                    <div className={ Style.flechesDir }>
                        <img className={ Style.flecheGauche } src={require("../../assets/img/flecheGauche.svg")} alt="flèche directionnelle gauche"/>
                        <img className={ Style.flecheHautBas } src={require("../../assets/img/flecheHautBas.svg")} alt="flèche directionnelle haut et bas"/>
                        <img className={ Style.flecheDroite } src={require("../../assets/img/flecheDroite.svg")} alt="flèche directionnelle droite"/>
                    </div>
                    <p><span>But du jeu</span> : Récupérer les pièces pour gagner des points en utilisant
                        les flèches directionnelles de votre clavier pour vous déplacer.<br/> Atteindre 30.000 points.
                    </p>
                    <img className={ Style.croix } onClick={ this.disapear } src={require("../../assets/img/croix.svg")} alt="croix"/>
                </section>
            </div>
        )
    }
}

export default Home;