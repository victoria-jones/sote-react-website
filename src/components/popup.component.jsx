import { useState, useEffect, useContext } from 'react';
import '../styles/components/popup.styles.scss';
import PopupContext from '../context/popupContext.component';

export default function Popup () {
    const { popup, setPopup } = useContext(PopupContext);

    const togglePopup = () => {
        setPopup(false);
    }

    return(
        <div className={`genetics-popup
            ${popup ? 'popup__open' : 'popup'}
        `}>
            <div className={`genetics-popup--wrapper
                ${popup ? 'popup__open--wrapper' : 'popup--wrapper'}
            `}> 

                <div className="genetics-popup__close-btn popup__close-btn" onClick={() => setPopup(false)}>
                    <span className="genetics-popup__icon popup__icon">&nbsp;</span>
                </div>
                
            </div>
        </div>
    );
}