import React from 'react';
import { loginReq, getRates, setRates } from './Fetch';
import { MDBSpinner } from 'mdb-react-ui-kit';
class Login extends React.Component {
    UN = React.createRef();
    PW = React.createRef();
    state = {
        Username: '',
        Password: '',
        SignedIn: false,
        PWsee: false,
        BuyRates: [null, '', '', '', ''],
        SellRates: [null, '', '', '', ''],
        pending: false
    }
    PWsee = () => {
        this.setState(prevState => { return { PWsee: !prevState.PWsee } })
    }
    changeP = (e) => {
        this.setState({ Password: e.target.value })
    }
    changeU = (e) => {
        this.setState({ Username: e.target.value })
    }

    async ExtractRates() {
        let Rawdata = await getRates();

        let Rates = Rawdata['Rates'];
        const SellRates = Rates.map(rate => rate.Sell);
        const BuyRates = Rates.map(rate => rate.Buy);
        this.setState({ SellRates, BuyRates });
    }
    Login = async () => {
        this.setState({ pending: true })
        let username = this.state.Username;
        let password = this.state.Password;
        let data = {
            Username: username,
            Password: password
        }
        let result = await loginReq(data);
        if (result.status === 200) {
            await this.ExtractRates();
            this.setState({ SignedIn: true })
        } else {
            this.setState({ pending: false })
            this.UN.current.classList.add('is-invalid')
            this.PW.current.classList.add('is-invalid')
        }
    }
    changeBuy = async (e) => {
        let rates = this.state.BuyRates;
        rates[e.target.name] = e.target.value;
        await this.setState({ BuyRates: rates });
    }
    changeSell = (e) => {
        let rates = this.state.SellRates;
        rates[e.target.name] = e.target.value;
        this.setState({ SellRates: rates })
    }
    commitRates = async () => {
        let rates = {
            Buy: this.state.BuyRates,
            Sell: this.state.SellRates
        }
        let result = await setRates(rates);
        if (result.status === 200) {
            this.goHome();
        } else {
            window.alert("Error Saving New Rates")
        }
    }
    goHome = async () => {
        await this.setState({
            Username: '',
            Password: '',
            SignedIn: false,
            PWsee: false,
            BuyRates: [null, '', '', '', ''],
            SellRates: [null, '', '', '', ''],
            pending: false
        });
        this.props.home();
    }
    render() {
        const LoginComponent = <section className="h-100">
            <div className="container h-100 login-section">
                <div className="row justify-content-sm-center h-100 align-content-center">
                    <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                        <div className="card shadow-lg custom-section">
                            <div className="card-body p-5">
                                <h1 className="fs-4 card-title fw-bold mb-4 text-custom">Login</h1>
                                <div className="mb-3">
                                    <label className="mb-2 text-muted text-custom" htmlFor="email">Username</label>
                                    <input ref={this.UN} id="username" type="text" className="form-control  bg-colorPrimary text-white" name="username" value={this.state.Username} onChange={e => this.changeU(e)} required autoFocus />
                                </div>
                                <div className="mb-3">
                                    <div className="mb-2 w-100">
                                        <label className="text-muted text-custom" htmlFor="password">Password</label>
                                    </div>
                                    <input id="password" ref={this.PW} type={this.state.PWsee ? "text" : "password"} className="form-control bg-colorPrimary text-white" name="password" required value={this.state.Password} onChange={e => this.changeP(e)} />
                                    <div className="invalid-feedback">
                                        Invalid Username OR Password
                                    </div>
                                </div>
                                <div className="form-check form-switch mb-3">
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={this.PWsee} />
                                    <label className="form-check-label text-muted" htmlFor="flexSwitchCheckDefault">See Password</label>
                                </div>
                                <div className="d-flex align-items-center">
                                    <button type="submit" className="btn btn-lg btn-secondary ms-auto" disabled={this.state.pending} onClick={this.goHome}>Go Home</button>
                                    {!this.state.pending && <button type="submit" className="btn btn-lg bg-green ms-2" ref={this.Logbtn} onClick={this.Login}>
                                        Login
                                    </button>}
                                    {this.state.pending && <button type="submit" className="btn btn-lg bg-green ms-2" disabled={true}>
                                        <MDBSpinner size='sm' role='status' tag='span' className='mx-2' />
                                        Loading...
                                    </button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>;
        const ChangeRatesComponent =
            <>
                <section className="m-md-5 p-md-5 pt-4 custom-section">
                    <div className="row">
                        <div className="col-12 col-lg-6 mb-5">
                            <p className='text-center h3 text-custom'>
                                Buy Rates
                            </p>
                            <ul className="list-group ">
                                <li className="list-group-item bg-colorPrimary">
                                    <div className="form-floating ">
                                        <input type="number" className="form-control" id="BuyRates1" name='1' placeholder="Password" value={this.state.BuyRates[1]} onChange={e => this.changeBuy(e)} />
                                        <label htmlFor="BuyRates1">From $100 to $399</label>
                                    </div>
                                </li>
                                <li className="list-group-item bg-colorPrimary">
                                    <div className="form-floating ">
                                        <input type="number" className="form-control" id="BuyRates2" name='2' placeholder="Password" value={this.state.BuyRates[2]} onChange={e => this.changeBuy(e)} />
                                        <label htmlFor="BuyRates2">From $400 to $999</label>
                                    </div>
                                </li>
                                <li className="list-group-item bg-colorPrimary">
                                    <div className="form-floating ">
                                        <input type="number" className="form-control" id="BuyRates3" name='3' placeholder="Password" value={this.state.BuyRates[3]} onChange={e => this.changeBuy(e)} />
                                        <label htmlFor="BuyRates3">From $1000 to $2999</label>
                                    </div>
                                </li>
                                <li className="list-group-item bg-colorPrimary">
                                    <div className="form-floating ">
                                        <input type="number" className="form-control" id="BuyRates4" name='4' placeholder="Password" value={this.state.BuyRates[4]} onChange={e => this.changeBuy(e)} />
                                        <label htmlFor="BuyRates4">From $3000 to $10000</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-6">
                            <p className='text-center h3 text-custom'>
                                Sell Rates
                            </p>
                            <ul className="list-group">
                                <li className="list-group-item bg-colorPrimary">
                                    <div className="form-floating ">
                                        <input type="number" className="form-control" id="SellRates1" name='1' placeholder="Password" value={this.state.SellRates[1]} onChange={e => this.changeSell(e)} />
                                        <label htmlFor="SellRates1">From $100 to $399</label>
                                    </div>
                                </li>
                                <li className="list-group-item bg-colorPrimary">
                                    <div className="form-floating ">
                                        <input type="number" className="form-control" id="SellRates2" name='2' placeholder="Password" value={this.state.SellRates[2]} onChange={e => this.changeSell(e)} />
                                        <label htmlFor="SellRates2">From $400 to $999</label>
                                    </div>
                                </li>
                                <li className="list-group-item bg-colorPrimary">
                                    <div className="form-floating ">
                                        <input type="number" className="form-control" id="SellRates3" name='3' placeholder="Password" value={this.state.SellRates[3]} onChange={e => this.changeSell(e)} />
                                        <label htmlFor="SellRates3">From $1000 to $2999</label>
                                    </div>
                                </li>
                                <li className="list-group-item bg-colorPrimary">
                                    <div className="form-floating ">
                                        <input type="number" className="form-control" id="SellRates4" name='4' placeholder="Password" value={this.state.SellRates[4]} onChange={e => this.changeSell(e)} />
                                        <label htmlFor="SellRates4">From $3000 to $10000</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button className="btn btn-lg bg-green m-2 ms-3 mb-3" onClick={this.commitRates}>Commit Changes</button>
                    <a className="btn btn-lg btn-danger m-2 ms-3 mb-3" onClick={this.goHome}>Go Back To Main</a>
                </section>
            </>
        return this.state.SignedIn ? ChangeRatesComponent : LoginComponent;
    }
}

export default Login;