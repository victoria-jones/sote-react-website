import '../styles/components/side-menu.styles.scss';

import WebsiteLink from './website-link.component';
import strains from '../assets/json/strains.json';

export default function SideMenu ({ listItems }) {
    return(
        <nav className="genetics__side-menu">

            <input type="checkbox" className="genetics__side-menu__checkbox" id="genetics__side-menu-toggle" />
            <label htmlFor="genetics__side-menu-toggle" className="genetics__side-menu__button">
                <span className="genetics__side-menu__icon">&nbsp;</span>
                <h3 className="genetics__side-menu__header header-3">Strain List</h3>
            </label>
            
            <ul className="genetics__side-menu--list" id="genetics-link-list">
                {
                    listItems.map((item, key) => {
                        return(
                            <li className="genetics__side-menu--item" key={`side-menu-item--${key}`}>
                                <WebsiteLink notALink linkClass="genetics__side-menu--link" linkColor="green" key={`side-menu-link--${key}`}>
                                    {item.name}
                                </WebsiteLink>
                            </li>
                        );
                    })
                }
            </ul>
        </nav>
    );
}