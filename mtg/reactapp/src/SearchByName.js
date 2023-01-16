import React, {Component} from "react";
import Card from "./Card";

export default class SearchByName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false,

            name:'',
            imgUrl:'',
            url:'',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({name : event.target.value})
    }

    handleSubmit(event) {
        this.setState({submitted: true})
        fetch(`http://127.0.0.1:8000/api/card-name/${this.state.name}`)
            .then((response) => response.json())
            .then((data) => this.setState({
                name: data['name'],
                imgUrl: data['image'],
                url: data['url']
            }))
        event.preventDefault()
    }

    renderCard(){
        return <Card name={this.state.name} imgUrl={this.state.imgUrl} url={this.state.url}/>
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="cardName">Card name:</label>
                    <input type="text" value={this.state.name} onChange={this.handleChange} id="cardName"/>
                </form>
                <hr/>
                {this.state.submitted && this.renderCard()}
            </div>
        )
    }
}
