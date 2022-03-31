import '../styles/components/filter-menu.styles.scss';

export default function FilterMenu () {
    return (
        <div className="genetics-filter">
            <div className="genetics-filter--wrapper">

                <label htmlFor="genetics-filter-select" className="genetics-filter__label">Filter View:</label>
                <select name="genetics-filter-select" id="genetics-filter-select" className="genetics-filter__menu">
                    <option className="genetics-filter__option" value="none">Show all</option>
                    <option className="genetics-filter__option" value="indica">Indica</option>
                    <option className="genetics-filter__option" value="sativa">Sativa</option>
                    <option className="genetics-filter__option" value="hybrid">Hybrid</option>
                    <option className="genetics-filter__option" value="indoors">Grows Indoors</option>
                    <option className="genetics-filter__option" value="outdoors">Grows Outdoors</option>
                </select>

            </div>  
        </div>
    );
}