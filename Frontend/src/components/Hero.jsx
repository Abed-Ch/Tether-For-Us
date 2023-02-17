import React from "react";
import Fade from 'react-reveal/Fade';
class Hero extends React.Component {
    componentDidMount() {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            window.location.hash = "";
            this.handleHashChange(hash)
        }, false);
    }

    componentWillUnmount() {
        window.removeEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            window.location.hash = "";
            this.handleHashChange(hash)
        }, false);
    }

    handleHashChange = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        };
    };

    render() {
        const Hero =
            <Fade bottom={true} distance={'1.5rem'}>
                <section className="p-4 mt-md-5 hero-section">
                    <div className="row px-md-2 px-lg-5">
                        <div className="col-12 col-md-6 col-lg-5 align-self-center order-1 order-md-0">
                            <p className="h1 m-md-4 mt-md-0 hero-title">
                                Exchanging <span className="hero-title-highlight">USDT</span> Has Never Been Easier!
                            </p>
                            <p className="h6 text-muted m-md-4 hero-sub">
                                Connecting Buyers and Sellers with Safe, Face-to-Face Transactions. Get a Fair Price and a Smooth Experience with Our Platform
                            </p>
                            <a className="btn me-1 mt-4 ms-md-4" type="button" id="PlaceOrderBtn" href="#form-section">
                                Place An Order
                            </a>
                            <a className="btn ms-1 mt-4" type="button" id="ViewRatesBtn" href="#pricing-section">
                                View Today's Rates
                            </a>
                        </div>
                        <div className="col-12 col-md-6 order-0 order-md-1 col-lg-7 coin-parent">
                            <div className="coin m-5 p-5">
                                <div className="front"></div>
                                <div className="front_b"></div>
                                <div className="back"></div>
                                <div className="back_b"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fade>
        return Hero;
    }
}
export default Hero;