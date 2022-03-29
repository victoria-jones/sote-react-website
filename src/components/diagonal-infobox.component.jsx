import '../styles/components/diagonal-infobox.styles.scss';

const DiagonalInfoBox = ({ image, title, text }) => (
    <div className="step">
        <div className="step__container">
            <div className={`step__img
                step__${image}`}>&nbsp;</div>
            <div className="step--wrapper">
                <h3 className="step__header header-3">{title}</h3>
                <p className="step__p">
                    {text}
                </p>
            </div>
        </div>
    </div>
);

export default DiagonalInfoBox;