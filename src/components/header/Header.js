import React, { Component } from "react";
import MenuBurger from "./MenuBurger";
import LeafBlock from "./LeafBlock";
import Style from "./Header.module.scss";
import { withRouter } from "react-router-dom";

class Header extends Component{

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         show: false
    //     }
    // }

    // toggle = () => {
    //     this.setState({
    //         show: !this.state.show
    //     })
    // }
    
    render(){
        return (
            <div className={ Style.container }>
                <MenuBurger/>
                <LeafBlock/>
            </div>
        )
    }
}

export default withRouter(Header);