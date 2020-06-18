import React, { Component } from "react";
import Style from "./MenuBurger.module.scss";

class MenuBurger extends Component {

    constructor(props){
        super(props);
        this.state = {
            transition1: "",
            transition2: "",
            left1: 0,
            left3: 0,
            transform1: "",
            transform3: "",
            width: "",
            transformOrigin: "",
            opacity2: 1
        }
    }

    btnAnimate = () => {
        this.setState({
            transition1: "transform .5s, width .5s, left .5s",
            transition2: "opacity .5s",
            left1: "5px",
            left3: "3px",
            transform1: "rotate(45deg)",
            transform3: "rotate(-45deg)",
            width: "55%",
            transformOrigin: "top left",
            opacity2: 0
        })
    }

    btnAnimateReverse = () => {
        this.setState({
            transition1: "transform .5s, width .5s, left .5s",
            transition2: "opacity .5s",
            left1: 0,
            left3: 0,
            transform1: "rotate(0)",
            transform3: "rotate(0)",
            width: "50%",
            transformOrigin: "top left",
            opacity2: 1
        })
    }

    render(){
        return (
            <div className={ Style.menuBurger }
                 onClick={ this.state.left1 === 0 ? (this.btnAnimate) : (this.btnAnimateReverse) }
            >
                <span style={{ 
                    transition: this.state.transition1,
                    left: this.state.left1,
                    transform: this.state.transform1,
                    width: this.state.width,
                    transformOrigin: this.state.transformOrigin
                }}/>
                <span style={{
                    opacity: this.state.opacity2,
                    transition: this.state.transition2
                }}/>
                <span style={{ 
                    transition: this.state.transition1,
                    left: this.state.left3,
                    transform: this.state.transform3,
                    width: this.state.width,
                    transformOrigin: this.state.transformOrigin
                }}/>
            </div>
        )
    }
}

export default MenuBurger;