import { useState } from 'react';
import PopupContext from './popupContext.component';

export default function PopupProvider ({ children }) {
    //shared state
    const [popup, setPopup] = useState(false);
        //this will only take "contact", "genetics", "emailSuccessful"
    const [ popupType, setPopupType ] = useState("genetics");

    //bundle
    const value = { popup, setPopup, popupType, setPopupType };

    return(
        <PopupContext.Provider value={value}>
            { children }
        </PopupContext.Provider>
    );
}