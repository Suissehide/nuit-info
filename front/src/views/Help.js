import React from 'react';

import Tinder from "../components/Tinder";

import '../css/index.css';
import Clickable from "../components/Clickable";

import Category from "../components/Category";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Help extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            category: '',
            loading: true,
            data: [
                {firstName: 'Leo', lastName: 'Couffi', age: 12, flags: [], category: {link: './categories/sex.png', title: 'Vie étudiante et sexualité'}},
                {firstName: 'Idoia', lastName: 'Reine à rien', age: 19, flags: [], category: {link: './categories/sex.png', title: 'Vie étudiante et sexualité'}},
                {firstName: 'Nejma', lastName: 'Belkhanfar', age: 1, flags: [], category: {link: './categories/sex.png', title: 'Vie étudiante et sexualité'}},
            ],
            item: {firstName: 'Leo', lastName: 'Couffi', age: 12, flags: ['./flags/195-france.png', './flags/191-tonga.png'], category: {link: './categories/sex.png', title: 'Vie étudiante et sexualité'}}
        };

        this._newMessenger = this._newMessenger.bind(this);
        this._getNext = this._getNext.bind(this);
    }

    componentDidMount() {
        // this._fetch();
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
        if (this.state.count + 1 > this.state.data.length)
            return;
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
            <div className="container">
                <ul className="categories">
                    <Category src={"./categories/Accessibilite.png"} name={"Accessibilité"}/>
                    <Category src={"./categories/Budget.png"} name={"Budget"}/>
                    <Category src={"./categories/Jobs.png"} name={"Jobs"}/>
                    <Category src={"./categories/Logements.png"} name={"Logements"}/>
                    <Category src={"./categories/Loisirs.png"} name={"Loisirs"}/>
                    <Category src={"./categories/Sante.png"} name={"Santé"}/>
                    <Category src={"./categories/Sex.png"} name={"Sexe"}/>
                    <Category src={"./categories/Sport.png"} name={"Sport"}/>
                </ul>
                <div className="tinder">
                    <div className="tinder__container">
                        <Tinder item={this.state.item}/>
                        <Clickable keyCode={'b'} trigger={() => this._getNext()} content={<div className="arrow"/>} className={'tinder__next'}/>
                    </div>
                    <div className="ask-btn">
                        <Clickable keyCode={'a'} trigger={() => this._newMessenger()} content={<button className="btn">Poser une question<FontAwesomeIcon icon={faPaperPlane}/></button>} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Help;
