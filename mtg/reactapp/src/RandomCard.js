import React, {Component} from "react";
import Card from "./Card";

export default class RandomCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false,

            name:'',
            imgUrl:'',
            url:'',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.setState({submitted: true})
        fetch(`http://127.0.0.1:8000/api/random-card/`)
            .then((response) => response.json())
            .then((data) => this.setState({
                name: data['name'],
                imgUrl: data['image'],
                url: data['url']
            }))
        event.preventDefault();
    }

    renderCard(){
        return <Card name={this.state.name} imgUrl={this.state.imgUrl} url={this.state.url}/>
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="submit" value={"vind een random kaart"}/>
                </form>
                <hr/>
                {this.state.submitted && this.renderCard()}
            </div>
        )
    }
}