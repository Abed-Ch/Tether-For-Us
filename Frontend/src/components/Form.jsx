import React from "react";
import OMT from '../assets/OMT.svg';
import WHISH from '../assets/WHISH.svg';
import { BsCash } from 'react-icons/bs';
import ConfirmOrder from "./ConfirmOrder";
import { placeOrder } from "./Fetch";
import { MDBTooltip } from "mdb-react-ui-kit";
class Form extends React.Component {
    state = {
        Name: "",
        Number: "",
        Amount: "",
        Address: "",
        Buying: true,
        MinMax: "",
        CompleteOrder: false,
        Minimum: "",
        Maximum: "",
        Commission: "",
        Pending:false,
        Success:false,
        Fail:false
    }
    nameRef = React.createRef();
    numberRef = React.createRef();
    amountRef = React.createRef();
    toggleModal = () => {
        this.setState({CompleteOrder : !this.state.CompleteOrder})
    }
    async changeState(e) {
        switch (e.target.id) {
            case "NameInput":
                await this.setState({ Name: e.target.value });
                break;
            case "PhoneInput":
                await this.setState({ Number: e.target.value });
                break;
            case "AmountInput":
                if (e.target.value >= 10000) {
                    await this.setState({ Amount: 10000 });
                } else {
                    await this.setState({ Amount: e.target.value });
                }
                break;
            case "Address":
                await this.setState({ Address: e.target.value });
                break;
            case "TransactionBuy":
                await this.setState({ Buying: true });
                break;
            case "TransactionSell":
                await this.setState({ Buying: false });
                break;
            default:
                break;
        }
        return;
    }
    validate = () => {
        let valid = true;
        if (this.state.Name === "") {
            this.nameRef.current.classList.add("is-invalid")
            this.nameRef.current.classList.remove("is-valid")
            valid = false;
        } else {
            this.nameRef.current.classList.add("is-valid")
            this.nameRef.current.classList.remove("is-invalid")
        }
        if (this.state.Amount === "") {
            this.amountRef.current.classList.add("is-invalid")
            this.amountRef.current.classList.remove("is-valid")
            valid = false;
        } else {
            this.amountRef.current.classList.add("is-valid")
            this.amountRef.current.classList.remove("is-invalid")
        }
        if (this.state.Number === "" || this.state.Number.length !== 8) {
            this.numberRef.current.classList.add("is-invalid")
            this.numberRef.current.classList.remove("is-valid")
            valid = false;
        } else {
            this.numberRef.current.classList.add("is-valid")
            this.numberRef.current.classList.remove("is-invalid")
        }
        if (valid) this.calculateCommission();
    }
    calculateCommission = async () => {
        let amm = parseInt(this.state.Amount);
        let buying = this.state.Buying;
        let SellRates = this.props.SellRates;
        let BuyRates = this.props.BuyRates;
        let rate ;
        if (amm >= 1 && amm <= 99) {
            await this.setState({ Commission: 2, Minimum: amm - 2, Maximum: amm + 2 });
        }
        if (amm >= 100 && amm <= 399) {
            if (buying) {
                rate = Math.ceil((parseFloat(BuyRates[1]) / 100) * amm)
                await this.setState({ Commission: rate, Minimum: amm - rate, Maximum: amm + rate });
            } else {
                rate = Math.ceil((parseFloat(SellRates[1]) / 100) * amm)
                await this.setState({ Commission: rate, Minimum: amm - rate, Maximum: amm + rate });
            }
        }
        if (amm >= 400 && amm <= 999) {
            if (buying) {
                rate = Math.ceil((parseFloat(BuyRates[2]) / 100) * amm)
                await this.setState({ Commission: rate, Minimum: amm - rate, Maximum: amm + rate });
            } else {
                rate = Math.ceil((parseFloat(SellRates[2]) / 100) * amm)
                await this.setState({ Commission: rate, Minimum: amm - rate, Maximum: amm + rate });
            }
        }
        if (amm >= 1000 && amm <= 2999) {
            if (buying) {
                rate = Math.ceil((parseFloat(BuyRates[3]) / 100) * amm)
                await this.setState({ Commission: rate, Minimum: amm - rate, Maximum: amm + rate });
            } else {
                rate = Math.ceil((parseFloat(SellRates[3]) / 100) * amm)
                await this.setState({ Commission: rate, Minimum: amm - rate, Maximum: amm + rate });
            }
        }
        if (amm >= 3000 && amm <= 10000) {
            if (buying) {
                rate = Math.ceil((parseFloat(BuyRates[4]) / 100) * amm)
                await this.setState({ Commission: rate, Minimum: amm - rate, Maximum: amm + rate });
            } else {
                rate = Math.ceil((parseFloat(SellRates[4]) / 100) * amm);
                await this.setState({ Commission: rate, Minimum: amm - rate, Maximum: amm + rate });
            }
        }
        this.setState((prev) => {return {CompleteOrder : !prev.CompleteOrder }});
    }
    toggleMinMax = (e) =>{
        if(e.target.id === "Min"){
            this.setState({MinMax : "Min"})
        }else{
            this.setState({MinMax : "Max"})
        }
    }
    confirmOrder = async () => {
        let reffered ;
        this.setState({Pending : true,Success:false,Fail:false})
        let params = (new URL(document.location)).searchParams;
        if(params.has("reffered"))reffered = params.get("reffered");   
        let paying = this.state.MinMax === "Min" ? this.state.Amount : this.state.Maximum ;
        let recieving = this.state.MinMax === "Min" ? this.state.Minimum : this.state.Amount ;
        const data = {
            Name: this.state.Name,
            Type: (this.state.Buying ? "Buy" : "Sell"),
            Number: this.state.Number,
            Paying: paying,
            Recieving : recieving,
            Address: (this.state.Address ? this.state.Address : ""),
            Commision: this.state.Commission,
            Ref : (reffered ? reffered : "")
        }
        let fetchData  = await  placeOrder(data) ;
        fetchData.status === 200 ? this.setState({Pending : false , Success : true , Fail : false}) : this.setState({Pending : false ,Success:false, Fail : true});
        
    }
    render() {
        const Component =
        
            <section className="p-5 form-section custom-section " id="form-section">
                <p className="text-center h3 text-custom" >Want To Place An Order?</p>
                <div className="text-center h6 text-muted mb-5">Simply Fill In The Form Below, And A Representative Will Contact You Shortly After</div>
                <div className="row">
                    <div className="col-12 col-md-6 col-xl-4 offset-xl-2 mb-4">
                        <div className="form-floating">
                            <input type="text" ref={this.nameRef} className="form-control" id="NameInput" placeholder="100" onChange={e => this.changeState(e)} value={this.state.Name} />
                            <label htmlFor="NameInput">Name</label>
                            <div className="invalid-feedback">
                                Please enter a name.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4 mb-4">
                        <div className="form-floating">
                            <input type="tel" className="form-control" ref={this.numberRef} maxLength="8" id="PhoneInput" placeholder="100" onChange={e => this.changeState(e)} value={this.state.Number} />
                            <label htmlFor="PhoneInput">Phone Number</label>
                            <div className="invalid-feedback">
                                Phone number must be 8 digits.
                            </div>
                        </div>
                    </div>
                    <div className="w-lg-100"></div>
                    <div className="col-12 col-md-4 col-xl-3 offset-xl-2 mb-4">
                        <div className="form-floating">
                            <input type="number" className="form-control" ref={this.amountRef} max="10000" id="AmountInput" placeholder="100" onChange={e => this.changeState(e)} value={this.state.Amount} />
                            <label htmlFor="AmountInput">Amount</label>
                            <div className="invalid-feedback">
                                Please enter an amount.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-xl-5 mb-4">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="Address" placeholder="address" onChange={e => this.changeState(e)} value={this.state.Address} />
                            <label htmlFor="Address">Address <small className="text-muted">(Optional)</small></label>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-xl-8 offset-xl-2 text-custom mb-4">
                        <span>Are you </span>
                        <div className="form-check form-check-inline m-1">
                            <input className="form-check-input" type="radio" name="TransactionType" id="TransactionBuy"
                                checked={this.state.Buying} onChange={e => this.changeState(e)} />
                            <label className="form-check-label" htmlFor="TransactionBuy">Buying USDT</label>
                        </div>
                        <div className="form-check form-check-inline m-1 ">
                            <input className="form-check-input" type="radio" name="TransactionType" id="TransactionSell" checked={!this.state.Buying} onChange={e => this.changeState(e)} />
                            <label className="form-check-label" htmlFor="TransactionSell">Selling USDT</label>
                        </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-12 col-md-11 offset-xl-2 col-xl-10 text-custom mb-4">
                        <button type="submit" className="btn bg-green my-2 btn-lg" id="ContactSubmit" onClick={this.validate}>Confirm Order</button>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-12 col-md-11 offset-xl-2 col-xl-10 text-custom mb-4">
                        Our Payment methods : <MDBTooltip title='Cash On Delivery'  wrapperClass="payment-icons" tag='div' ><BsCash /></MDBTooltip><MDBTooltip title='OMT' tag='span'><img src={OMT} alt="OMT" className="payment-icons" /></MDBTooltip>
                        <MDBTooltip title='Whish Money Transfer' tag='span'><img src={WHISH} alt="Whish Money Transfer" className="payment-icons" title="Whish" /></MDBTooltip>
                    </div>
                </div>
                <ConfirmOrder pending={this.state.Pending} success={this.state.Success} fail={this.state.Fail}
                 toggleMinMax={this.toggleMinMax} confirmOrder={this.confirmOrder} 
                Toggle={this.toggleModal} Name={this.state.Name} Number={this.state.Number} Amount={this.state.Amount} 
                Commission={this.state.Commission} Buying={this.state.Buying} Min={this.state.Minimum} 
                Max={this.state.Maximum} show={this.state.CompleteOrder} />
            </section>;
        return Component;
    }
}
export default Form;