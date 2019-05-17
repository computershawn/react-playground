import React from 'react'
import './CupcakeRoulette.css'

class CakeRoulette extends React.Component {
    static defaultProps = {
        muffinInTinCup: 8,
    };
    
    constructor(props) {
        super(props)
        this.state = {
            cup: null,
            spinninMuffinTin: false,
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    getThatCake() {
        const spinInterval = 2000;

        this.setState({
            spinninMuffinTin: true
        });

        this.timeout = setTimeout(() => {
            this.setState({
                cup: Math.ceil(Math.random() * 8),
                spinninMuffinTin: false,
            });    
        }, spinInterval)
    }

    getStatus() {
        if(this.state.spinninMuffinTin) {
            return <p>spinning the wheel...</p>
        }
        if(this.state.cup === null) {
            return <p>...</p>
        } else {
            if(this.state.cup === this.props.cupcakeInMuffinTin) {
                return <p>Yaaaayyy Cupcake!!!</p>
            }
            return <p>Yuck, Lima Beans!!!</p>
        }
    }

    render() {
        return (
            <div className="cake-roulette-cont">
                <h4>Cake Roulette!</h4>
                <button onClick={() => this.getThatCake()} disabled={this.state.spinninMuffinTin}>Get that cake!</button>
                { this.getStatus()}
            </div>
        )
    }
}

export default CakeRoulette;