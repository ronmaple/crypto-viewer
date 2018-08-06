import React, { Component } from 'react';
import './styles/Card.scss';

class Card extends Component {
    render() {
        return (
            <div className="card">

                <div className="card-header">
                    <span className="crypto">{this.props.crypto}</span>
                    <span className="currency">{this.props.currency}</span>
                </div>

                <div className="card-price">
                    <span className="price">{this.props.price}</span>
                </div>

            </div>
        )
    }
}

export default Card;