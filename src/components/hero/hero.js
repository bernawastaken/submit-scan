import React from "react";
import "../global.css";
import "../reset.css";
import "./hero.css"
import "../fonts/type.css"
import logo from "../../images/glowie.png" 
import ReactTooltip from 'react-tooltip'
import tooltip from "../../images/tooltip.png"

class Hero extends React.Component {
    render() {
        return (
            <nav>
                <section className="nav__txt">
                    <section className="nav__txt--logo">
                    <img className="img__logo" src={logo} alt="Glowing Player"/> 
                    <h1>Submit Scan</h1>
                    </section>
                    <h2>Among Us Diagnosis</h2>
                    <h4 className="nav__txt--summary">Fill out your <span data-tip="React-tooltip" className="nav__txt--tooltip">game statistics</span> to generate insight on the type of player you are in Among Us.</h4>
                    <ReactTooltip backgroundColor='#000000' border={true} effect='float'>
                        <img src={tooltip} width="500"/>
                    </ReactTooltip>
                </section>
                <section className="buttonLine__wrapper">
                    <button type="submit" className="button__default"><h3>Enter Data</h3></button>
                    <div className="buttonLine"></div>
                </section>
            </nav>
        );
    }
}

export default Hero
