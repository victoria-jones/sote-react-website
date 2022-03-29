import { Link } from 'react-router-dom';

import WebsiteLink from './website-link.component';

import '../styles/components/navigation.styles.scss';

import { ReactComponent as FacebookIcon } from '../assets/icons/facebook.svg';
import { ReactComponent as InstagramIcon } from '../assets/icons/instagram.svg';
import { ReactComponent as SoteIcon } from '../assets/icons/SOTE_mobile.svg';
import soteLogo from '../assets/logos/SOTE_logo.png';

export default function Navigation () {
    return(
        <div className="nav-main">

            <input type="checkbox" className="nav-mobile__checkbox" id="nav-mobile-toggle" />
            <label htmlFor="nav-mobile-toggle" className="nav-mobile__button">
                <span className="nav-mobile__icon">&nbsp;</span>
            </label>
            <div className="nav-mobile__background">&nbsp;</div>
            <Link to="/">
                <SoteIcon className="nav-mobile__img" />
            </Link>
            

            <nav className="nav-main__header">
                <div className="nav-main__img-holder">
                    <Link to="/"><img src={soteLogo} alt="SOTE logo" className="nav-main__img" /></Link>    
                </div>
                <div className="social-nav nav-main__social-nav">
                    <ul className="social-nav__list">
                        <li className="social-nav__item">
                            <a href="https://www.facebook.com/SOTEnursery/" className="social-nav__link">
                                <FacebookIcon className="social-nav__icon" />
                            </a>
                        </li>
                        <li className="social-nav__item">
                            <a href="https://www.instagram.com/sotenursery/" className="social-nav__link">
                                <InstagramIcon className="social-nav__icon" />
                            </a> 
                        </li>
                    </ul>
                </div>
            </nav>

            <nav className="site-nav">
                
                <ul className="site-nav__list">
                    <input type="checkbox" className="site-nav__checkbox" id="nav-droptoggle" />
                    <li className="site-nav__item"><Link to="/" className="site-nav__link">Home</Link></li>
                    <li className="site-nav__item"><Link to="about" className="site-nav__link">About us</Link></li>
                    <li className="site-nav__item"><Link to="genetics" className="site-nav__link">Genetics</Link></li>
                    <li className="site-nav__item"><Link to="consultation" className="site-nav__link">Consultations</Link></li>
                    <li className="site-nav__item"><Link to="contact" className="site-nav__link">Contact us</Link></li>
                </ul>
            </nav>

        </div> 
    );
}