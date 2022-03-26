import TagComponent from './tagComponent'
import './footer.css';

function Footer() {

    return (
        <div className="footerContainer">
            <img src='images/wareLogo.png' alt='logo' style={{ paddingTop: 25 }} />
            <TagComponent title='Platform' li={['How it works', 'Technology', 'Compatibility']} />
            <TagComponent title='Company' li={['About us', 'Blog', 'Careers', 'Privacy']} />
            <TagComponent title='Tools' li={['Pricing', 'ROI Calculator', 'FAQ', 'Support']} />
            <TagComponent title='Get started' li={['Get a demo', 'Explore Ware Cloud', 'Contact us']} />
        </div>
    );
}

export default Footer;
