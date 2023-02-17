import React from 'react';
import { RxRocket } from 'react-icons/rx';
import { GrSecure , GrMoney } from 'react-icons/gr';
import Fade from 'react-reveal/Fade';
class WhyTether extends React.Component {


    render() {
        const component =
        <Fade bottom={true} distance={'1.5rem'}>
            <section className='custom-section mt-5 pb-5 features-section'>
                <div className="h3 text-center p-3 pt-4 text-custom">
                    Why Use Tether For US ?
                </div>
                <div className="row m-0 justify-content-around">
                    <div className="col-md-4 mx-auto my-2 justify-self-center col-10 offset-1 offset-md-0 col-lg-3">
                        <div className="card Specs-Card height-250">
                            <div className="text-center  text-green fs-1 m-1"><RxRocket /></div>
                            <div className="card-body pt-0">
                                <p className="card-title h5 text-center text-green">Fast</p>
                                <p className="card-text text-custom mt-4">Our platform ensures fast and efficient transactions, giving you quick access to your digital assets.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mx-auto my-2 justify-self-center col-10 offset-1 offset-md-0 col-lg-3">
                        <div className="card height-250 Specs-Card">
                            <div className="text-center  stroke-green fs-1 m-1"><GrSecure /></div>
                            <div className="card-body pt-0">
                                <p className="card-title h5 text-center text-green">Secure</p>
                                <p className="card-text text-custom mt-4">Using Tether ensures a secure transaction, with the added benefit of a face-to-face transaction with our salespeople.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mx-auto my-2 justify-self-center col-10 offset-1 offset-md-0 col-lg-3">
                        <div className="card height-250 Specs-Card">
                            <div className="text-center  stroke-green fs-1 m-1"><GrMoney /></div>
                            <div className="card-body pt-0">
                                <p className="card-title h5 text-center text-green">Competitive Rates</p>
                                <p className="card-text text-custom mt-4">Our commission rates are highly competitive, giving you the best value for your money when buying or selling USDT.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </Fade>;
        return component;
    }
}
export default WhyTether;