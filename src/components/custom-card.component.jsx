/*
*
*   for thumbnail image import to work as is the images neede to be loaded to the
*   "public/images/thumbnails" folder.
*
*   the images are dynamically added via the JSON image name
*
*/

//create an auto image functionality if the strain does not have a thumbnail image
    //style it to be greyed out with the words "no image"

import { useState, useEffect, useContext } from 'react';
import '../styles/components/custom-card.styles.scss';

import CustomButton from './custom-button.component';
import WebsiteLink from './website-link.component';
import { ReactComponent as ArrowUpIcon } from '../assets/icons/arrow-with-circle-up.svg';
import { ReactComponent as ArrowDownIcon } from '../assets/icons/arrow-with-circle-down.svg';
import { ReactComponent as HomeIcon } from '../assets/icons/home3.svg';
import { ReactComponent as SunIcon } from '../assets/icons/sun.svg';
import { ReactComponent as MountainLogo } from '../assets/logos/mountain_logo.svg';

export default function CustomCard ({ cardFill }) {

    const [strainGrow, setStrainGrow] = useState(null);
    const [strainType, setStrainType] = useState(null);

    useEffect(()=> {
        //create string dislayable string from grow/type lists
        let growList = [];
        let growText;
        for(let i in cardFill.grow){
            growText = cardFill.grow[i];
            growText = growText.charAt(0).toUpperCase() + growText.substr(1);
            growList.push(growText);
        }
        setStrainGrow(growList.join("/"));

        let typeList = [];
        let typeText;
        for(let i in cardFill.type){
            typeText = cardFill.type[i];
            typeText = typeText.charAt(0).toUpperCase() + typeText.substr(1);
            typeList.push(typeText);
        }
        setStrainType(typeList.join("-"));

    },[cardFill]);

    return( 

        <div className="genetics-card">
            {
                cardFill.thumbnailphoto === "no photo" || cardFill.thumbnailphoto === "" ?
                (
                    <div className="genetics-card__img"
                        style={{backgroundImage: "url(/images/thumbnails/nophoto-tb.jpg)"}}
                    >   
                        <div className="genetics-card__img--nophoto">
                            <span className="genetics-card__img--nophoto__text">no photo</span>
                            <MountainLogo className="genetics-card__img--nophoto__logo" />
                        </div>
                    </div>
                )
                :
                (
                    <div className="genetics-card__img"
                        style={{backgroundImage: "url(/images/thumbnails/"+cardFill.thumbnailphoto+")"}}
                    >
                        {cardFill.thumbnailphoto}
                    </div>
                )
            }
            
            <div className="genetics-card__info">
                <h3 className="genetics-card__header header-3">{cardFill.name}</h3>
                <div className="genetics-card__type">
                    {
                        cardFill.type[0] === "sativa" ?
                        <ArrowUpIcon className="genetics__key--icon genetics-card__type--icon--1" />
                        :
                        <ArrowDownIcon className="genetics__key--icon genetics-card__type--icon--2" />
                    }
                    <span className="genetics__key--icon-name">{strainType}</span>
                </div>
                    {
                        cardFill.grow.length > 1 ?
                        (
                            <div className="genetics-card__care">
                                <HomeIcon className="genetics__key--icon genetics-card__type--icon--3" />
                                <SunIcon className="genetics__key--icon genetics-card__type--icon--4" />
                                <span className="genetics__key--icon-name">Grows {strainGrow}</span>
                            </div>
                        )
                        :
                        cardFill.grow[0] === "indoors" ?
                        (
                            <div className="genetics-card__care">
                                <HomeIcon className="genetics__key--icon genetics-card__type--icon--3" />
                                <span className="genetics__key--icon-name">Grows {strainGrow}</span>
                            </div>
                        )
                        :
                        (
                            <div className="genetics-card__care">
                                <SunIcon className="genetics__key--icon genetics-card__type--icon--4" />
                                <span className="genetics__key--icon-name">Grows {strainGrow}</span>
                            </div>
                        )

                    }
                <div className="genetics-card__btns">
                    <CustomButton notALink activatePopup className="card-btn">Contact Us</CustomButton>
                    <WebsiteLink notALink activatePopup linkClass="card-link">Quick View</WebsiteLink>
                </div> 
                <input type="hidden" value={cardFill} />
            </div>
        </div>     
            
    );  
}