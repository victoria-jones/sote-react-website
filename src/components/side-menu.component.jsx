import '../styles/components/side-menu.styles.scss';

export default function SideMenu () {
    //links loaded in via json object in original website 

    return(
        <nav className="genetics__side-menu">

            <input type="checkbox" className="genetics__side-menu__checkbox" id="genetics__side-menu-toggle" />
            <label for="genetics__side-menu-toggle" class="genetics__side-menu__button">
                <span className="genetics__side-menu__icon">&nbsp;</span>
                <h3 className="genetics__side-menu__header header-3">Strain List</h3>
            </label>
            
            <ul class="genetics__side-menu--list" id="genetics-link-list">
                    <li class="genetics__side-menu--item"><a href="#" class="genetics__side-menu--link link--green">test list item</a></li>
                    <li class="genetics__side-menu--item"><a href="#" class="genetics__side-menu--link link--green">test list item</a></li>
                    <li class="genetics__side-menu--item"><a href="#" class="genetics__side-menu--link link--green">test list item</a></li>
                    <li class="genetics__side-menu--item"><a href="#" class="genetics__side-menu--link link--green">test list item</a></li>
                    <li class="genetics__side-menu--item"><a href="#" class="genetics__side-menu--link link--green">test list item</a></li>
                    <li class="genetics__side-menu--item"><a href="#" class="genetics__side-menu--link link--green">test list item</a></li>
                    <li class="genetics__side-menu--item"><a href="#" class="genetics__side-menu--link link--green">test list item</a></li>
            </ul>
        </nav>
    );
}