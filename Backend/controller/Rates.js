const { Buy, Sell } = require('../config/Firebase');
const { logEvents } = require('../middleware/logger');
const getRates = async (req, res) => {
    const RawBuy = await Buy.get();
    const RawSell = await Sell.get();
    const BuyRates = await RawBuy.data()
    const SellRates = await RawSell.data()
    var BuyArray = [BuyRates['rate-xsm'], BuyRates['rate-sm'], BuyRates['rate-md'], BuyRates['rate-lg'], BuyRates['rate-xlg']];
    var SellArray = [SellRates['rate-xsm'], SellRates['rate-sm'], SellRates['rate-md'], SellRates['rate-lg'], SellRates['rate-xlg']];
    var Amount = ["1-99", "100-399", "400-999", "1000-2999", "3000"];
    var Commisions = [];
    for (let i = 0; i < Amount.length; i++) {
        let obj = {
            Commision: Amount[i],
            Sell: SellArray[i],
            Buy: BuyArray[i]
        }
        Commisions.push(obj);
    }
    return res.status(200).json({ Rates: Commisions })
}

const setRates = async (req, res) => {
    let Buybody = req.body.Rates['Buy'];
    let Sellbody = req.body.Rates['Sell'];
    let BuyObject = {
        "rate-xsm": Buybody[0],
        "rate-sm": Buybody[1],
        "rate-md": Buybody[2],
        "rate-lg": Buybody[3],
        "rate-xlg": Buybody[4]
    }
    let SellObject = {
        "rate-xsm": Sellbody[0],
        "rate-sm": Sellbody[1],
        "rate-md": Sellbody[2],
        "rate-lg": Sellbody[3],
        "rate-xlg": Sellbody[4]
    }
    let BuyUpdated = await Buy.update(BuyObject);
    let SellUpdated = await Sell.update(SellObject);
    BuyUpdated && SellUpdated ? [res.status(200).json({ message: "Rates Updated" }),logEvents("Rates Updated","updateLog.log")]
        : res.status(400).json({ message: "error updating rates" });
}
module.exports = { getRates, setRates };