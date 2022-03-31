/*
*   MAIN HTML COMPONENT
*   
*   some pages like the contact page need a class appended to the main element for
*   currently existing styles. This is so it can work with the way the css grid is 
*   layed out.
*
*/

import { useLocation } from 'react-router-dom';

import '../styles/components/main.styles.scss';

export default function Main ({ children }) {
    const { pathname } = useLocation();

    switch(pathname){
        case '/contact':
            return(
                <main className="main-contact">
                    { children }
                </main>
            );
        
        default:
            return(
                <main>
                    { children }
                </main>
            );
    }
}