import React, { Component } from "react";
import Style from "./NavPage.module.scss";
import { Link, withRouter } from "react-router-dom";

class NavPage extends Component {

    constructor(props){
        super(props);
        this.persoPauseRef = React.createRef();
        this.persoWinRef = React.createRef();
    }
    
    componentDidMount() {
        if(this.props.location.pathname === "/gamePage" && this.props.stateNav === true){
            let persoWin = this.persoWinRef.current.offsetLeft;
            setInterval(() => {
                persoWin -= 166.6;
                if(this.persoWinRef && this.persoWinRef.current){
                    this.persoWinRef.current.style.left = persoWin + "px";
                }
                if(persoWin <= -800){
                    // clearInterval(idSetInterval);
                    persoWin = 166.6;
                };
            }, 200);
        } else {
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
    }

    render(){
        return (
            <div className={ Style.container }>
                <div className={ Style.platform }/>
                {this.props.location.pathname === "/gamePage" && this.props.stateNav ?
                <div className={ Style.maskWin }>
                    <img ref={ this.persoWinRef } alt="personnage gagnant" src={require("../../assets/img/spritePersoWin.svg")} className={ Style.win }/>
                </div>
                : 
                <div className={ Style.maskQuestion }>
                    <img ref={ this.persoPauseRef } alt="personnage en pause" src={require("../../assets/img/spritePersoPause.svg")} className={ Style.question }/>
                </div> 
                }
                <ul className={ Style.nav }>
                    <li><Link to="/cvPage" onClick={ this.props.nav }>Mon CV</Link></li>
                    <li><Link to="/contactPage" onClick={ this.props.nav }>Contactez-moi</Link></li>
                    <li><Link to="/gamePage" onClick={ this.props.nav }>
                    {this.props.location.pathname === "/gamePage" && this.props.stateNav ? "Reprendre la partie" : "Commencer la partie"}
                    </Link></li>
                    {/* <li>Tableau des scores</li> */}
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

export default withRouter(NavPage);