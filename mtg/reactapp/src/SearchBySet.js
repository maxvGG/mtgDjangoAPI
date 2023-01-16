import React, {Component} from "react";
import Card from "./Card";

export default class SearchBySet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false,

            set: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({set : event.target.value})
    }

    handleSubmit(event) {
        this.setState({submitted: true})
        fetch(`http://127.0.0.1:8000/api/set/${this.state.set}`)
            .then((response) => response.json())
            .then((data) => this.setState({
                set: data,
            }))
            .then(console.log(typeof data))
        event.preventDefault()
    }

    renderCard(){
        console.log(typeof(this.state.set))
        // for(i =)
        // this.state.set.map((i, j) => {
        //     console.log(i,j)
        // })
        // return this.state.set["data"].map((item, i) => <li key={i}>{item}</li>)
            // <Card name={this.state.name} imgUrl={this.state.imgUrl} url={this.state.url}/>
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
