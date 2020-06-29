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
        this.boulePiqueColl = React.createRef();
        this.pieceJs = React.createRef();
        this.pieceCss3 = React.createRef();
        this.pieceHtml5 = React.createRef();
    }

    componentDidMount(){

        const joueurRef = this.joueurRef;
        const joueurCollRef = this.joueurCollRef;
        let joueurOffLeft = joueurRef.current.offsetLeft;
        let joueurCollOffLeft = joueurCollRef.current.offsetLeft;
        let fantomeRougeLeft = this.fantomeRouge.current.offsetLeft;
        let fantomeVertLeft = this.fantomeVert.current.offsetLeft;
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
            fantomeRougeLeft -= 120;
            fantomeVertLeft -= 120;
        }, 200);
        
        /* Request Animation Frame */
        const animation = () => {

            // rafId = requestAnimationFrame(animation);

            /* decors animation */
            (() => {
                const objTop = {
                    fenetreGaucheTop: this.fenetreGauche.current.offsetTop,
                    fenetreDroiteTop: this.fenetreDroite.current.offsetTop,
                    fantomeRougeCollTop: this.fantomeRougeColl.current.offsetTop,
                    fantomeVertCollTop: this.fantomeVertColl.current.offsetTop,
                    boulePiqueCollTop: this.boulePiqueColl.current.offsetTop,
                    pieceHtml5Top: this.pieceHtml5.current.offsetTop,
                    pieceCss3Top: this.pieceCss3.current.offsetTop,
                    pieceJsTop: this.pieceJs.current.offsetTop
                }


                /* défilement decors */
                const tops = (top1, top2, px) => {
                    top1 -= px;
                    top2.current.style.top = top1 + "px";
                }

                tops(objTop.fenetreGaucheTop,this.fenetreGauche, 6);
                tops(objTop.fenetreDroiteTop,this.fenetreDroite, 6);
                tops(objTop.fantomeRougeCollTop,this.fantomeRougeColl, 7);
                tops(objTop.fantomeVertCollTop,this.fantomeVertColl, 7);
                tops(objTop.boulePiqueCollTop,this.boulePiqueColl, 6);
                tops(objTop.pieceHtml5Top,this.pieceHtml5, 6);
                tops(objTop.pieceCss3Top,this.pieceCss3, 6);
                tops(objTop.pieceJsTop,this.pieceJs, 6);
            })();

            /* retour depart des objets en boucle*/
            (() => {
                const objHeight = {
                    fenetreGaucheHeight: this.fenetreGauche.current.offsetTop + this.fenetreGauche.current.offsetHeight,
                    fantomeRougeCollHeight: this.fantomeRougeColl.current.offsetTop + this.fantomeRougeColl.current.offsetHeight,
                    fantomeVertCollHeight: this.fantomeVertColl.current.offsetTop + this.fantomeVertColl.current.offsetHeight,
                    boulePiqueCollHeight: this.boulePiqueColl.current.offsetTop + this.boulePiqueColl.current.offsetHeight,        pieceHtml5Height: this.pieceHtml5.current.offsetTop + this.pieceHtml5.current.offsetHeight,
                    pieceCss3Height: this.pieceCss3.current.offsetTop + this.pieceCss3.current.offsetHeight,
                    pieceJsHeight: this.pieceJs.current.offsetTop + this.pieceJs.current.offsetHeight
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
                start(objHeight.boulePiqueCollHeight, this.boulePiqueColl);
                start(objHeight.pieceHtml5Height, this.pieceHtml5);
                start(objHeight.pieceCss3Height, this.pieceCss3);
                start(objHeight.pieceJsHeight, this.pieceJs);
            })();

            /* boucle du sprite */
            (() => {
                if(joueurOffLeft < -480){
                    joueurOffLeft = -10;
                };
                joueurRef.current.style.left = joueurOffLeft + "px";

                if(fantomeRougeLeft < -840){
                    fantomeRougeLeft = 0;
                };
                this.fantomeRouge.current.style.left = fantomeRougeLeft + "px";

                if(fantomeVertLeft < -840){
                    fantomeVertLeft = 0;
                };
                this.fantomeVert.current.style.left = fantomeVertLeft + "px";
            })();

            /* detection de collision */
            (() => {
                var objCoord = {
                    coordMasque: this.joueurCollRef.current.getBoundingClientRect(),
                    coordfantomeRougeColl: this.fantomeRougeColl.current.getBoundingClientRect(),
                    coordfantomeVertColl: this.fantomeVertColl.current.getBoundingClientRect(),
                    coordboulePiqueColl: this.boulePiqueColl.current.getBoundingClientRect(),
                    coordPieceJs: this.pieceJs.current.getBoundingClientRect(),
                    coordPieceCss3: this.pieceCss3.current.getBoundingClientRect(),
                    coordPieceHtml5: this.pieceHtml5.current.getBoundingClientRect(),
                }

                if( (objCoord.coordMasque.left < objCoord.coordfantomeRougeColl.left + objCoord.coordfantomeRougeColl.width &&
                    objCoord.coordMasque.left + objCoord.coordMasque.width > objCoord.coordfantomeRougeColl.left &&
                    objCoord.coordMasque.top < objCoord.coordfantomeRougeColl.top + objCoord.coordfantomeRougeColl.height &&
                    objCoord.coordMasque.height + objCoord.coordMasque.top > objCoord.coordfantomeRougeColl.top) || 
        
                    (objCoord.coordMasque.left < objCoord.coordfantomeVertColl.left + objCoord.coordfantomeVertColl.width &&
                    objCoord.coordMasque.left + objCoord.coordMasque.width > objCoord.coordfantomeVertColl.left &&
                    objCoord.coordMasque.top < objCoord.coordfantomeVertColl.top + objCoord.coordfantomeVertColl.height &&
                    objCoord.coordMasque.height + objCoord.coordMasque.top > objCoord.coordfantomeVertColl.top) || 
        
                    (objCoord.coordMasque.left < objCoord.coordboulePiqueColl.left + objCoord.coordboulePiqueColl.width &&
                    objCoord.coordMasque.left + objCoord.coordMasque.width > objCoord.coordboulePiqueColl.left &&
                    objCoord.coordMasque.top < objCoord.coordboulePiqueColl.top + objCoord.coordboulePiqueColl.height &&
                    objCoord.coordMasque.height + objCoord.coordMasque.top > objCoord.coordboulePiqueColl.top)){
                        cancelAnimationFrame(rafId);
                };
            })();
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
                    <div className={ Style.boulePiqueColl } ref={ this.boulePiqueColl }>
                        <img className={ Style.boulePique } 
                             src={require("../../assets/img/boulePique.svg")} 
                             alt="boule avec des piques"
                        />
                    </div>
                    <img className={ Style.pieceJs } 
                         src={require("../../assets/img/pieceJs.svg")} 
                         alt="pièce javascript"
                         ref={ this.pieceJs }
                    />
                    <img className={ Style.pieceCss3 } 
                         src={require("../../assets/img/pieceCss3.svg")} 
                         alt="pièce css"
                         ref={ this.pieceCss3 }
                    />
                    <img className={ Style.pieceHtml5 } 
                         src={require("../../assets/img/pieceHtml5.svg")} 
                         alt="pièce html"
                         ref={ this.pieceHtml5 }
                    />
                </div>
            </div>
        )
    }
}

export default withRouter(GamePage);