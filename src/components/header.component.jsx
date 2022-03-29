import CustomButton from './custom-button.component';

import '../styles/components/header.styles.scss';

import bg_video from '../assets/videos/bg_video_01.mp4';
import sote_full_logo from '../assets/logos/SOTE-full-logo-white.png';
import sote_full_logo_stacked from '../assets/logos/SOTE-full-logo-stacked-white.png';

export default function Header () {
    return(
        <header className="header home__header">
            <img src={sote_full_logo} alt="Salt Of The Earth Nursery" className="header__img home__header__img header__img--big" />
            <img src={sote_full_logo_stacked} alt="Salt Of The Earth Nursery" className="header__img home__header__img header__img--small" />
            <CustomButton
                linkToPage="genetics"
                className="header__btn home__header__btn margin-top-med"
            >
                View Genetics
            </CustomButton>

            <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop playsInline>
                    <source src={bg_video} type="video/mp4" />
                    Your browser does not support this video :(
                </video>
            </div>
        </header>
    );
}