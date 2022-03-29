import { Link } from 'react-router-dom';

import '../styles/components/link.styles.scss';

const WebsiteLink = ({ link, linkColor, linkLocation, linkClass, children }) => (
    <Link to={`/${link === 'home' ? '' : link}`} 
        className={`link 
            ${linkColor ? `link__${linkColor}` : ''}
            ${linkLocation ? `${linkLocation}__link` : ''}
            ${linkLocation}__link
            ${linkClass}`}>
        { children }
    </Link>
);

export default WebsiteLink;