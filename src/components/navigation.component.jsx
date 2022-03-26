import { Link } from 'react-router-dom';
import WebsiteLink from './website-link.component';

import '../styles/components/navigation.styles.scss';

import { ReactComponent as FacebookIcon } from '../assets/icons/facebook.svg';
import { ReactComponent as InstagramIcon } from '../assets/icons/instagram.svg';
import { ReactComponent as SoteIcon } from '../assets/icons/SOTE_mobile.svg';
import soteLogo from '../assets/logos/SOTE_logo.png';

export default function Navigation () {
    return(
        <div class="nav-main">

            <input type="checkbox" class="nav-mobile__checkbox" id="nav-mobile-toggle" />
            <label for="nav-mobile-toggle" class="nav-mobile__button">
                <span class="nav-mobile__icon">&nbsp;</span>
            </label>
            <div class="nav-mobile__background">&nbsp;</div>
            <Link to="/">
                <SoteIcon className="nav-mobile__img" />
            </Link>
            

            <nav class="nav-main__header">
                <div class="nav-main__img-holder">
                    <Link to="/"><img src={soteLogo} alt="SOTE logo" class="nav-main__img" /></Link>    
                </div>
                <div class="social-nav nav-main__social-nav">
                    <ul class="social-nav__list">
                        <li class="social-nav__item">
                            <a href="https://www.facebook.com/SOTEnursery/" class="social-nav__link">
                                <FacebookIcon className="social-nav__icon" />
                            </a>
                        </li>
                        <li class="social-nav__item">
                            <a href="https://www.instagram.com/sotenursery/" class="social-nav__link">
                                <InstagramIcon className="social-nav__icon" />
                            </a> 
                        </li>
                    </ul>
                </div>
            </nav>

            <nav class="site-nav">
                
                <ul class="site-nav__list">
                    <input type="checkbox" class="site-nav__checkbox" id="nav-droptoggle" />
                    <li class="site-nav__item"><a href="#" class="site-nav__link">Home</a></li>
                    <label for="nav-droptoggle" class="site-nav__dropbtn">
                        <li class="site-nav__item site-nav__link site-nav__droplist">About us <div class="site-nav__dropicon"></div>
                            <ul class="site-nav__dropdown">
                                <li class="site-nav__dropitem"><a href="whoweare.html" class="site-nav__droplink link">Who we are</a></li>
                                <li class="site-nav__dropitem"><a href="meetthefamily.html" class="site-nav__droplink link">Meet the family</a></li>
                            </ul>
                        </li> 
                    </label>  
                    <li class="site-nav__item"><a href="genetics.html" class="site-nav__link">Genetics</a></li>
                    <li class="site-nav__item"><a href="consultation.html" class="site-nav__link">Consultations</a></li>
                    <li class="site-nav__item"><a href="merch.html" class="site-nav__link">Merch</a></li>
                    <li class="site-nav__item"><a href="contact.html" class="site-nav__link">Contact us</a></li>
                </ul>
            </nav>

        </div> 
    );
}