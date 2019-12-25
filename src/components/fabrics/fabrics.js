import React, { Component } from 'react';
import './fabric.css';

class Fabrics extends Component {
    constructor(){
        super();
        this.state = {
            fabrics: []
        }
    }
    componentDidMount(){
        fetch('/graphql/products')
        .then(res=> res.json())
        .then(fabrics => this.setState({fabrics}, () => console.log('Customers Fetched', fabrics)));
    }
    render(){
        return (
            <div>
                <h2>fabrics</h2>
            </div>
        );
    }
}
export default Fabrics;
