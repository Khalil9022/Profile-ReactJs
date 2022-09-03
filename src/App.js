import React, { Component } from "react";

// class RegularClass{}

// class ComponentClass extends Component{}

// const regularClassInstance = new RegularClass()
// const componentClassInstance = new ComponentClass()

// console.log("regularClassInstance", regularClassInstance);
// console.log("componentClassInstance", componentClassInstance);

class App extends Component {
    constructor() {
        super();
        this.state = { displayedBio: false };
    }

    render() {
        const bio = this.state.displayedBio ? (
            <div>
                <p>I Live in San Francisco, and code every daya</p>
                <p>My Favorite language is Javascript and Goalng, and i thing React.js is awesome</p>
                <p>Besides Coding, i also love music and Ramen :D</p>
            </div>
        ) : null;

        return (
            <div>
                <h1>Helo!</h1>
                <p>My name is Khalil. I'm a software engineer</p>
                <p>I'm always looking forward to working on meaningful projects</p>
                {bio}
            </div>
        )
    }
}

export default App;