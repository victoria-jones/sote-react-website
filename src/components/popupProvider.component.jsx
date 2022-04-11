import { useState } from 'react';
import PopupContext from '../context/popupContext.component';

export default function PopupProvider ({ children }) {
    //shared state
    const [popup, setPopup] = useState(false);

    //bundle
    const value = { popup, setPopup };

    return(
        <PopupContext.Provider value={value}>
            { children }
        </PopupContext.Provider>
    );
}