import React from 'react'

class Accordion extends React.Component {
    static defaultProps = {
        sections: [],
    }

    constructor(props) {
        super(props)
        this.state = { currentAccordion: 0 }
    }

    handleButtonClick(index) {
        this.setState({currentAccordion: index});
    }

    renderButtons() {
        return this.props.sections.map((item, index) => (
            <li key={index}>
                <button onClick={() => this.handleButtonClick(index)}>{item.title}</button>
                {this.state.currentAccordion === index && this.renderContent()}
            </li>
        ))
    }

    renderContent() {
        const current = this.state.currentAccordion;
        const theContent = this.props.sections[current].content;
        return <p>{theContent}</p>
    }

    render() {
        return (
            <ul>
                {this.renderButtons()}
            </ul>
        )
    }
}

export default Accordion;