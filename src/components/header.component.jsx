import '../styles/components/header.styles.scss';

import bg_video from '../assets/videos/bg_video_01.mp4';
import sote_full_logo from '../assets/logos/SOTE-full-logo-white.png';
import sote_full_logo_stacked from '../assets/logos/SOTE-full-logo-stacked-white.png';

export default function Header () {
    return(
        <header class="header home__header">
            <img src={sote_full_logo} alt="Salt Of The Earth Nursery" class="header__img home__header__img header__img--big" />
            <img src={sote_full_logo_stacked} alt="Salt Of The Earth Nursery" class="header__img home__header__img header__img--small" />
            <a href="genetics.html" class="btn header__btn home__header__btn margin-top-med">View Genetics</a>

            <div class="bg-video">
                <video class="bg-video__content" autoplay muted loop playsinline>
                    <source src={bg_video} type="video/mp4" />
                    Your browser does not support this video :(
                </video>
            </div>
        </header>
    );
}