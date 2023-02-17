import * as react from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyTether from './components/WhyTether';
import Pricing from './components/Pricing';
import { getRates } from './components/Fetch';
import Form from './components/Form';
import './assets/SCSS/styles.scss'
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Updating from './components/Updating';
class App extends react.Component {
  state = {
    Rates: null,
    SellRates: [],
    BuyRates: [],
    displayLogin: false,
    Out: false,
    TimeLeft : '',
    Admin: false
  }
  showLogin = () => {
    this.setState({ displayLogin: true })
  }
  hideLogin = () => {
    this.setState({ displayLogin: false })
  }
  //This timer function and all related timer functions were to put a 'Under Maintanence' screen for an hour after deploying to make sure all features are working on the josted server with no error. The app goes back to normal when the time goes back to zero
  setTimer = () => {
    let countDownDate = new Date("Feb 15, 2023 20:00:00").getTime();
    setInterval(async ()=> {
      // Calculating the days, hours, minutes and seconds left
      let now = new Date().getTime();
      let timeleft = countDownDate - now;
      let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
      if(hours >= 0 && minutes>=0 && seconds >= 0){
        this.setState({TimeLeft : `${hours}hours : ${minutes}minutes : ${seconds}seconds`})
      }else{
        this.setState({Out:false , TimeLeft : ''});
        this.getRate();
      }
    },1000)
  }
  setAdmin = ()=>{
    this.setState({Admin : true})
  }
  async componentDidMount() {
    let countDownDate = new Date("Feb 15, 2023 20:00:00").getTime();
    let now = new Date().getTime();
    let timeleft = countDownDate - now;
    if(timeleft > 0 && !this.state.Admin){
      this.setState({Out :true})
    this.setTimer()
    }else{
      this.getRate();
    }
    }
  getRate = async () => {
        let data = await getRates();
        await this.setState({ Rates: data['Rates'] });
        this.ExtractRates(data['Rates']);
  }
  componentDidUpdate(prevProps, prevState) {
  if(prevState.displayLogin !== this.state.displayLogin) {
    this.getRate();
    
  }
  if(prevState.Admin !== this.state.Admin && this.state.Admin === true){
    this.setState({displayLogin : false , Out : false});
    this.getRate();
    }
}
ExtractRates(Rates) {
  const SellRates = Rates.map(rate => rate.Sell);
  const BuyRates = Rates.map(rate => rate.Buy);
  this.setState({ SellRates, BuyRates });
}
render() {
  const Component =
    <Router>
      <Routes>
        <Route exact path='*' index element={
          <>
            {!this.state.displayLogin &&
              <>
                <Navbar show={this.showLogin} />
                <Hero />
                <WhyTether />
                <Pricing Rates={this.state.Rates} BuyRates={this.state.BuyRates} SellRates={this.state.SellRates} />
                <Form Rates={this.state.Rates} SellRates={this.state.SellRates} BuyRates={this.state.BuyRates} />
              </>}
            {this.state.displayLogin && <Login home={this.hideLogin} />}
          </>
        } />
      </Routes>
    </Router>;
  const timeComponent = <Updating remains={this.state.TimeLeft} Admin={this.setAdmin} />
  return this.state.Out  ? timeComponent : Component;
}
}

export default App
