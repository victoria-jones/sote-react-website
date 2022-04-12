import { useState, useEffect, useContext } from 'react';
import '../styles/components/popup.styles.scss';
import PopupContext from '../context/popupContext.component';

import StrainQuickview from './strain_quickview.component';
import ContactPopup from './contact_popup.component';
import EmailSuccessful from './email-successful_popup.component';

export default function Popup () {
    const { popup, setPopup, popupType } = useContext(PopupContext);

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
                
                { 
                    popupType === "genetics" ?
                    <StrainQuickview />
                    :
                        popupType === "contact" ?
                    <ContactPopup />
                    :
                    <EmailSuccessful />
                }
                
            </div>
        </div>
    );
}