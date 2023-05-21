// import logo from '../../../assets/logo.svg';
import './Footer.css'
const Footer = () => {
    return (
        <div className=''>
            <footer className="footer p-10 bg-base-200 text-base-content bg-slate-700 text-white ">
            <div>
                {/* <img src={logo} alt="" /> */}
                <p>LEGO WORLD Ltd.<br />Reliable Business since 2010</p>
            </div>
            <div>
                <span className="footer-title">Products</span>
                <a className="link link-hover">LEGO Star-Wars</a>
                <a className="link link-hover">LEGO City</a>
                <a className="link link-hover">LEGO Cars</a>
                <a className="link link-hover">LEGO Architecture</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Career</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
        </div>
    );
};

export default Footer;