import React from "react";
import { connect } from "react-redux";
// import DisplayTotal from "../displayTotal/DisplayTotal";
const url =
  "http://www.apilayer.net/api/live?access_key=40f7bdc3457f5be0ee6613fdcbee91a7";

class Checkout extends React.Component {
    state = {
        currentCurrency: { name: "USD", value: 1.0 },
        allCurrencies: {},
        currenciesAllow: []
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

  render() {
    return (
      <div className="section">
        <div className="container">
          <h1>Please select currency</h1>
          {/* <select> 

            { this.state.allCurrencies.map(currency => {
                return (
                  <option value={currency.quotes}>{currency} </option>
                );
              })
            }    
        </select> */}
             <label>
              <b>
                 Total: $ {(this.props.total).toFixed(2) * this.state.currentCurrency.value};
               </b>
             </label>
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
