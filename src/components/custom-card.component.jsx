import '../styles/components/custom-card.styles.scss';

import { ReactComponent as ArrowUpIcon } from '../assets/icons/arrow-with-circle-up.svg';
import { ReactComopnent as ArrowDownIcon } from '../assets/icons/arrow-with-circle-down.svg';
import { ReactComponent as HomeIcon } from '../assets/icons/home3.svg';
import { ReactComponent as SunIcon } from '../assets/icons/sun.svg';

export default function CustomCard () {
    return(                           
            <div className="genetics-card">
                <div className="genetics-card__img">
                    img
                </div>
                <div className="genetics-card__info">
                    <h3 className="genetics-card__header header-3">Strain Name</h3>
                    <div className="genetics-card__type">
                        <ArrowUpIcon className="genetics__key--icon genetics-card__type--icon--1" />
                        <span className="genetics__key--icon-name">Indica</span>
                    </div>
                    <div className="genetics-card__care">
                        <HomeIcon className="genetics__key--icon genetics-card__type--icon--3" />
                        <SunIcon className="genetics__key--icon genetics-card__type--icon--4" />
                        <span className="genetics__key--icon-name">Grows Indoors/Outdoors</span>
                    </div>
                    <div className="genetics-card__btns">
                        <a href="#" class="card-btn">Contact Us</a>
                        <a href="#" class="card-link">Quick View</a>
                    </div> 
                </div>
            </div>
    );   
}