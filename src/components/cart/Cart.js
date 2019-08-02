import React from "react";
import "./Cart.css";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  removeItem,
  addQuantity,
  subQuantity
} from "../../redux/actions/actions";
// import Checkout from "../checkout/Checkout";

class Cart extends React.Component {
  handleRemoveItem(id) {
    this.props.removeItem(id);
  }

  handleAddQuantity(id) {
    this.props.addQuantity(id);
  }

  handleSubQuantity(id) {
    this.props.subQuantity(id);
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
                <NavLink to="/cart">
                  <i
                    class="fas fa-sort-up"
                    onClick={() => this.handleAddQuantity(item.id)}
                  />
                </NavLink>
                <NavLink to="/cart">
                  <i
                    class="fas fa-sort-down"
                    onClick={() => this.handleSubQuantity(item.id)}
                  />
                </NavLink>
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
          <h3><label><b>Total: {this.props.total}$</b></label></h3>
        </div>

        {/* <Checkout /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.addedItems,
    total: state.total

  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => {dispatch(removeItem(id))},
    addQuantity: id => {dispatch(addQuantity(id))},
    subQuantity: id => {dispatch(subQuantity(id))}
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
