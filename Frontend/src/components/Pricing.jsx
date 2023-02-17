import React from 'react';
import Fade from 'react-reveal/Fade';
class Pricing extends React.Component {
    state = {
        Rates: [],
        Sell: [0, 0, 0, 0],
        Buy: [0, 0, 0, 0]
    }
    componentDidUpdate() {
        if (this.props.Rates !== this.state && this.props.SellRates !== this.state.Sell) {
            this.setState({ Rates: this.props.Rates, Sell: this.props.SellRates, Buy: this.props.BuyRates });
        }
    }

    render() {
        const BuyBull = <svg className='BuyBull' viewBox="0 0 153.97 113.14" xmlns="http://www.w3.org/2000/svg"><g fill="#50af95"><path d="m133.53 17.27-40.85-17.27-39.27 23.58 6.28 1.57-47.12 33-6.29-7.85 22-29.86s12.57 0 12.57-15.71c0 0-14.14-1.57-14.14 14.14l-26.71 31.43 9.43 18.85 9.43-3.15 1.07 9.63a8.22 8.22 0 0 1 -3 7.33l-4.32 3.46-1.61 20.44 4.72 6.28h11s-1.58-4.72-4.72-6.29l-3.14-1.57 1.57-12.57 8-5.69a21.14 21.14 0 0 1 5.57-2.88c4.64-1.55 14.36-6 17.89-16.57l6.68-1.67a33.69 33.69 0 0 1 11.92-.81l8.11.9 12.56-7.86s6.29 0 9.43-4.72l-3.14 11h-6.32l-4.72 3.15v7.85a10.14 10.14 0 0 0 7.85-4.71h7.86l9.42-22 1.57-1.57a7.58 7.58 0 0 1 0 6.28s-1.57 6.29 3.14 7.86c0 0 4.72 1.57 7.86-1.58l11-7.86s6.29-3.14 4.71-7.85c0 0 11 0 14.15 12.56l-3.15-12.54-11-6.28-6.28-9.42z" /><path d="m53.42 72.28 7.86-1.57s-1.57 11-12.57 20.42l11 7.86a12 12 0 0 1 3.15 7.85h-7.86v-3.14l-15.2-11.4a3.14 3.14 0 0 1 .13-5.12c4.42-3.03 11.4-8.61 13.49-14.9z" /><path d="m135.11 23.55 4.71 6.29h6.29l7.85 11s-4.71-4.71-7.85-6.28h-6.29l-4.71-6.28z" /><path d="m111.55 61.27s1.57 3.14 4.71 3.14l-6.28 11-7.85 1.59-3.13 4.69h-6.3v-3.14l4.71-4.71 5.33-.89a6.57 6.57 0 0 0 5.26-4.68z" /></g></svg>;
        const SellBear = <svg fill="#bb0000" height="2rem" width="2rem" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 285.535 285.535" xmlSpace="preserve"> <path d="M32.976,228.062c-0.103-10.158-7.216-13.995-7.216-13.995s27.769,2.339,28.455-34.381c0,0,2.792-13.169,65.402-7.736 c5.281,0.461,17.8,29.692,18.681,39.111c0.888,9.427,1.591,17.001,1.591,17.001h48.191c-0.419-11.36-9.103-15.056-13.98-19.2 c4.135-35.647,11.047-69.977,27.505-70.735c12.83-0.586,24.167-4.533,29.706-8.625c5.543-4.089,40.45-4.848,43.448-8.231 c3.042-3.377,12.422-13.121,10.526-17.243c-1.849-4.148-18.981-8.648-18.981-8.648s-2.061-4.88-3.558-7.909 c-1.501-2.993-17.662-8.625-17.662-8.625s-3.342-10.521-5.97-14.662c-2.647-4.145-11.275,7.13-11.275,7.13 s-30.195,0.042-39.827-2.989c-13.129-4.141-16.342-11.849-34.915-12.027c-14.44-0.125-16.809,9.729-29.784,10.308 c-13.074,0.616-37.478-8.541-71.454-3.042c-34.022,5.501-47.186,41.948-49.787,54.36c-2.634,12.377,7.498,41.416,8.644,54.139 c1.141,12.686-8.285,22.235-10.353,28.75c-2.032,6.467,5.149,27.248,5.149,27.248S33.01,230.704,32.976,228.062z" /></svg>;
        const Component =
        <Fade bottom={true} distance={'1.5rem'}>
            <section className='py-4 pricing-section custom-section ' id='pricing-section'>
                <div className="h3 text-center p-3 pt-4 text-custom pb-0">
                    Our Rates For Today
                </div>
                <div className="accordion m-3 m-sm-5 accordion-flush" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button bg-colorSecondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                {BuyBull} <span className="BuyTitle">Buy Rates</span>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body bg-colorPrimary">
                                <div>
                                    <ul className="list-group">
                                        <li className="list-group-item text-white bg-colorSecondary d-flex justify-content-between align-items-center">
                                            From $1 to $99
                                            <h3><span className="badge rounded-pill bg badge-buy">$2</span>
                                            </h3>
                                        </li>
                                        <li className="list-group-item text-white bg-colorSecondary d-flex justify-content-between align-items-center">
                                            From $100 to $399
                                            <h3><span className="badge rounded-pill bg badge-buy" id='Buying-1'>%{this.state.Buy[1]}</span>
                                            </h3>
                                        </li>
                                        <li className="list-group-item text-white bg-colorSecondary d-flex justify-content-between align-items-center">
                                            From $400 to $999
                                            <h3><span className="badge rounded-pill bg badge-buy" id='Buying-2'>%{this.state.Buy[2]}</span>
                                            </h3>
                                        </li>
                                        <li className="list-group-item text-white bg-colorSecondary d-flex justify-content-between align-items-center">
                                            From $1000 to $2999
                                            <h3><span className="badge rounded-pill bg badge-buy" id='Buying-3'>%{this.state.Buy[3]}</span>
                                            </h3>
                                        </li>
                                        <li className="list-group-item text-white bg-colorSecondary d-flex justify-content-between align-items-center">
                                            From $3000 to $10000
                                            <h3><span className="badge rounded-pill bg badge-buy" id='Buying-4'>%{this.state.Buy[4]}</span>
                                            </h3>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed bg-colorSecondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                {SellBear} <span className="SellTitle"> Sell Rates</span>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body bg-colorPrimary">
                                <ul className="list-group">
                                    <li className="list-group-item bg-colorSecondary text-white d-flex justify-content-between align-items-center">
                                        From $1 to $99
                                        <h3><span className="badge rounded-pill bg badge-sell">$2</span>
                                        </h3>
                                    </li>
                                    <li className="list-group-item bg-colorSecondary text-white d-flex justify-content-between align-items-center">
                                        From $100 to $399
                                        <h3><span className="badge rounded-pill bg badge-sell" id='Selling-1'>%{this.state.Sell[1]}</span>
                                        </h3>
                                    </li>
                                    <li className="list-group-item bg-colorSecondary text-white d-flex justify-content-between align-items-center">
                                        From $400 to $999
                                        <h3><span className="badge rounded-pill bg badge-sell" id='Selling-2'>%{this.state.Sell[2]}</span>
                                        </h3>
                                    </li>
                                    <li className="list-group-item bg-colorSecondary text-white d-flex justify-content-between align-items-center">
                                        From $1000 to $2999
                                        <h3><span className="badge rounded-pill bg badge-sell" id='Selling-3'>%{this.state.Sell[3]}</span>
                                        </h3>
                                    </li>
                                    <li className="list-group-item bg-colorSecondary text-white d-flex justify-content-between align-items-center">
                                        From $3000 to $10000
                                        <h3><span className="badge rounded-pill bg badge-sell" id='Selling-4'>%{this.state.Sell[4]}</span>
                                        </h3>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </Fade> ;
        return Component;
    }
}
export default Pricing;
