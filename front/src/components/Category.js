import React from 'react';
import '../css/index.css';

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
        };
    }

    _selectCategory = () => {
        this.setState({clicked: !this.state.clicked});
    };

    render() {
        return (
            <li onClick={this._selectCategory}>
                <img className={this.state.clicked ? "grayscale" : ""} src={process.env.PUBLIC_URL + this.props.src}
                     alt={""}/>
                 <span className="tooltip">{this.props.name}</span>
            </li>
        )
    }
}

export default Category;
