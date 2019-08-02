import React from "react"
import { connect } from "react-redux"
//Object response got from Checkout transforme it Response.quotes to this array.
const currenciesAllow = [{name: "EUR", value: 1.2}, {name: "BOL", value: 0.0000000000}, {name: "EUR", value: 1.2}]

class DisplayTotal extends React.Component {

    render () {
        return (
            <div className="displayTotal">
                <h1>Total to pay: {this.props.total}</h1>
                <div className="currency__menu">
                    {/* {this.props.currenciesAllow.lenght > 0 &&
                        this.props.currenciesAllow.map(currencie => {
                            return (
                                 <li className="currency__element" onClick={(currencie.name) => {this.props.dispatch(currencie.name)}}>{currencie.name}</li>
                            )
                        })
                    } */}
                </div>
            </div>
        );
    }

    
}



const mapStateToProps = (state)=>{
    return {
        addedItems: state.addedItems,
        total: state.total,
        openCheckout: state.openCheckout
    }
}


export default connect(mapStateToProps)(DisplayTotal);