import React from 'react'
import './Bomb.css'

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            let newCount = this.state.count + 1;
            this.setState({
                count: newCount
            })
        }, this.props.tickInterval)
    }

    assessCount() {
        if(this.state.count >= this.props.maxTicks) {
            clearInterval(this.interval)
            return 'BOOM!!!!';
        }
        return this.state.count % 2 === 0 ? 'tick' : 'tock';
    }

    render() {
        return (
            <div className="bomb-cont">
                <p>{this.assessCount()}</p>
            </div>
        )
    }
}

export default Bomb;



// The component should render a div element. Inside the div there should be a p that contains content of either "tick", "tock" or "BOOM!!!!".
// The component will have an initial state with a property count of 0.
// When the component mounts, register an interval that adds one to the count in state every second.
// When the component unmounts, clear the interval.
// When the count is divisible by 2, display the word "tick".
// When the count isn't divisible by 2, display the word "tock".

// If the count goes equal to or above 8, display "BOOM!!!!".
// When the count goes above or equal to 8, also clear the interval!