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
        const history = trhis.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.lenght - 1];
        const squares = current.squares.slice();
        const winner = calculateWinner(squares);
        if (winner || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
    }
}

function calculateWinner(squares) {
    return null;
}