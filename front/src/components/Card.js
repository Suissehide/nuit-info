import React from 'react';
import '../css/index.css';
import '../css/RecapHelp.css';


export default class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render() {
        console.log(this.props.url);
        return (
            <div className="card-1">
                <a className={"recap__help__category"} href={this.props.url}>
                    <div className="card__img" style={{backgroundImage: "url(" + this.props.img + ")"}}/>
                    <div>
                        <p className="card__text">{this.props.text}</p>
                    </div>
                </a>
            </div>
        )
    }
}
