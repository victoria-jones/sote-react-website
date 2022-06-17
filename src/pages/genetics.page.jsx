import '../styles/pages/genetics.styles.scss';

import { useState, useEffect } from 'react';
import SideMenu from '../components/side-menu.component';
import FilterMenu from '../components/filter-menu.component';
import CustomCard from '../components/custom-card.component';
import ContactSection from '../components/contact-section.component';
import SocialNav from '../components/social-nav.component';
//import ApiDataFetch from '../components/api-data-fetch.component'

//import strains from '../assets/json/strains.json';


/**********

    change what is displayed on genetics page in case data cannot be fetched
    so that the whole page doesn't crash. As of now the page will just crash.


*/

export default function Genetics () {

    const [strains, setStrains] = useState([]);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const getStrainData = async () => {
            let data;
            try { 
                const res = await fetch(`http://127.0.0.1:8000/api/strains`);
                const json = await res.json();
    
                data = json;
            } catch (error) {
                setError(error);
            } finally {
                setLoaded(true);
                setStrains(data);
            }
        };

        getStrainData();
    },[])

    return(
        <div className="mainContentContainer">
            {
                error === "" ?
                (
                    <section className="genetics">
                        <FilterMenu />
                        <SideMenu listItems={strains} />

                        <div className="genetics__container">
                            <div className="genetics-section">
                                <h2 className="genetics-section__header header-2">Featured</h2>
                                <p className="genetics-section__p">
                                    Please know that all of our products are seasonal or temporary. Here is a current featured list we held recently that are our patients' favorites. All is grown on an organic metrc compliant farm. 
                                </p>
                            
                            </div>
                            
                            
                            <div className="genetics-card__container">

                                {
                                    strains.map((strain, key) => {
                                        return(
                                            <CustomCard cardFill={strain} key={key} />
                                        ); 
                                    })
                                }

                            </div>

                            <div className="genetics-section"></div>
                            <div className="genetics-section"></div>
                        </div>
                    </section>
                )
                :
                (
                    <section className="genetics">

                        <div className="genetics-section">
                            <h2 className="genetics-section__header header-2">Whoops!</h2>
                            <p className="genetics-section__p">
                                There was a problem loading the strains. Please try to refresh the page or check back later.
                            </p>
                        
                        </div>

                    </section>
                )
            }
            
            
                <ContactSection includeHeader componentPage="genetics" headerClass="contact__header margin-bottom-med margin-top-med">
                    <div className="contact__header--wrapper">
                        <h2>Have any Questions?</h2>
                        <p className="contact__p">
                            Contact us directly for more information on our genetics and follow us on social media to get immediate updates on our available gentics.
                        </p>

                        <SocialNav navClass="contact__social-nav" />
                    </div> 
                </ContactSection>

        </div>
    );
}