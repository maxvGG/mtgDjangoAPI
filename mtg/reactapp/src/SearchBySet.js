import React, {Component} from "react";
import Card from "./Card";

export default class SearchBySet extends Component {
    obj;
    constructor(props) {
        super(props);
        this.state = {
            submitted: false,

            setName:'',
            set:[]
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({setName : event.target.value})
    }

    handleSubmit(event) {
        this.setState({submitted: true})
        fetch(`http://127.0.0.1:8000/api/set/${this.state.setName}`)
            .then((response) => response.json())
            .then((data) => this.setState({set: data['data']}))
        event.preventDefault()
    }

    _renderObject(){
        return Object.entries(this.state.set).map(([key, value], i) => {
            return (
                <Card
                      name={value.name}
                      imgUrl={value.image_uris.normal}
                      url={value.scryfall_uri}
                />
            )
        })
    }


    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="cardName">Card name:</label>
                    <input type="text" value={this.state.setName} onChange={this.handleChange} id="cardName"/>
                </form>
                <hr/>
                {this.state.submitted && this._renderObject()}
            </div>
        )
    }
}
