import '../styles/components/contact-section.styles.scss';

import TornEdgeSection from './torn-edge-section.component';
import ContactForm from './contact_form.component';

export default function ContactSection ({ componentPage, includeHeader, children, headerClass }) {
    return(
        <section className={`component__contact
                            ${componentPage ? `${componentPage}__contact` : ''}
        `}>
            {
                includeHeader ?
                (
                    <TornEdgeSection
                        classNames={headerClass ? headerClass : ''}
                    >
                        { children}
                    </TornEdgeSection>
                )
                :
                null
            }
            <ContactForm />
        </section>
    );
}