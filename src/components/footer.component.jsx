import '../styles/components/footer.styles.scss';

import WebsiteLink from './website-link.component';

import soteLogo from '../assets/logos/SOTE_logo.png';
import { ReactComponent as FacebookIcon } from '../assets/icons/facebook.svg';
import { ReactComponent as InstagramIcon } from '../assets/icons/instagram.svg';

export default function Footer () {
    const date = new Date();
    const year = date.getFullYear();

    return(
        <footer class="footer">
            <img src={soteLogo} alt="SOTE logo" class="footer__img" />

            <nav class="footer-nav">
                <ul class="footer-nav__list">
                    <li class="footer-nav__item"><WebsiteLink link="about" linkColor="white" className="footer-nav__link">About</WebsiteLink></li>
                    <li class="footer-nav__item"><WebsiteLink link="genetics" linkColor="white" className="footer-nav__link">Genetics</WebsiteLink></li>
                    <li class="footer-nav__item"><WebsiteLink link="contact" linkColor="white" className="footer-nav__link">Contact</WebsiteLink></li>
                </ul>
            </nav>
            
            <nav class="social-nav footer__social-nav">
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
            </nav>

            <p>&copy;{year} Salt of the Earth Nursery</p>
        </footer>
    );
}