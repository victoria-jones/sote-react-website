import '../styles/components/header.styles.scss';

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CustomButton from './custom-button.component';

import bg_video from '../assets/videos/bg_video_01.mp4';
import sote_full_logo from '../assets/logos/sote-logo-expanded_white.png';
import sote_full_logo_stacked from '../assets/logos/sote-logo-stacked-simple_white.png';

import { ReactComponent as ArrowUpIcon } from '../assets/icons/arrow-with-circle-up.svg';
import { ReactComponent as ArrowDownIcon } from '../assets/icons/arrow-with-circle-down.svg';
import { ReactComponent as ClockIcon } from '../assets/icons/clock.svg';
import { ReactComponent as DropletIcon } from '../assets/icons/droplet.svg';
import { ReactComponent as HomeIcon } from '../assets/icons/home3.svg';
import { ReactComponent as LeafIcon } from '../assets/icons/leaf.svg';
import { ReactComponent as SunIcon } from '../assets/icons/sun.svg';

export default function Header ({ classNames, children }) {
    const { pathname } = useLocation();

    switch(pathname) {
        case '/':
            return(
                <header className={`header home__header`}>
                    <img src={sote_full_logo} alt="Salt Of The Earth Nursery" className="header__img home__header__img header__img--big" />
                    <img src={sote_full_logo_stacked} alt="Salt Of The Earth Nursery" className="header__img home__header__img header__img--small" />
                    <CustomButton
                        linkToPage="genetics"
                        className="header__btn home__header__btn margin-top-med"
                    >
                        View Genetics
                    </CustomButton>

                    <div className="bg-video">
                        <video className="bg-video__content" autoPlay muted loop playsInline>
                            <source src={bg_video} type="video/mp4" />
                            Your browser does not support this video :(
                        </video>
                    </div>
                </header>
            );

        case '/about':
            return(
                <header className="header whoweare alt-header">
                    <h1 className="whoweare__header header-1 page-header">Who We Are</h1>
                    <div className="alt-header__p-container whoweare__p-container">
                        <p className="alt-header__p">
                            “The mission of Salt of The Earth is to leave the best impression possible as a result of thorough product development, passion, and Salt of the Earth values. To provide a wholesome product and experience to all customers. To take pride in growing fully organic plants with the intent and purpose that some of them will help people with illnesses, mental suffering, or drug addiction.”
                        </p>
                    </div>
                </header>
            );

        case '/genetics':
            return(
                <header className="header genetics__header alt-header">
                    <h1 className="page-header header-1 genetics__page-header">Genetics</h1>
                    <div className="contact__header torn-edge margin-bottom-med margin-top-med">
                        <div className="contact__header--wrapper genetics__header--wrapper">
                            <p className="contact__p">
                                Salt of The Earth Nursery is dedicated to providing cultivators, both at a home and on a commercial scale, with seedlings (clones) that put them in a position to produce the highest quality, most healing medicine possible. Through research and development, we have established optimal cloning techniques. 
                            </p>
                            <p className="contact__p">
                                All of our product is organic.
                            </p>
                            <div className="genetics__key">
                                <h3 className="genetics__key--title">Genetics Key:</h3>

                                <ul className="genetics__key--list">
                                    <li className="genetics__key--item genetics__key--item--1">
                                        <ArrowUpIcon className="genetics__key--icon" />
                                        <span className="genetics__key--icon-name">Sativa/Sativa dominant</span>
                                    </li>
                                    <li className="genetics__key--item genetics__key--item--2">
                                        <ArrowDownIcon className="genetics__key--icon" />
                                        <span className="genetics__key--icon-name">Indica/Indica dominant</span>
                                    </li>
                                    <li className="genetics__key--item genetics__key--item--3">
                                        <HomeIcon className="genetics__key--icon" />
                                        <span className="genetics__key--icon-name">Grows Indoors</span>
                                    </li>
                                    <li className="genetics__key--item genetics__key--item--4">
                                        <SunIcon className="genetics__key--icon" />
                                        <span className="genetics__key--icon-name">Grows Outdoors</span>
                                    </li>
                                    <li className="genetics__key--item genetics__key--item--5">
                                        <ClockIcon className="genetics__key--icon" />
                                        <span className="genetics__key--icon-name">Grow Time</span>
                                    </li>
                                    <li className="genetics__key--item genetics__key--item--6">
                                        <LeafIcon className="genetics__key--icon" />
                                        <span className="genetics__key--icon-name">Yield</span>
                                    </li>
                                    <li className="genetics__key--item genetics__key--item--7">
                                        <DropletIcon className="genetics__key--icon" />
                                        <span className="genetics__key--icon-name">THC Content</span>
                                    </li>
                                </ul>
                            </div>
                        </div>    
                    </div>
                </header>
            );

        case '/consultation':
            return(
                <header className="header consultation alt-header">
                    <h1 className="consultation__header header-1 page-header">Consultations</h1>
                    <div className="alt-header__p-container consultation__p-container">
                        <div className="consultation__p-container--part consultation__p-container--part-1">
                            <div className="consultation__p-container__image hex-image">
                                set image as background-image
                            </div>

                            <div className="consultation__p-container__image-caption">
                                <span className="consultation__p-container__image-caption--header">
                                    Brent Jesien
                                </span>

                                <div className="consultation__p-container__image-caption--about">
                                    <span className="consultation__p-container__image-caption--about-part">
                                        CEO/founder Salt of the earth nursery($10M+ net yearly profit~100,000square feet)
                                    </span>
                                    <span className="consultation__p-container__image-caption--about-part">
                                        Bachelors of science degree in biology and chemistry
                                    </span>  
                                </div>
                            </div>
                        </div>
                        
                        <div className="consultation__p-container--part consultation__p-container--part-2">
                            <ul className="clones__list list">
                                <li className="clones__item list__item">10+ years practicing cannabis cultivation</li>
                                <li className="clones__item list__item">5+ years as GM/Director of cannabis cultivation/production in the legal/commercial cannabis space</li>
                                <li className="clones__item list__item">Retrofitted/designed and operated 6 different greenhouses for multiple cannabis companies totaling 200,000 square feet of flower and over 100,000 square feet of nursery</li>
                                <li className="clones__item list__item">Helped multiple multi-million dollar companies get started and produce profitable flower cultivation’s including SOTE</li>
                            </ul>
                        </div>
                          
                    </div>
                </header>
            );

        case '/contact':
            return(
                <header className="main-contact">
                    
                </header>
            );

        default:
           return null; 
    }
}