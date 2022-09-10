import React, { Component } from "react";

class TestApi extends Component {
    state = { joke: {} }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            // .then(json => console.log('json', json))
            .then(json => this.setState({ joke: json }))
    }

    render() {
        const { title, body } = this.state.joke
        return (
            <div>
                <h2>Highlighted Title</h2>
                <p>{title} <em>{body}</em></p>
            </div>
        )
    }
}

export default TestApi