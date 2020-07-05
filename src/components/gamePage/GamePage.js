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
        this.state = {
            score: 0,
            compteur: 3
        }
    }

    componentDidMount(){

        const joueurRef = this.joueurRef;
        const joueurCollRef = this.joueurCollRef;
        let joueurOffLeft = joueurRef.current.offsetLeft;
        let joueurCollOffLeft = joueurCollRef.current.offsetLeft;
        let fantomeRougeLeft = this.fantomeRouge.current.offsetLeft;
        let fantomeVertLeft = this.fantomeVert.current.offsetLeft;
        let rafId;

        /* temps défilement joueur */
        setInterval(function(){
            joueurOffLeft -= 120;
            fantomeRougeLeft -= 120;
            fantomeVertLeft -= 120;
        }, 200);

        /* compte a rebours */
        const intervalId = setInterval(() => {
            this.setState({
                compteur: this.state.compteur -1
            });
            if(this.state.compteur === 0){
                clearInterval(intervalId);
            }
        }, 1000);

        /* départ des objets */
        const departObjet = (monObjet) => {
            monObjet.style.bottom = "-" + Math.floor(Math.random()*1000) - monObjet.offsetHeight + "px";
            monObjet.style.left = (Math.floor(Math.random() * (975 - 128 + 1)) + 128) + "px";
        };

        (() => {
            this.fenetreGauche.current.style.bottom = "-" + Math.floor(Math.random()*1000) - this.fenetreGauche.current.offsetHeight + "px";
            this.fenetreDroite.current.style.bottom  = this.fenetreGauche.current.style.bottom ;

            departObjet(this.pieceJs.current);
            departObjet(this.boulePiqueColl.current);
            departObjet(this.fantomeRougeColl.current);
            departObjet(this.fantomeVertColl.current);
            departObjet(this.pieceCss3.current);
            departObjet(this.pieceHtml5.current);
        })();
        
        /* Request Animation Frame */
        const animation = () => {

            rafId = requestAnimationFrame(animation);
            
            /* objets animés */
            if( this.fenetreGauche.current &&
                this.fenetreDroite.current &&
                this.fantomeRougeColl.current &&
                this.fantomeVertColl.current &&
                this.boulePiqueColl.current &&
                this.pieceHtml5.current &&
                this.pieceCss3.current &&
                this.pieceJs.current ){
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


                        /* défilement objets vers le haut */
                        const slideUp = (top1, top2, px) => {
                            top1 -= px;
                            top2.current.style.top = top1 + "px";
                        }

                        slideUp(objTop.fenetreGaucheTop,this.fenetreGauche, 6);
                        slideUp(objTop.fenetreDroiteTop,this.fenetreDroite, 6);
                        slideUp(objTop.fantomeRougeCollTop,this.fantomeRougeColl, 7);
                        slideUp(objTop.boulePiqueCollTop,this.boulePiqueColl, 6);
                        slideUp(objTop.pieceHtml5Top,this.pieceHtml5, 6);
                        slideUp(objTop.pieceCss3Top,this.pieceCss3, 6);
                        slideUp(objTop.pieceJsTop,this.pieceJs, 6);

                        /* niveau et vitesse de jeu */
                        const niveau = (scoreAtteint, vitesse, vitesseFantome) => {
                            if( this.state.score >= scoreAtteint ){
                                objTop.fenetreGaucheTop -= vitesse;
                                objTop.fenetreDroiteTop -= vitesse;
                                objTop.pieceJsTop -= vitesse;
                                objTop.boulePiqueCollTop -= vitesse;
                                objTop.fantomeRougeCollTop -= vitesseFantome;
                                objTop.fantomeVertCollTop -= vitesseFantome;
                                objTop.pieceCss3Top -= vitesse;
                                objTop.pieceHtml5Top -= vitesse;
                                this.fenetreGauche.current.style.top = objTop.fenetreGaucheTop + "px";
                                this.fenetreDroite.current.style.top = objTop.fenetreDroiteTop + "px";
                                this.pieceJs.current.style.top = objTop.pieceJsTop + "px";
                                this.boulePiqueColl.current.style.top = objTop.boulePiqueCollTop + "px";
                                this.fantomeRougeColl.current.style.top = objTop.fantomeRougeCollTop + "px";
                                this.fantomeVertColl.current.style.top = objTop.fantomeVertCollTop + "px";
                                this.pieceCss3.current.style.top = objTop.pieceCss3Top + "px";
                                this.pieceHtml5.current.style.top = objTop.pieceHtml5Top + "px";
                            };
                        };
                        
                        if( this.state.score >= 5000 ){
                            niveau(5000, 8, 9);
                            if(fantomeVertLeft < -840){
                                fantomeVertLeft = 0;
                            };
                            this.fantomeVert.current.style.left = fantomeVertLeft + "px";
                            slideUp(objTop.fantomeVertCollTop,this.fantomeVertColl, 1);
                        };
                    
                        if( this.state.score >= 10000 ){
                            niveau(10000, 2, 2);
                        };
                    
                        if( this.state.score >= 15000 ){
                            niveau(15000, 2, 2);
                        }; 

                    })();
            }
            /* retour depart des objets en boucle*/
            if( this.fenetreGauche.current &&
                this.fantomeRougeColl.current &&
                this.fantomeVertColl.current &&
                this.boulePiqueColl.current &&
                this.pieceHtml5.current &&
                this.pieceCss3.current &&
                this.pieceJs.current ){
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
                }

            /* boucle du sprite */
            (() => {
                if(joueurOffLeft < -480){
                    joueurOffLeft = -10;
                };
                if(joueurRef.current){
                    joueurRef.current.style.left = joueurOffLeft + "px";
                }

                if(fantomeRougeLeft < -840){
                    fantomeRougeLeft = 0;
                };
                if(this.fantomeRouge.current){
                    this.fantomeRouge.current.style.left = fantomeRougeLeft + "px";
                }
            })();

            /* detection de collision */
            if( this.joueurCollRef.current &&
                this.fantomeRougeColl.current &&
                this.fantomeVertColl.current &&
                this.boulePiqueColl.current &&
                this.pieceJs.current &&
                this.pieceCss3.current &&
                this.pieceHtml5.current ){
                    (() => {

                        /* detection obstacles */
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

                        /* detection pièces*/
                        const pieceCollision = (obj1, obj2, points) => {
                            if(objCoord.coordMasque.left < obj1.left + obj1.width &&
                                objCoord.coordMasque.left + objCoord.coordMasque.width > obj1.left &&
                                objCoord.coordMasque.top < obj1.top + obj1.height &&
                                objCoord.coordMasque.height + objCoord.coordMasque.top > obj1.top){
                                    obj2.style.top = this.fondVert.current.offsetHeight + Math.floor(Math.random()*1000) + "px";
                                    obj2.style.left = (Math.floor(Math.random() * (975 - 128 + 1)) + 128) + "px";
                                    this.setState({
                                        score: this.state.score + points
                                    });
                                };
                        };
                
                        pieceCollision(objCoord.coordPieceJs, this.pieceJs.current, 1000);
                        pieceCollision(objCoord.coordPieceCss3, this.pieceCss3.current, 500);
                        pieceCollision(objCoord.coordPieceHtml5, this.pieceHtml5.current, 250);

                    })();
                }
        }
        setTimeout(() => {

            /* mouvement joueur */
            document.addEventListener("keydown", function(event){
                const direction = event.keyCode;

                switch(direction){
                    case 37:
                        /* direction gauche */
                        joueurCollOffLeft -= 15;
                        if(joueurCollRef.current){
                            joueurCollRef.current.style.left = joueurCollOffLeft + "px";
                            joueurRef.current.style.top = "-13px";
                        }

                        /* délimitation du joueur */
                        if(joueurCollOffLeft <= 128 && joueurCollRef.current){
                            joueurCollOffLeft = 128;
                            joueurCollRef.current.style.left = "128px";
                        };
                        if(joueurCollOffLeft >= 1000 && joueurCollRef.current){
                            joueurCollOffLeft = 1000;
                            joueurCollRef.current.style.left = "1000px";
                        };
                        break;
                    case 39:
                        /* direction droite */
                        joueurCollOffLeft += 15;
                        if(joueurCollRef.current){
                            joueurCollRef.current.style.left = joueurCollOffLeft + "px";
                            joueurRef.current.style.top = "-163px";
                        }

                        /* délimitation du joueur */
                        if(joueurCollOffLeft <= 128 && joueurCollRef.current){
                            joueurCollOffLeft = 128;
                            joueurCollRef.current.style.left = "128px";
                        };
                        if(joueurCollOffLeft >= 1000 && joueurCollRef.current){
                            joueurCollOffLeft = 1000;
                            joueurCollRef.current.style.left = "1000px";
                        };
                        break;
                    default:
                        break;
                };
            });
            animation();
        }, 3000);
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
                <div className={ Style.scoreDuJeu }>
                    <p>score</p>
                    <span>{ this.state.score }</span>
                </div>
                { this.state.compteur === 0 ? 
                    null :
                    <div className={ Style.compteur }>{ this.state.compteur }</div>
                }
            </div>
        )
    }
}

export default withRouter(GamePage);