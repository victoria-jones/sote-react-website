/*
*   ALTERNATIVE PAGE HEADER
*   for pages that don't use the header component but still have a "header"
*   these are pages that have a full fixed page image (ie: contact page)
*
*   why?    because it was originally designed that way in the vanilla
*           html/css website and we aren't going to spend an eon redesigning
*           if it already works fine (insert thumbs up)
*/
import '../styles/components/alternative-page-header.styles.scss';

import TornEdgeSection from '../components/torn-edge-section.component';

const AlternativePageHeader = ({ altHeaderClasses, pageTitle, children }) => (
    <div className="alternative-page-header">
        <h1 className="page-header header-1">
            { pageTitle }
        </h1>
        <TornEdgeSection
            classNames={`margin-bottom-med margin-top-med
                        ${altHeaderClasses ? altHeaderClasses : ''}
            `}
        >  
            <div className={`${altHeaderClasses}--wrapper`}>
                { children }
            </div>
        </TornEdgeSection>
    </div>
);

export default AlternativePageHeader;