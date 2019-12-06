import React from 'react';
import '../css/index.css';

class Notfound extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: false,
            drops: [],
            playerX: 50,
        };

        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            this.state.timer * 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick = () => {
        if (!this.state.start)
            return;
        this.update();
    };

    handleKeyDown = (event) => {
        event.preventDefault();

        if (event.key === 'q' && this.state.playerX > 0 && this.state.start)
            this.setState({playerX: this.state.playerX - 1});
        if (event.key ==='d' && this.state.playerX < 92 && this.state.start)
            this.setState({playerX: this.state.playerX + 1});
        console.log(this.state.playerX);
    };


    update = () => {
        const rand = min + Math.random() * (max - min);
        if (rand > 75)
            this.setState({drop: [...this.state.drop, ...<Drop />]})
    };

    render() {
        if (!this.state.start)
            return (
                <div className="container-404">
                    <div>All we have here is...</div>
                    <h1>404</h1>
                    <div>
                        <a>Go back down</a>
                        <a onClick={() => this.setState({start: true})} className="start-button">Or hit start</a>
                    </div>
                </div>
            )
        else
            return (
                <div className="container-404">
                    <div className="player" style={{left: this.state.playerX + '%'}}/>
                </div>
            )
    }
}

export default Notfound
