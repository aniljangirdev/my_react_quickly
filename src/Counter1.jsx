import { Component, Fragment } from "react";

class Counter1 extends Component {

    state = { counter: 0 }

    render() {
        return (
            <Fragment>
                <p>Clicks: {this.state.counter}</p>
                <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>
                    Increment
                </button>
            </Fragment>

        );
    }
}

export default Counter1;