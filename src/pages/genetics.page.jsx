import '../styles/pages/genetics.styles.scss';

import SideMenu from '../components/side-menu.component';
import FilterMenu from '../components/filter-menu.component';
import CustomCard from '../components/custom-card.component';

export default function Genetics () {
    return(
        <div className="mainContentContainer">
            <section className="genetics">
                <FilterMenu />
                <SideMenu />

                <div class="genetics__container">
                    <div class="genetics-section">
                        <h2 class="genetics-section__header header-2">Featured</h2>
                        <p class="genetics-section__p">
                            Please know that all of our products are seasonal or temporary. Here is a current featured list we held recently that are our patients' favorites. All is grown on an organic metrc compliant farm. 
                        </p>
                    
                    </div>

                    <div className="genetics-card__container">

                        <CustomCard />
                        <CustomCard />
                        <CustomCard />

                    </div>

                    <div class="genetics-section"></div>
                    <div class="genetics-section"></div>
                </div>
            </section>
            
            <section className="genetics__contact">
                contact area
            </section>

        </div>
    );
}