import '../styles/pages/about.styles.scss';

import { Link } from 'react-router-dom';
import TornEdgeSection from '../components/torn-edge-section.component';
import DiagonalInfoBox from '../components/diagonal-infobox.component';
import GreenContainer from '../components/green-container.component';
import SocialNav from '../components/social-nav.component';
import CustomButton from '../components/custom-button.component';

import innovationVideo from '../assets/videos/soteinnovating.mp4';

export default function About () {
    return(
        <div className="mainContentContainer">
            <TornEdgeSection classNames="seedtomed">
                <div className="seedtomed__bg-img">
                    <div className="seedtomed__container">
                        <h2 className="seedtomed__header header-2">Clone process</h2>
                        <DiagonalInfoBox 
                            image="img--1"
                            title="Step 1"
                            text="It all starts with a healthy thriving mom plant. We then select the healthiest nodes from the mom and use proper clean nutrients for optimal growth."
                        />

                        <DiagonalInfoBox 
                            image="img--2"
                            title="Step 2"
                            text="We ensure optimal cloning by adhering to proper sterile techniques so there is small to no chance of cross contamination when rooting and transplanting."
                        />

                        <DiagonalInfoBox 
                            image="img--3"
                            title="Step 3"
                            text="Finally, with proper humidity and water intake- by week 3 the plants have healthy root growth and are ready for transplant."
                        />
        
                        <Link to="/genetics" className="link seedtomed__link">See our genetics</Link>
                    </div>
                </div>  
            </TornEdgeSection>

            <GreenContainer classNames="innovating torn-edge-fix">
                <div className="innovating__container">
                    <h2 className="innovating__header header-2">SOTE is always innovating</h2>
                    
                    <div className="innovating__section innovating__section--1">
                        <p className="innovating__p innovating__p--1">
                            Our SOTE family takes pride in staying up to date on the latest tech and state guidelines while remaining true to our grass roots. We are constantly innovating what needs improvement around the farm. At SOTE we work around the clock to produce superb clones. This is no easy daily task and takes a hardworking dedicated team to achieve the goal of clean, organic cannabis clones.
                        </p>
                        
                        <div className="innovating__img innovating__img--1">
                            <video loop autoPlay muted width="400" className="video innovating__video">
                                <source src={innovationVideo} type="video/mp4" />
                                Sorry, your browser doesn't support this embedded video :(
                            </video>
                        </div>
                    </div>
                    
                    <div className="innovating__section innovating__section--2">
                        <h3 className="innovating__subheader header-3">See what we are doing in real time</h3>

                        <p className="innovating__p innovating__p--2">
                            Check out our socials to stay up to date on the farm's progress.   
                        </p>


                        <SocialNav navClass="innovating__social-nav">
                            <span className="innovating__social-name">@SOTEnursery:</span>
                        </SocialNav>
                        
                    </div>  
                </div>
            </GreenContainer>

            <section className="thefamily">
                <div className="thefamily__container">
                    <h2 className="thefamily__header header-2">The SOTE Family</h2>

                    <p className="thefamily__p">
                        The SOTE family comes from a diverse group of hardworking individuals from all parts of Earth. We thrive together knowing we are working towards putting the best product for our patients and strive for clean accessible medicine. 
                    </p>
                    
                    <CustomButton linkToPage="about" className="thefamily__btn">Meet the Family</CustomButton>
                </div>
            </section>

        </div>
    );
}