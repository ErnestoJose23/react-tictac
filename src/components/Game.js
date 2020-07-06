import React from 'react';

export default class Game extends React.Componenet {
    constructor(props) {
        super(props);
        this.state = {
            xIsNext: true,
            stepNumber: 0,
            history: [
                { squares: Array(9).fill(null) }
            ],
        };
    }
    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2 === 0),
        });
    }
    handleClick(i) {
        const history = trhis.state.history.slice(0, this.state.stepNumber + 1)
    }
}