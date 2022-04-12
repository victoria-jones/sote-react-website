import { useContext } from 'react';
import PopupContext from '../context/popupContext.component';
import { Link } from 'react-router-dom';
import '../styles/components/custom-button.styles.scss';

export default function CustomButton ({ children, linkToPage, className, notALink, activatePopup, emailSend }) {
    const { setPopup, setPopupType } = useContext(PopupContext);
    
    switch (activatePopup) {
        case true:
            if(emailSend) {
                return(
                    <button className={`btn
                        ${className ? className : ''}
                    `}
                        onClick={() => {
                            setPopup(true);
                            setPopupType("emailSuccessful");
                        }}
                    >
                        { children }
                    </button>
                );
            } else {
                return(
                    <div className={`btn ${className}`} 
                        onClick={() => {
                            setPopup(true);
                            setPopupType("contact");
                        }}
                    >
                        { children }
                    </div>
                );
            }
        default:
            return(
                <Link to={`/${linkToPage === 'home' ? '' : linkToPage}`}
                className={`btn ${className}`}>
                    { children }
                </Link>
            );
    }
}