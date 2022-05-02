import '../styles/components/footer.styles.scss';

import WebsiteLink from './website-link.component';
import SocialNav from './social-nav.component';

import soteLogo from '../assets/logos/sote-symbol-with-logo.png';

export default function Footer () {
    const date = new Date();
    const year = date.getFullYear();

    return(
        <footer className="footer">
            <img src={soteLogo} alt="SOTE logo" className="footer__img" />

            <nav className="footer-nav">
                <ul className="footer-nav__list">
                    <li className="footer-nav__item"><WebsiteLink link="about" linkColor="white" linkClass="footer-nav__link">About</WebsiteLink></li>
                    <li className="footer-nav__item"><WebsiteLink link="genetics" linkColor="white" linkClass="footer-nav__link">Genetics</WebsiteLink></li>
                    <li className="footer-nav__item"><WebsiteLink link="contact" linkColor="white" linkClass="footer-nav__link">Contact</WebsiteLink></li>
                </ul>
            </nav>
            
            <SocialNav navClass="footer__social-nav" />

            <p>&copy;{year} Salt of the Earth Nursery</p>
        </footer>
    );
}