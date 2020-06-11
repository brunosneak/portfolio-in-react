import React from "react";
import Style from "./Experience.module.scss";

const Experience = () => {
    return (
        <section className={ Style.xp }>
            <div className={ Style.lycee }>
                <div>
                    <h2>2004 - Lycée Henri Sellier</h2>
                    <p>BEP Vente Action <br/> Marchande</p>
                </div>
                <img alt="livre" src={require("../../assets/imgCv/formationLycee.png")}/>
            </div>
            <div className={ Style.acf }>
                <div>
                    <h2>2006 - Aviation Club de France</h2>
                    <p>Formation Croupier Poker</p>
                </div>
                <img alt="cartes de jeux" src={require("../../assets/imgCv/formationCroupier.png")}/>
            </div>
            <div className={ Style.croupier }>
                <div>
                    <h2>2006 - 2014</h2>
                    <p>Croupier Poker</p>
                </div>
                <img alt="tableau vide" src={require("../../assets/imgCv/fondExperience.svg")}/>
            </div>
            <div className={ Style.stockiste }>
                <div>
                    <h2>2014 - 2018</h2>
                    <p>Stockiste Prada Faubourg</p>
                </div>
                <img alt="tableau vide" src={require("../../assets/imgCv/fondExperience.svg")}/>
            </div>
            <div className={ Style.eMultiM }>
                <div>
                    <h2>2016 - Ecole Multimédia</h2>
                    <p>Certification professionnelle de niveau 6 "Développeur Multimédia"</p>
                </div>
                <img alt="fenêtre html" src={require("../../assets/imgCv/formationDev.png")}/>
            </div>
            <div className={ Style.eCom }>
                <div>
                    <h2>2018</h2>
                    <p>Coordinateur E-Commerce Europe Givenchy</p>
                </div>
                <img alt="tableau vide" src={require("../../assets/imgCv/fondExperience.svg")}/>
            </div>
            <div className={ Style.ifocop }>
                <div>
                    <h2>2019 - IFOCOP</h2>
                    <p>Formation Développeur FullStack jS</p>
                </div>
                <img alt="fenêtre html js" src={require("../../assets/imgCv/formationDevJs.png")}/>
            </div>
        </section>
    )
}

export default Experience;