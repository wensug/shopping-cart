import React from "react";
import "./Cart.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, addQuantity, subQuantity } from "../../redux/actions/actions";

class Cart extends React.Component {
  
    handleRemoveItem(id) {
        this.props.removeItem(id);
  }
  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map(item => {
        return (
          <div className="card" key={item.id}>
            <div className="card-image">
              <img src={item.img} alt={item.img} />
            </div>
            <div className="card-text">
              <span className="title">{item.title}</span>
              <p>
                <b>Price: {item.price}$</b>
              </p>
              <p>
                <b>Quantity: {item.quantity}</b>
              </p>
              <div className="arrow">
                <Link to="/cart">
                  <i class="fas fa-sort-up" />
                </Link>
                <Link to="/cart">
                  <i class="fas fa-sort-down" />
                </Link>
              </div>
              <button
                onClick={() => this.handleRemoveItem(item.id)}
                className="button-xs"
              >
                Remove
              </button>
            </div>
          </div>
        );
      })
    ) : (
      <p>There are not item in the basket</p>
    );
    return (
      <div className="section">
        <div className="row">
          <h3 className="row-title">You have ordered:</h3>
          <div className="card-container">{addedItems}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.addedItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => {
      dispatch(removeItem(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
