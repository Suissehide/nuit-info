import React from 'react';

import '../css/index.css';
import RecapHelp from "../components/RecapHelp";
import Clickable from "../components/Clickable";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    _newMessenger = () => {
        console.log("MESSENGER");
    };

    render() {
        return (
            <div>
                <RecapHelp/>
            </div>
        )
    }
}

export default Home;
