import React from 'react';

import '../css/index.css';
import Clickable from "../components/Clickable";

import Category from "../components/Category";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Categorie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render() {
        return (
            <div className="wrap">
            <div className="search">
                <input type="text" className="searchTerm" placeholder="Rechercher"/>
                <button type="submit" className="searchButton">
                </button>
            </div>
            </div> 
            )
    }
}

export default Categorie;
