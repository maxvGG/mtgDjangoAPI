import React from 'react';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h2>{this.props.name}</h2>
                <img src={this.props.imgUrl} alt={this.props.name} />
                <a href={this.props.url} target={"_blank"}></a>
            </div>
        )
    }
}