import React from 'react';

export default class Cart extends React.Component {
    constructor() {
        super();
        this.state = { shows: [] }
    }

    // componentDidMount() {
    //     fetch('/rest/shows')
    //         .then(response => response.json())
    //         .then(shows => this.setState({ shows }));
    // }

    render() {
        return (
            <div className="container">
                <h1>Items to buyyyyyyyyyyyyyyyhhhhhhh</h1>
            </div>

        );
    }
}