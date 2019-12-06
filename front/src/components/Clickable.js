import React from 'react';
import '../css/index.css';

class Clickable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false,
        };
        document.addEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        if (event.key === this.props.keyCode && this.state.display) {
            event.preventDefault();
            this._trigger();
        }
        if (event.key ==='f') {
            event.preventDefault();
            this.setState({display: !this.state.display})
        }
    };

    _trigger = () => {
        this.props.trigger();
    };

    render() {
        return (
            <div onClick={this._trigger} className={this.props.className} style={{position: "relative"}}>
                {this.state.display ? <span className="mamie">{this.props.keyCode}</span> : null}
                {this.props.content}
            </div>
        )
    }
}

export default Clickable;
