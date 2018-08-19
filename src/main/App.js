import React, { Component } from 'react';
import Card from './components/Card';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: ''
        }
    }
    async componentDidMount() {
        try {
        
            const res = await fetch('/api');
            
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
                <Card 
                crypto={this.state.data.crypto} 
                currency={this.state.data.currency || this.state.data.data} 
                price={this.state.data.rate}
                />
            </div>
        )
    }
}

export default App;