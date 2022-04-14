import '../styles/pages/consultation.styles.scss';

import TornEdgeSection from '../components/torn-edge-section.component';
import DropDownListInfoBox from '../components/drop-down-list-infobox.component';
import GreenContainer from '../components/green-container.component';
import CustomButton from '../components/custom-button.component';

export default function Consultation () {

    // drop down list items to pass over to 'drop-down-list-infobox' population
    const item1 = {
        'name': 'Greenhouse design',
        'info': 'Complete grow design/oversee buildouts from start to finish. Both complete build and renovation. (indoor, greenhouse, outdoor/full-term farm)'
    };
    const item2 = {
        'name': 'Greenhouse build management'
    };
    const item3 = {
        'name': 'Plant nutrition'
    };
    const item4 = {
        'name': 'Soil health/Microbial life'
    };
    const item5 = {
        'name': 'IPM',
        'info': 'Internal Pest Management'
    };
    const item6 = {
        'name': 'Cultivation space and team efficiency',
        'info': 'can guarantee at least 5 harvests a year regardless of operation size'
    };
    const item7 = {
        'name': 'Nursery space/team efficiency',
        'info': '100,000 clones produced every month for every 10,000 square feet devoted to mothers and clones AND 9,200 ready-to-flower immature plants every month out of every 10,000 square feet devoted to teenage plant production'
    };
    const listItems = [item1, item2, item3, item4, item5, item6, item7];

    return(
        <div className="mainContentContainer">

            <TornEdgeSection classNames="specialties">
                <div className="specialties__bg-img">
                    <div className="specialties__container">
                        <h2 className="specialties__header header-2">Specialties include & not limited to:</h2>
                        <DropDownListInfoBox listItems={listItems} />
                    </div>
                </div>
            </TornEdgeSection>

            <GreenContainer classNames="before-after torn-edge-fix">
                <div className="before-after__container">
                    <h2 className="before-after__header header-2">Before and After</h2>
                    
                    <div className="before-after__section before-after__section--1">
                        <div className="before-after__section--side before-after__section--before-side">
                            <h3 className="before-after__header before-after__section--side--header header-3">Before</h3>
                            <p className="before-after__p before-after__section__p">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veritatis sint doloremque consequatur animi dolorum labore nisi ut quisquam? Error dolorem architecto velit dolores deleniti debitis eos. Adipisci, exercitationem corrupti.
                            </p>
                            
                            <div className="before-after__img before-after__section__img before-after__img--1"> 
                                picture  
                            </div>
                        </div>

                        <div className="before-after__section--side before-after__section--after-side">
                            <h3 className="before-after__header before-after__section--side--header header-3">After</h3>
                            <p className="before-after__p before-after__section__p">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veritatis sint doloremque consequatur animi dolorum labore nisi ut quisquam? Error dolorem architecto velit dolores deleniti debitis eos. Adipisci, exercitationem corrupti.
                            </p>
                            
                            <div className="before-after__img before-after__section__img before-after__img--2"> 
                                picture
                            </div>
                        </div>
                        
                    </div>

                    <div className="before-after__section before-after__section--2">
                        <div className="before-after__section--side before-after__section--before-side">
                            <h3 className="before-after__header before-after__section--side--header header-3">Before</h3>
                            <p className="before-after__p before-after__section__p">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veritatis sint doloremque consequatur animi dolorum labore nisi ut quisquam? Error dolorem architecto velit dolores deleniti debitis eos. Adipisci, exercitationem corrupti.
                            </p>
                            
                            <div className="before-after__img before-after__section__img before-after__img--1">  
                                picture 
                            </div>
                        </div>

                        <div className="before-after__section--side before-after__section--after-side">
                            <h3 className="before-after__header before-after__section--side--header header-3">After</h3>
                            <p className="before-after__p before-after__section__p">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veritatis sint doloremque consequatur animi dolorum labore nisi ut quisquam? Error dolorem architecto velit dolores deleniti debitis eos. Adipisci, exercitationem corrupti.
                            </p>
                            
                            <div className="before-after__img before-after__section__img before-after__img--2"> 
                                picture
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="before-after__section before-after__section--3">
                        <h3 className="innovating__subheader header-3">See what we are doing in real time</h3>

                        <p className="before-after__p">
                            Check out our socials to stay up to date on the farm's progress.   
                        </p>

                    </div>

                </div>
            </GreenContainer>

            <section className="inquire">
                <div className="inquire__container">
                    <CustomButton linkToPage="contact" className="inquire__btn">Inquire Here</CustomButton>
                </div>
            </section>

        </div>
    );
}