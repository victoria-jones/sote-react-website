import TornEdgeSection from '../components/torn-edge-section.component';
import WebsiteLink from '../components/website-link.component';
import ContactSection from '../components/contact-section.component';

import '../styles/pages/home.styles.scss';

import plantSmall from '../assets/images/plant-small.jpg';

export default function Home () {
    return(
        <div className="mainContentContainer">
            <TornEdgeSection>
                <div className="clones__container">
                    <img src={plantSmall} alt="small cannabis plant" className="clones__img" />
                    <div className="clones__info">
                        <h2 className="clones__header header-2">Commited to providing the most reliable clean start </h2>
                        
                        <ul className="clones__list list">
                            <li className="clones__item list__item">We have the largest selection of hard to find strains both new and old at our disposal to grow.</li>
                            <li className="clones__item list__item">Our customized room provides us with an automated and optimal enviornment in real time, allowing our 60+ different strains to thrive happy and healthy. </li>
                            <li className="clones__item list__item">All of our strains are organic</li>
                            <li className="clones__item list__item">Check out some of our strains <WebsiteLink link="genetics" linkClass="link-small">here</WebsiteLink>.</li>
                        </ul>

                        <WebsiteLink
                            link="about"
                            linkClass="clones__link"
                        >
                            Learn more about SOTE Nursery Network
                        </WebsiteLink>
                    </div>
                </div>
            </TornEdgeSection>

            <section className="merch torn-edge-fix">
                <div className="merch__container">
                    <h2 className="header-2">SOTE Merch Coming Soon</h2>
                </div>
            </section>

            <ContactSection componentPage="home" />
        </div>
    );
}