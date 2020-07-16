import React, { Component } from "react";
import MenuBurger from "./MenuBurger";
import LeafBlock from "./LeafBlock";
import Style from "./Header.module.scss";
import { withRouter } from "react-router-dom";

class Header extends Component{
    
    render(){
        return (
            <div className={ Style.container }>
                <MenuBurger nav={ this.props.nav } stateNav={ this.props.stateNav } stateGame={ this.props.stateGame }/>
                <LeafBlock stateNav={ this.props.stateNav }/>
            </div>
        )
    }
}

export default withRouter(Header);