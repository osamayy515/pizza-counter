import React from 'react'
import pizza1 from './pizza1.png'
const Counter={
    fontSize:"72px",
    backgroundColor:"black",
    borderRadius:"15px"
}
const Button={
    fontSize:"28px",
    padding:"10px",
    backgroundColor:"white",
    borderRadius:"8px"

}

class Pizza extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    takeOrder() {
        this.setState({
            count:this.state.count + 1
        })
    }
    cancelOrder() {
        this.setState({
            count:this.state.count - 1
        })
    }
    render() {
        return(
            <div>
                <img src={pizza1} alt='' width="200"/>
                <h1>Pizza Order Counter</h1>
                <h1 style={Counter}>{this.state.count}</h1>
                <button style={Button} onClick={() => this.takeOrder()}>Take Order</button>
                <br/>
                <br/>
                <button style={Button} onClick={() => this.cancelOrder()}>Cancel Order</button>
            </div>
        );
    }
}

export default Pizza;