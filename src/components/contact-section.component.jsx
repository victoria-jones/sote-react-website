import '../styles/components/contact-section.styles.scss';

export default function ContactSection ({ componentPage }) {
    return(
        <section className={`component__contact
                            ${componentPage ? `${componentPage}__contact` : ''}`}
        >
            <div className="contact__form-wrapper form-wrapper component__contact__form-wrapper margin-bottom-sml margin-top-sml">
                <h2 className="margin-bottom-sml">Contact Us</h2>
                
                <form action="#" className="contact__form form">
                    <div className="form__group">
                        <input type="text" className="form__input" placeholder="Name" id="name"  name="user_name" maxlength="30" required />
                        <label htmlFor="name" className="form__label">Name</label><span className="form__error"></span>
                    </div>

                    <div className="form__group">
                        <input type="email" className="form__input" placeholder="Email" id="email"  name="user_email" maxlength="100" required />
                        <label for="email" className="form__label">Email</label><span className="form__error"></span>
                    </div>

                    <div className="form__group">
                        <textarea className="form__textarea" placeholder="Message" id="message" name="message" maxlength="1500" minlength="10" required></textarea>
                        <label htmlFor="message" className="form__label">Message</label><span className="form__error"></span>
                    </div>

                    <div className="form__group">
                        <button className="btn contact_btn">Send</button>
                    </div>
                </form>
                
            </div>
        </section>
    );
}