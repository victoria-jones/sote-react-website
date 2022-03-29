import '../styles/components/social-nav.styles.scss';

import { ReactComponent as FacebookIcon } from '../assets/icons/facebook.svg';
import { ReactComponent as InstagramIcon } from '../assets/icons/instagram.svg';

const SocialNav = ({ navClass, children }) => (
    <div className={`social-nav 
        ${navClass ? navClass : ''}`}
    >
        {children ? children : ''}
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
);

export default SocialNav;