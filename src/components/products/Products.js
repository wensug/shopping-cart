import React from 'react';
import './Products.css'
import { connect } from 'react-redux'



class Products extends React.Component {

    render() {
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                        </div>
                        <div className="card-text">
                            <span className="card-title">{item.title}</span>
                            <p><b>Price: {item.price}$</b></p>
                            <button className="btn-add">Add to Cart</button>
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

export default connect(mapStateToProps)(Products)