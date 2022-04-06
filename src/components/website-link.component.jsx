import { Link } from 'react-router-dom';

import '../styles/components/website-link.styles.scss';

export default function WebsiteLink ({ link, linkColor, linkLocation, linkClass, children, notALink }) {
     
    
    switch(notALink) {
        case true:
            return (
                <span 
                    className={`link link__span
                        ${linkColor ? `link--${linkColor}` : ''}
                        ${linkLocation ? `${linkLocation}__link` : ''}
                        ${linkLocation}__link
                        ${linkClass}`}>
                    { children }
                </span>
            );
        default:
            return (
                <Link to={`/${link === 'home' ? '' : link}`} 
                    className={`link 
                        ${linkColor ? `link__${linkColor}` : ''}
                        ${linkLocation ? `${linkLocation}__link` : ''}
                        ${linkLocation}__link
                        ${linkClass}`}>
                    { children }
                </Link>
            );
    }
}
