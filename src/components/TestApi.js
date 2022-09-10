import React, { Component } from "react";

const Joke = ({ joke: { title, body } }) => {
    // const { title, body } = joke

    return <p style={{ margin: 20 }}>{title} <em>{body}</em></p>
}

const User = ({ joke }) => {
    const { name, username } = joke

    return <p>Name : {name}, username: <em>{username}</em></p >
}

class TestApi extends Component {
    state = { joke: {}, jokes: [] }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            // .then(json => console.log('json', json))
            .then(json => this.setState({ joke: json }))
            .catch(error => alert(error.message))
    }

    fetchApi = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.setState({ jokes: json }))
            .catch(error => alert(error.message))
    }

    render() {
        return (
            <div>
                <h2>Highlighted Title</h2>
                <Joke joke={this.state.joke} />
                <hr />
                <h3>Want ten new Users sample?</h3>
                <button onClick={this.fetchApi}>Click me!</button>
                {this.state.jokes.map(joke => (<User key={joke.id} joke={joke} />))}
            </div>
        )
    }
}

export default TestApi