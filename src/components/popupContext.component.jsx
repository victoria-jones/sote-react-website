import { createContext } from 'react';

const PopupContext = createContext({
    popup: '',
    setPopup: () => {}
});

export default PopupContext;