import React, { Component } from "react";
import Style from "./MenuBurger.module.scss";
import { withRouter } from "react-router-dom";

class MenuBurger extends Component {

    render(){
        return (
            <div className={ Style.menuBurger }>
                <span className={ this.props.history.location.pathname === "/navPage" ? 
                    Style.span1Forward :
                    Style.span1Reverse
                }/>
                <span className={ this.props.history.location.pathname === "/navPage" ? 
                    Style.span2Forward :
                    Style.span2Reverse
                }/>
                <span className={ this.props.history.location.pathname === "/navPage" ? 
                    Style.span3Forward :
                    Style.span3Reverse
                }/>
            </div>
        )
    }
}

export default withRouter(MenuBurger);