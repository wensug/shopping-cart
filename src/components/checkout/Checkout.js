import React from 'react';
import { connect } from 'react-redux';
import './Checkout.css';
import { currencyFoundInAPI } from './../../utils/checkoutHelper.js';
const url =
  'http://www.apilayer.net/api/live?access_key=40f7bdc3457f5be0ee6613fdcbee91a7';

class Checkout extends React.Component {
  state = {
    currentCurrency: { name: 'USD', value: 1.0 },
    allCurrencies: [],
    currenciesAllow: ['USD', 'EUR', 'GBP']
  };

  changeCurrentCurrency(e) {
    const { value } = e.target;
    const found = currencyFoundInAPI(value, this.state.allCurrencies);
    if (found) {
      this.setState({
        currentCurrency: {
          name: found.name,
          value: found.value
        }
      });
    }
  }

  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(response => {
        const formatedArr = Object.entries(response.quotes).map(
          ([name, value]) => {
            name = name.replace(/USD/, '');
            return {
              name,
              value
            };
          }
        );
        this.setState({
          allCurrencies: formatedArr
        });
      });
  }

  render() {
    return (
      <div className="section">
        <div className="row">
          <div className="card-checkout">
            <h1>Total</h1>
            <div className="event-box list">
              <h2>
                <label>Select Currency:</label>
              </h2>
              <select onChange={e => this.changeCurrentCurrency(e)}>
                {this.state.currenciesAllow.map(currency => {
                  return (
                    <option
                      key={currency}
                      value={currency}
                      onClick={e => this.changeCurrentCurrency(e)}
                    >
                      {currency}
                    </option>
                  );
                })}
              </select>
            </div>

            <h3>
              <b>
                Total: {(this.props.total * this.state.currentCurrency.value).toFixed(2)}
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