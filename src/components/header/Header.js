import React, { Component } from "react";
import MenuBurger from "./MenuBurger";
import LeafBlock from "./LeafBlock";
import Style from "./Header.module.scss";
import { withRouter } from "react-router-dom";

class Header extends Component{
    
    render(){
        return (
            <div className={ Style.container }>
                <MenuBurger nav={ this.props.nav } stateNav={ this.props.stateNav }/>
                <LeafBlock/>
            </div>
        )
    }
}

export default withRouter(Header);