import React, {Component} from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            count:5 
        };
    }

    render(){
        return(
            <h1>{this.state.count}</h1>
        );
    }
}

export default Counter;