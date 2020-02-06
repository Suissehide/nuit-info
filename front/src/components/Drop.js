import React from "react";

class Drop extends React.Component {
    state = {};

    render() {
        return (
            <div className="drop" style={{left: this.props.x + "px", top: this.props.y + "px"}}>Hey</div>
        )
    }
}

export default Drop;
