import React, { Component } from "react";
import Style from "./MenuBurger.module.scss";
import { withRouter } from "react-router-dom";

class MenuBurger extends Component {
    
    render(){
        console.log(this.props.stateNav);
        return (
            <div className={ Style.menuBurger } onClick={ this.props.nav }>
                <span className={ this.props.stateNav === true ? 
                    Style.span1Forward :
                    Style.span1Reverse
                }/>
                <span className={ this.props.stateNav === true ? 
                    Style.span2Forward :
                    Style.span2Reverse
                }/>
                <span className={ this.props.stateNav === true ? 
                    Style.span3Forward :
                    Style.span3Reverse
                }/>
            </div>
        )
    }
}

export default withRouter(MenuBurger);