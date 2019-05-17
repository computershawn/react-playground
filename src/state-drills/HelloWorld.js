import React from 'react'
import './HelloWorld.css'

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = { who: 'world' }
    }

    handleButtonClick(who) {
        this.setState({who: who});
    }

    render() {
        return (
            <div className="hello-world-cont">
                <p>Hello, {this.state.who}!</p>
                <button onClick={() => this.handleButtonClick( 'world' )}>World</button>
                <button onClick={() => this.handleButtonClick( 'friend' )}>Friend</button>
                <button onClick={() => this.handleButtonClick( 'React' )}>React</button>
            </div>
        )
    }
}

export default HelloWorld;