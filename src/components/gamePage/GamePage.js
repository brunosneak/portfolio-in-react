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
        this.fantomeRougeColl = React.createRef();
        this.fantomeVertColl = React.createRef();
        this.fantomeRouge = React.createRef();
        this.fantomeVert = React.createRef();
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
                const fantomeRougeCollTop = this.fantomeRougeColl.current.offsetTop;
                const fantomeVertCollTop = this.fantomeVertColl.current.offsetTop;

                /* défilement decors */
                const tops = (top1, top2, px) => {
                    top1 -= px;
                    top2.current.style.top = top1 + "px";
                }

                tops(fenetreGaucheTop,this.fenetreGauche, 6);
                tops(fenetreDroiteTop,this.fenetreDroite, 6);
                tops(fantomeRougeCollTop,this.fantomeRougeColl, 7);
                tops(fantomeVertCollTop,this.fantomeVertColl, 7);
            })();

            /* retour depart des objets en boucle*/
            (() => {
                const objHeight = {
                    fenetreGaucheHeight: this.fenetreGauche.current.offsetTop + this.fenetreGauche.current.offsetHeight,
                    fantomeRougeCollHeight: this.fantomeRougeColl.current.offsetTop + this.fantomeRougeColl.current.offsetHeight,
                    fantomeVertCollHeight: this.fantomeVertColl.current.offsetTop + this.fantomeVertColl.current.offsetHeight,
                }
                if(this.fondVert.current.offsetTop >= objHeight.fenetreGaucheHeight){
                    this.fenetreGauche.current.style.top = this.fondVert.current.offsetHeight + Math.floor(Math.random()*1000) + "px";
                    this.fenetreDroite.current.style.top = this.fenetreGauche.current.style.top;
                };
                const start = (start1, start2) => {
                    if(this.fondVert.current.offsetTop >= start1){
                        start2.current.style.top = this.fondVert.current.offsetHeight + Math.floor(Math.random()*1000) + "px";
                        start2.current.style.left = (Math.floor(Math.random() * (975 - 128 + 1)) + 128) + "px";
                    };
                };
                start(objHeight.fantomeRougeCollHeight, this.fantomeRougeColl);
                start(objHeight.fantomeVertCollHeight, this.fantomeVertColl);
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
                    <div className={ Style.fantomeRougeColl } ref={ this.fantomeRougeColl }>
                        <div className={ Style.masqueFantomeRouge }>
                            <img className={ Style.fantomeRouge } 
                                 src={require("../../assets/img/spriteFantomeRouge.svg")} 
                                 alt="fantome rouge"
                                 ref={ this.fantomeRouge }
                            />
                        </div>
                    </div>
                    <div className={ Style.fantomeVertColl } ref={ this.fantomeVertColl }>
                        <div className={ Style.masqueFantomeVert }>
                            <img className={ Style.fantomeVert } 
                                 src={require("../../assets/img/spriteFantomeVert.svg")} 
                                 alt="fantome vert"
                                 ref={ this.fantomeVert }
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(GamePage);