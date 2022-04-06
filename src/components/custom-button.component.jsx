import '../styles/components/custom-button.styles.scss';
import { Link } from 'react-router-dom';

export default function CustomButton ({ children, linkToPage, className, notALink }) {
    switch (notALink) {
        case true:
            return(
                <div className={`btn ${className}`}>{ children }</div>
            );
        default:
            return(
                <Link to={`/${linkToPage === 'home' ? '' : linkToPage}`}
                className={`btn ${className}`}>
                    { children }
                </Link>
            );
    }
}