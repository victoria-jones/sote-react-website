import '../styles/pages/contact.styles.scss';

import ContactSection from '../components/contact-section.component';
import AlternativePageHeader from '../components/alternative-page-header.component';
import SocialNav from '../components/social-nav.component';

export default function Contact () {
    return(
        <div className="mainContentContainer">
            <AlternativePageHeader
                altHeaderClasses="contact__header"
                pageTitle="Contact Us"
            >
                <h2>Follow Us</h2>
                <p class="contact__p">
                    Stay up to date with what's going on at SOTE Nursery. 
                    Be the first to know when new or existing strains are available!
                </p>
                <SocialNav navClass="contact__social-nav" />
            </AlternativePageHeader>
            <ContactSection />
        </div>
    );
}