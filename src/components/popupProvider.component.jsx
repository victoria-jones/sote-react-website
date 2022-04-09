import { useState } from 'react';
import PopupContext from './popupContext.component';

export default function PopupProvider ({ children }) {
    const [popup, setPopup] = useState(false);
    const value = { popup, setPopup };

    return(
        <PopupContext.Provider value={value}>
            { children }
        </PopupContext.Provider>
    );
}