import React, { Component } from "react";
import Style from "./GamePage.module.scss";
import { withRouter } from "react-router-dom";

class GamePage extends Component {

    constructor(props){
        super(props);
        this.joueurCollRef = React.createRef();
        this.joueurRef = React.createRef();
        this.fenetreGauche = React.createRef();
        this.fenetreDroite = React.createRef();
        this.fondVert = React.createRef();
    }

    componentDidMount(){

        const joueurRef = this.joueurRef;
        const joueurCollRef = this.joueurCollRef;
        let joueurOffLeft = joueurRef.current.offsetLeft;
        let joueurCollOffLeft = joueurCollRef.current.offsetLeft;
        let rafId;

        /* mouvement joueur */
        document.addEventListener("keydown", function(event){
            const direction = event.keyCode;

            switch(direction){
                case 37:
                    /* direction gauche */
                    joueurCollOffLeft -= 15;
                    joueurCollRef.current.style.left = joueurCollOffLeft + "px";
                    joueurRef.current.style.top = "-13px";

                    /* délimitation du joueur */
                    if(joueurCollOffLeft <= 128){
                        joueurCollOffLeft = 128;
                        joueurCollRef.current.style.left = "128px";
                    };
                    if(joueurCollOffLeft >= 1000){
                        joueurCollOffLeft = 1000;
                        joueurCollRef.current.style.left = "1000px";
                    };
                    break;
                case 39:
                    /* direction droite */
                    joueurCollOffLeft += 15;
                    joueurCollRef.current.style.left = joueurCollOffLeft + "px";
                    joueurRef.current.style.top = "-163px";

                    /* délimitation du joueur */
                    if(joueurCollOffLeft <= 128){
                        joueurCollOffLeft = 128;
                        joueurCollRef.current.style.left = "128px";
                    };
                    if(joueurCollOffLeft >= 1000){
                        joueurCollOffLeft = 1000;
                        joueurCollRef.current.style.left = "1000px";
                    };
                    break;
                default:
                    break;
            };
        });

        /* temps défilement joueur */
        setInterval(function(){
            joueurOffLeft -= 120;
        }, 200);
        
        /* Request Animation Frame */
        const animation = () => {

            /* decors animation */
            (() => {
                const fenetreGaucheTop = this.fenetreGauche.current.offsetTop;
                const fenetreDroiteTop = this.fenetreDroite.current.offsetTop;

                /* défilement decors */
                const tops = (top1, top2, px) => {
                    top1 -= px;
                    top2.current.style.top = top1 + "px";
                }

                tops(fenetreGaucheTop,this.fenetreGauche, 6);
                tops(fenetreDroiteTop,this.fenetreDroite, 6);
            })();

            /* retour depart des objets en boucle*/
            (() => {
                const objHeight = {
                    fenetreGaucheHeight: this.fenetreGauche.current.offsetTop + this.fenetreGauche.current.offsetHeight
                }
                if(this.fondVert.current.offsetTop >= objHeight.fenetreGaucheHeight){
                    this.fenetreGauche.current.style.top = this.fondVert.current.offsetHeight + Math.floor(Math.random()*1000) + "px";
                    this.fenetreDroite.current.style.top = this.fenetreGauche.current.style.top;
                };
            })();

            /* boucle du sprite */
            (() => {
                if(joueurOffLeft < -480){
                    joueurOffLeft = -10;
                };
                joueurRef.current.style.left = joueurOffLeft + "px";
            })();

            // rafId = requestAnimationFrame(animation);
        }
        animation();

    }

    render(){
        return (
            <div className={ Style.container } ref={ this.fondVert }>
                <div className={ Style.tour }>

                    {/* Fenêtres Tour */}
                    <img className={ Style.fenetreGauche } 
                         src={require("../../assets/img/fenetreGauche.svg")} 
                         alt="fenêtre"
                         ref={ this.fenetreGauche }
                    />
                    <img className={ Style.fenetreDroite } 
                         src={require("../../assets/img/fenetreDroite.svg")} 
                         alt="fenêtre"
                         ref={ this.fenetreDroite }
                    />

                    {/* Joueur */}
                    <div className={ Style.persoCollision } ref={ this.joueurCollRef }>
                        <div className={ Style.masquePerso }>
                            <img className={ Style.perso } 
                                 src={require("../../assets/img/spritePerso.svg")} 
                                 alt="personnage"
                                 ref={ this.joueurRef }/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(GamePage);