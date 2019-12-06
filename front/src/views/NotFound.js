import React from 'react';
import '../css/index.css';

class Notfound extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="container-404">
                <div>All we have here is...</div>
                <h1>404</h1>
                <div>
                    <a>Go back down</a>
                    <a className="start-button">Or hit start</a>
                </div>
            </div>
        )
    }
}

export default Notfound
