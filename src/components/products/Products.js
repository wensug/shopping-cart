import React from "react";
import "./Products.css";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/actions";


class Products extends React.Component {

    handleClick (id) {
        this.props.addToCart(id);
    }
    render() {
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                        </div>
                        <div className="card-text">
                            <span className="card-title">{item.title}</span>
                            <p><b>Price: {item.price} $</b></p>
                            <button className="button-xs" onClick={()=>this.handleClick(item.id)}>Add to Cart</button>
                        </div>
                 </div>
            );
        });
        return(
            <div className="section">
                <div className="row">
                    <h3 className="row-title">Our items</h3>
                    <div className="card-container">
                        {itemList}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => {dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Products)