import React from "react";
import Style from "./WhoIAm.module.scss";
import maPhoto from "../../assets/img/photoId.png";

const WhoIAm = () => {
    return (
        <section className={ Style.whoIAm }>
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
                        <img alt="html" src={require("../../assets/img/html5.svg")} className={ Style.sizeIcon }/>
                    </li>
                    <li>
                        <img alt="css" src={require("../../assets/img/css.svg")} className={ Style.sizeIcon }/>
                    </li>
                    <li>
                        <img alt="sass" src={require("../../assets/img/sass.svg")} className={ Style.sizeIcon }/>
                    </li>
                    <li>
                        <img alt="js" src={require("../../assets/img/js.svg")} className={ Style.sizeIcon }/>
                    </li>
                    <li>
                        <img alt="react" src={require("../../assets/img/react.svg")} className={ Style.sizeIcon }/>
                    </li>
                    <li>
                        <img alt="formik" src={require("../../assets/img/formik.svg")} className={ Style.sizeIcon }/>
                    </li>
                    <li>
                        <img alt="babel" src={require("../../assets/img/babel.svg")} className={ Style.sizeIcon }/>
                    </li>
                    <li>
                        <img alt="git" src={require("../../assets/img/github.svg")} className={ Style.sizeIcon }/>
                    </li>
                    <li>
                        <img alt="webpack" src={require("../../assets/img/webpack.svg")} className={ Style.sizeIcon }/>
                    </li>
                    <li>
                        <img alt="bootstrap" src={require("../../assets/img/bootstrap.svg")} className={ Style.sizeIcon }/>
                    </li>
                </ul>
            </section>
        </section>
    )
}

export default WhoIAm;