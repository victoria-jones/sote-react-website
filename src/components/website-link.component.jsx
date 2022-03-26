import { Link } from 'react-router-dom';

import '../styles/components/link.styles.scss';

const WebsiteLink = ({ link, linkColor, linkLocation, children }) => (
    <Link to={`/${link === 'home' ? '' : link}`} 
        class="footer-nav__link link link__white"
        className={`link ${linkLocation}__link link__${linkColor}`}>
        { children }
    </Link>
);

export default WebsiteLink;