import React, { Component } from "react";
import Style from "./Home.module.scss";
import { withRouter } from "react-router-dom";
import NavPage from "../navPage/NavPage";

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            disabled: false,
        }
        this.persoRef = React.createRef();
        this.boxRef = React.createRef();
    }

    animePerso = () => {
        let idSetInterval;
        let persoPosition = this.persoRef.current.offsetLeft;
        idSetInterval = setInterval(() => {
            persoPosition -= 165;
            if(this.persoRef.current){
                this.persoRef.current.style.left = persoPosition + "px";
            }
            if(persoPosition <= -2500){
                clearInterval(idSetInterval);
                this.props.history.push("/gamePage");
            };
        }, 200);
        this.setState({
            disabled: true
        })
    }

    disapear = () => {
        this.boxRef.current.style = "opacity: 0; transition: opacity .5s;"
        if(this.boxRef.current.style.opacity === "0"){
            setTimeout(() => {
                this.boxRef.current.style.display = "none";
            }, 500);
        }
    }

    render(){
        return (
            this.props.stateNav ? <NavPage nav={ this.props.nav }/> :
            <div className={ Style.container }>
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
                    <img ref={ this.persoRef } className={ Style.perso } src={require("../../assets/img/sautPersoVide.svg")} alt="Personnage saute dans le vide"/>
                </div>

                <button disabled={ this.state.disabled } 
                        type="button" 
                        onClick={ this.animePerso } 
                        className={ Style.start }
                >START</button>

                <section className={ Style.boiteInfo } ref={ this.boxRef } >
                    <div className={ Style.flechesDir }>
                        <img className={ Style.flecheGauche } src={require("../../assets/img/flecheGauche.svg")} alt="flèche directionnelle gauche"/>
                        <img className={ Style.flecheHautBas } src={require("../../assets/img/flecheHautBas.svg")} alt="flèche directionnelle haut et bas"/>
                        <img className={ Style.flecheDroite } src={require("../../assets/img/flecheDroite.svg")} alt="flèche directionnelle droite"/>
                    </div>
                    <p><span>But du jeu</span> : Récupérer un maximum de pièces en utilisant
                        les flèches directionnelles pour vous déplacer.<br/>
                    </p>
                    <img className={ Style.croix } onClick={ this.disapear } src={require("../../assets/img/croix.svg")} alt="croix"/>
                </section>
            </div>
        )
    }
}

export default withRouter(Home);