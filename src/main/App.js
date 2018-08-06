import React, { Component } from 'react';
import Card from './components/Card';

//import PriceCard from './components/PriceCard';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: ''
        }
    }
    async componentDidMount() {
        try {
        
            const res = await fetch('http://localhost:3000/api');
            
            const data = await res.json();

            await this.setState({
                data: data
            })

        } catch(e) {

        }
    }


    render() {
        return (
            <div>
                <Card crypto={this.state.data.crypto} currency={this.state.data.currency} price={this.state.data.rate} />
            </div>
        )
    }
}

export default App;