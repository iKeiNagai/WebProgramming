import React, {Component} from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            count:5 
        };
    }

    incrementCount = () =>{
        this.setState({
            count: this.state.count + 1
        });
    }

    render(){
        return(
            <>
            <h1>{this.state.count}</h1>
            <button onClick={this.incrementCount}>Increment</button>
            </>
        );
    }
}

export default Counter;