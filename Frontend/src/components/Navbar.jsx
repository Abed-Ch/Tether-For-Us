import React from "react";
import logo from '../assets/cdnlogo.com_tether.svg' ;
import { BsFacebook , BsWhatsapp } from 'react-icons/bs';
import { SlLogin } from 'react-icons/sl';
import Fade from 'react-reveal/Fade';
class Navbar extends React.Component {
    render() {
        const nav = 
        <Fade top={true} distance={'0.5rem'}>
        <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Tether Logo" className="navbar-logo m-2" />
            Tether For US
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item ">
                <a className="nav-link" href="https://www.instagram.com/teth.er4us/" ><i className="bi bi-instagram Insta"></i><span className="d-md-none ms-2 Insta">Instagram</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link Facebook" href="https://www.facebook.com/profile.php?id=100084352569396&mibextid=ZbWKwL" target="_blank"><BsFacebook /><span className="d-md-none ms-2">FaceBook</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link Whats" href="https://wa.me/+96171172787" target="_blank"><BsWhatsapp/><span className="d-md-none ms-2">Whatsapp</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link login"  href="#" onClick={this.props.show}><SlLogin/><span className="d-md-none ms-2">Login</span></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </Fade>;
      return nav;
    }
}
export default Navbar;