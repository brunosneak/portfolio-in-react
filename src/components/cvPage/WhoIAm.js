import React from "react";
import Header from "../header/Header";
import LeafBlock from "../header/LeafBlock";
import Style from "./WhoIAm.module.scss";
import maPhoto from "../../assets/imgCv/photoId.png";

const WhoIAm = () => {
    return (
        <section className={ Style.whoIAm }>
            <Header/>
            <LeafBlock/>
            <section className={ Style.profile }>
                <div className={Style.wrapperPhoto }>
                    <img alt="neak bruno" src={ maPhoto } className={ Style.photo }/>
                </div>
                <section className={ Style.description }>
                    <p>BONJOUR</p>
                    <p>Je suis NEAK Bruno</p>
                    <p>Développeur front-end React junior</p>
                    <article>
                        Diplômé d’une certification professionnelle de niveau 6, à l’école-multimédia, j’ai également entrepris de me
                        spécialiser dans le javaScript au sein de l’organisme de IFOCOP.
                        Mes qualités : Assimiler rapidement, m’adapter à mon environnement et le travail d’équipe.
                        Je suis également une personne d’humeur joviale, altruiste et observatrice, autant d’atouts
                        qui assureront un climat de sérénité et de challenge au sein de votre équipe.<br/><br/>
                        <strong>
                            Je suis actuellement à la recherche d'un emploi, et disponible immédiatement,
                            en tant que developpeur front-end React junior.
                        </strong>
                    </article>
                </section>
            </section>
            <section className={ Style.technoIcons }>
                <ul>
                    <li>
                        <img alt="html" src={require("../../assets/imgCv/html5.svg")} className={ Style.sizeIcon }/>
                    </li>
                    <li>
                        <img alt="css" src={require("../../assets/imgCv/css.svg")} className={ Style.sizeIcon }/>
                    </li>
                    <li>
                        <img alt="sass" src={require("../../assets/imgCv/sass.svg")} className={ Style.sizeIcon }/>
                    </li>
                    <li>
                        <img alt="js" src={require("../../assets/imgCv/js.svg")} className={ Style.sizeIcon }/>
                    </li>
                    <li>
                        <img alt="jquery" src={require("../../assets/imgCv/react.svg")} className={ Style.sizeIcon }/>
                    </li>
                    <li>
                        <img alt="angular" src={require("../../assets/imgCv/formik.svg")} className={ Style.sizeIcon }/>
                    </li>
                    <li>
                        <img alt="node" src={require("../../assets/imgCv/babel.svg")} className={ Style.sizeIcon }/>
                    </li>
                    <li>
                        <img alt="git" src={require("../../assets/imgCv/github.svg")} className={ Style.sizeIcon }/>
                    </li>
                    <li>
                        <img alt="mongo" src={require("../../assets/imgCv/webpack.svg")} className={ Style.sizeIcon }/>
                    </li>
                    <li>
                        <img alt="mongo" src={require("../../assets/imgCv/bootstrap.svg")} className={ Style.sizeIcon }/>
                    </li>
                </ul>
            </section>
        </section>
    )
}

export default WhoIAm;