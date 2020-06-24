import React, { Component } from "react";
import Style from "./GamePage.module.scss";
import { withRouter } from "react-router-dom";

class GamePage extends Component {

    constructor(props){
        super(props);
        this.joueurCollRef = React.createRef();
        this.joueurRef = React.createRef();
    }

    componentDidMount(){

        const joueurRef = this.joueurRef;
        const joueurCollRef = this.joueurCollRef;
        let joueurOffLeft = joueurRef.current.offsetLeft;
        let joueurCollOffLeft = joueurCollRef.current.offsetLeft;

        /* mouvement joueur */
        document.addEventListener("keydown", function(event){
            const direction = event.keyCode;

            switch(direction){
                case 37:
                    /* direction gauche */
                    joueurCollOffLeft -= 15;
                    joueurCollRef.current.style.left = joueurCollOffLeft + "px";
                    joueurRef.current.style.top = "-13px";
                    limit();
                    break;
                case 39:
                    /* direction droite */
                    joueurCollOffLeft += 15;
                    joueurCollRef.current.style.left = joueurCollOffLeft + "px";
                    joueurRef.current.style.top = "-163px";
                    limit();
                    break;
                default:
                    break;
            };
        });

        /* délimitation du joueur */
        const limit = () => {
            if(joueurCollOffLeft <= 128){
                joueurCollOffLeft = 128;
                joueurCollRef.current.style.left = "128px";
            };
            if(joueurCollOffLeft >= 1000){
                joueurCollOffLeft = 1000;
                joueurCollRef.current.style.left = "1000px";
            };
        }

        /* temps défilement joueur */
        setInterval(function(){
            joueurOffLeft -= 120;
        }, 200);
        
        /* Request Animation Frame */
        const animation = () => {

            /* boucle du sprite */
            (() =>{
                if(joueurOffLeft < -480){
                    joueurOffLeft = -10;
                };
                joueurRef.current.style.left = joueurOffLeft + "px";
            })();

            // requestAnimationFrame(animation);
        }
        animation();

    }

    render(){
        return (
            <div className={ Style.container }>
                <div className={ Style.tour }>
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