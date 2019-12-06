import React from 'react';

import Tinder from "../components/Tinder";

import '../css/index.css';
import Clickable from "../components/Clickable";

class Help extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            category: '',
            loading: true,
            data: [
                {firstName: 'Leo', lastName: 'Couffi', age: 12},
                {firstName: 'Idoia', lastName: 'Reine à rien', age: 19},
                {firstName: 'Nejma', lastName: 'Belkhanfar', age: 1},
            ],
            item: {firstName: 'Leo', lastName: 'Couffi', age: 12, flags: ['./flags/195-france.png', './flags/191-tonga.png']}
        };

        this._newMessenger = this._newMessenger.bind(this);
        this._getNext = this._getNext.bind(this);
    }

    componentDidMount() {
        this._fetch();
    }

    _fetch = () => {
        const category = this.state;
        const url = `http://localhost:8000/getTinder/${category}`;

        fetch(url, {
            method: "GET",
            headers: {},
        })
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    data: responseJson,
                    count: 1,
                    loading: false,
                });
            })
            .catch(error => {
                this.setState({error, loading: false});
                console.error('Error: ', error);
            });
    };

    _getNext = () => {
        this.setState({
            count: this.state.count + 1,
            item: this.state.data[this.state.count],
        });
    };

    _newMessenger = () => {
      console.log("MESSENGER");
    };

    render() {
        return (
            <div>
                <ul className="categories">
                    <li><img src={}></li>
                </ul>
                <div className="container">
                    <div className="tinder__container">
                        <Tinder item={this.state.item}/>
                        <Clickable keyCode={'b'} trigger={() => this._getNext()} content={<div className=""/>} className={'tinder__next'}/>
                    </div>
                    <div className="ask-btn">
                        <Clickable keyCode={'a'} trigger={() => this._newMessenger()} content={<button className="btn">Poser une question</button>} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Help;
