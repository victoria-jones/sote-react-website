import '../styles/components/email-successful_popup.styles.scss';

import SocialNav from './social-nav.component';

export default function EmailSuccessful () {
    return(
        <div className="popup__message-sent">
            
            <div className="message-sent--successful">
                <h2 className="header-2">Your message has sent.</h2>
                <p className="p">We will get in touch soon.</p>
                
                <SocialNav navClass="contact__social-nav" />
            </div>

            <div className="message-sent--error">
                <h2 className="header-2">Whoops, there was an error sending your messsage.</h2>
                <p className="p">Please try again later, or check out other ways to reach us below.</p>

                <p className="p email">brent@sotenursey.com</p>
                <SocialNav navClass="contact__social-nav" />
            </div>
            
        </div>
    );
}