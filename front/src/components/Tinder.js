import React from 'react';
import '../css/index.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

import avatar from '../assets/images/avatar/Avatar1.png';

import bk from '../assets/images/Rank_BK.png';
import w from '../assets/images/Rank_W.png';

class Tinder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    _renderFlags = (flags) => {
        return (
          flags.map((url, id) => {
             return (
                 <img key={id} src={process.env.PUBLIC_URL + url} alt={""}/>
             )
          })
      )
    };

    render() {
        console.log(this.props.item);
        return (
            <div className="tinder__box">
                <div className="tinder__header">
                    <div className="tinder__profil">
                        <div className="profil-image" style={{backgroundImage: "url(" + avatar + ")"}}/>
                        <div className="profil-name">
                            <div className="profil-firstname">{this.props.item.firstName}</div>
                            <div className="profil-lastname">{this.props.item.lastName}</div>
                        </div>
                    </div>
                    <div className="profil-language">
                        {this._renderFlags(this.props.item.flags)}
                    </div>
                </div>
                <div className="tinder__categorie">
                    <div className="tinder__category-img"><img src={process.env.PUBLIC_URL + this.props.item.category.link} alt={""}/></div>
                    <div className="tinder__category-title">{this.props.item.category.title}</div>
                </div>
                <div className="tinder__note">
                    <div className="tinder__like">
                        Avis:
                        <img src={bk} alt={""}/>
                        <img src={bk} alt={""}/>
                        <img src={bk} alt={""}/>
                        <img src={bk} alt={""}/>
                        <img src={w} alt={""}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tinder;
