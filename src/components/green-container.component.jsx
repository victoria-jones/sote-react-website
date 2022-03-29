import '../styles/components/green-container.styles.scss';

const GreenContainer = ({ classNames, children }) => (
    <section className={`green-container
                            ${classNames ? classNames : ''}
    `}>
        { children }
    </section>
);

export default GreenContainer;