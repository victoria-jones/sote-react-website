import '../styles/components/custom-button.styles.scss';
import { Link } from 'react-router-dom';

const CustomButton = ({ children, linkToPage, className }) => (
    <Link to={`/${linkToPage === 'home' ? '' : linkToPage}`}
     className={`btn ${className}`}>
        { children }
    </Link>
);

export default CustomButton;