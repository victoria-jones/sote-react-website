import '../styles/components/drop-down-list-infobox.styles.scss';

export default function DropDownListInfoBox ({ listItems }) {

    return(
        <ul className="drop-down-list specialties__drop-down-list">
            {
                listItems.map((listItem) =>
                    <li className="drop-down-list__item" key={`drop-down-list__item--${listItems.indexOf(listItem)}`}>
                        <div className="drop-down-list__item--wrapper" key={`drop-down-list__item--wrapper--${listItems.indexOf(listItem)}`}>
                            { listItem.name }
                            {
                                listItem.info ?
                                (
                                    <div className="drop-down-list__dropicon"></div>
                                )
                                :
                                ''
                            }
                        </div>
                        { 
                            listItem.info ? 
                            (
                                <ul className="drop-down-list__drop__list">
                                    <li className="drop-down-list__drop__item">{ listItem.info }</li>
                                </ul>
                            )
                            :
                            null
                        }
                    </li>
                )
            }
        </ul>
    );
}