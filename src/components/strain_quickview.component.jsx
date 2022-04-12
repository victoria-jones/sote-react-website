import '../styles/components/strain_quickview.styles.scss';

import CustomButton from './custom-button.component';

import { ReactComponent as ArrowUpIcon } from '../assets/icons/arrow-with-circle-up.svg';
import { ReactComponent as ArrowDownIcon } from '../assets/icons/arrow-with-circle-down.svg';
import { ReactComponent as HomeIcon } from '../assets/icons/home3.svg';
import { ReactComponent as SunIcon } from '../assets/icons/sun.svg';
import { ReactComponent as ClockIcon } from '../assets/icons/clock.svg';
import { ReactComponent as LeafIcon } from '../assets/icons/leaf.svg';
import { ReactComponent as DropletIcon } from '../assets/icons/droplet.svg';

import testBudImage from '../assets/images/cherry_buds_closeup.jpg';

export default function StrainQuickview () {
    return(
        <div className="genetics-popup__quickview">
            <div className="genetics-popup__img"
                style={{ backgroundImage: `url(${testBudImage})` }}
            >    
            </div>
            
            <div className="genetics-popup__info">
                <h3 className="genetics-popup__header header-3">Test Title</h3>

                <div className="genetics-popup__type genetics-popup__key-info">

                    <ArrowUpIcon className="genetics__key--icon genetics-card__type--icon--1" />
                    <span className="genetics__key--icon-name">Sativa</span>

                </div>

                <div className="genetics-popup__care genetics-popup__key-info">

                    <HomeIcon className="genetics__key--icon genetics-card__type--icon--3" />
                    <SunIcon className="genetics__key--icon genetics-card__type--icon--4" />
                    <span className="genetics__key--icon-name">Grows Indoors/Outdoors</span>

                </div>

                <div className="genetics-popup__growtime genetics-popup__key-info">
                    
                    <ClockIcon className="genetics__key--icon genetics-card__type--icon--5" />
                    <span className="genetics__key--icon-name">8-9 Week Grow Time</span>

                </div>

                <div className="genetics-popup__yield genetics-popup__key-info">

                    <LeafIcon className="genetics__key--icon genetics-card__type--icon--6" />
                    <span className="genetics__key--icon-name">High Yield</span>

                </div>
                <div className="genetics-popup__THC genetics-popup__key-info">

                    <DropletIcon className="genetics__key--icon genetics-card__type--icon--7" />
                    <span className="genetics__key--icon-name">22-27%</span>

                </div>

                <div className="genetics-popup__details">

                    <p className="genetics-popup__p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo cupiditate provident, dolorum unde ipsa eaque praesentium animi aspernatur quia saepe est corporis, inventore aliquid dolorem repellat eius laboriosam. Illum, numquam!
                    </p>

                </div>
                
                <CustomButton notALink activatePopup className="card-btn">Contact Us</CustomButton>
            </div>
        </div> 
    );
}