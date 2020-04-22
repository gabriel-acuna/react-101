import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';


class App extends Component {
    static defaultProps = {
        name: "Gabriel"
    }

    static propTypes = {
        name: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    componentDidMount(){
        console.log('component mounted');
        
    }
    componentDidUpdate(prevProps, prevState){
        console.log(prevProps, prevState);
        
        console.log('component updated'); 
    }

    updateCounter = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        return (
            <div>
                <h1>Hi, {this.props.name} ...</h1>

                <div>
                    <p> Counter: {this.state.counter}</p>
                    <button onClick={this.updateCounter}> Add</button>
                </div>
            </div>)
    }

}

render(<App />, document.getElementById('root'));