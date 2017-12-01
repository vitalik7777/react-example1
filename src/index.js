import React from 'react';
import { render } from 'react-dom';

class Square extends React.Component {
    render() {
        console.log(1);
        return (
            <button className="square" onClick={() => this.setState({value: 'X'})}>
            {this.props.value}
    </button>
    );
    }
}
class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i} />;
    }
    render() {
        return (
            <div>
            <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
    </div>
        <div className="board-row">
            {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
    </div>
        <div className="board-row">
            {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
    </div>
        </div>
        )
    }
}
render (
    <Board/>,
    document.getElementById('root')
);
