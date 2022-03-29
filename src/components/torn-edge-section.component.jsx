import '../styles/components/torn-edge-section.styles.scss';

export default function TornEdgeSection ({ children, classNames }) {
    return(
        <section className={`torn-edge ${classNames ? classNames : ''}`}>
            { children }
        </section>
    );
}