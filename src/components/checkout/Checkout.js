import React from "react";
import { connect } from "react-redux";
import "./Checkout.css"
// import DisplayTotal from "../displayTotal/DisplayTotal";
const url =
  "http://www.apilayer.net/api/live?access_key=40f7bdc3457f5be0ee6613fdcbee91a7";

class Checkout extends React.Component {
  state = {
    currentCurrency: { name: "USD", value: 1.0 },
    allCurrencies: {},
    currenciesAllow: ["USD", "EUR", "GBP"]
  };

  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(response => {
        console.log("response", response);
        this.setState({
          allCurrencies: response.quotes
        });
        console.log("AFTER FETCH", this.state);
      });
  }

  changeCurrency(e) {
        let selectedCurrency = e.target.value;
        let currencies = this.state.allCurrencies;
        // return currencies.find((currency) => (currency.includes(selectedCurrency)))
        console.log(currencies);
    }
    
  render() {
    return (
      <div className="section">
        <div className="row">
        <div className="card-checkout">
        <h1>Total</h1>
          <div className="event-box list">
            <h2><label>Select Currency:</label></h2>
            <select onChange={(e) => this.changeCurrency(e)}>
                {
                    this.state.currenciesAllow.map(currency => {
                        return (
                            <option>{currency}</option>
                        );
                    })

                }
            </select>
          </div>

          <h3>
            <b>
              Total: $ {this.props.total.toFixed(2) * this.state.currentCurrency.value}
            </b>
          </h3>
        </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addedItems: state.addedItems,
    total: state.total
  };
};

export default connect(mapStateToProps)(Checkout);

