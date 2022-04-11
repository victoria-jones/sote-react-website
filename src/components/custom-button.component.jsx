import { useContext } from 'react';
import PopupContext from '../context/popupContext.component';
import { Link } from 'react-router-dom';
import '../styles/components/custom-button.styles.scss';

export default function CustomButton ({ children, linkToPage, className, notALink, activatePopup }) {
    const { setPopup } = useContext(PopupContext);
    
    switch (activatePopup) {
        case true:
            return(
                <div className={`btn ${className}`} 
                    onClick={() => setPopup(true)}
                >
                    { children }
                </div>
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