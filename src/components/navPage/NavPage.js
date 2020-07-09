import React, { Component } from "react";
import Style from "./NavPage.module.scss";
import { Link } from "react-router-dom";

class NavPage extends Component {

    constructor(props){
        super(props);
        this.persoPauseRef = React.createRef();
    }
    
    componentDidMount() {
        let idSetInterval;
        let persoPause = this.persoPauseRef.current.offsetLeft;
        if(window.innerWidth <= 575.98){
            idSetInterval = setInterval(() => {
                persoPause -= 160;
                if(this.persoPauseRef && this.persoPauseRef.current){
                    this.persoPauseRef.current.style.left = persoPause + "px";
                }
                if(persoPause <= -600){
                    clearInterval(idSetInterval);
                };
            }, 200);
        } else {
            idSetInterval = setInterval(() => {
                persoPause -= 200;
                if(this.persoPauseRef && this.persoPauseRef.current){
                    this.persoPauseRef.current.style.left = persoPause + "px";
                }
                if(persoPause <= -800){
                    clearInterval(idSetInterval);
                };
            }, 200);
        }
    }

    render(){
        return (
            <div className={ Style.container }>
                <div className={ Style.platform }/>
                <div className={ Style.maskQuestion }>
                    <img ref={ this.persoPauseRef } alt="personnage en pause" src={require("../../assets/img/spritePersoPause.svg")} className={ Style.question }/>
                </div>
                <ul className={ Style.nav}>
                    <li><Link to="/cvPage">Mon CV</Link></li>
                    <li><Link to="/contactPage">Contactez-moi</Link></li>
                    <li><Link to="/gamePage">Commencer la partie</Link></li>
                    <li>Tableau des scores</li>                
                </ul>
                <ul className={ Style.social }>
                    <li>
                        <a href="https://github.com/brunosneak" target="_blank" rel="noopener noreferrer">
                            <img src={require("../../assets/img/iconeGit.svg")} alt="github" className={ Style.github }/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/bruno-neak/" target="_blank" rel="noopener noreferrer">
                            <img src={require("../../assets/img/iconeLinkedin.svg")} alt="linkedin" className={ Style.linkedin }/>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavPage;