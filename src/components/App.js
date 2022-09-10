import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import Title from './Title'
// import Header from "./Header";
// import TestApi from "./TestApi";
import profile from '../assets/profile.jpg'

// class RegularClass{}

// class ComponentClass extends Component{}

// const regularClassInstance = new RegularClass()
// const componentClassInstance = new ComponentClass()

// console.log("regularClassInstance", regularClassInstance);
// console.log("componentClassInstance", componentClassInstance);

class App extends Component {
    state = { displayedBio: false } // not using this, because not in constructor

    // constructor() {
    //     super();
    //     this.state = { displayedBio: false };

    //     this.toggleDsiplayBio = this.toggleDsiplayBio.bind(this);
    // }

    toggleDsiplayBio = () => {
        this.setState({ displayedBio: !this.state.displayedBio })
    }

    render() {
        const bio = this.state.displayedBio ? (
            <div>
                <p>I Live in San Francisco, and code every daya</p>
                <p>My Favorite language is Javascript and Goalng, and i thing React.js is awesome</p>
                <p>Besides Coding, i also love music and Ramen :D</p>
                <button onClick={this.toggleDsiplayBio}>Show Less</button>
            </div>
        ) : (<div>
            <button onClick={this.toggleDsiplayBio}>Read More</button>
        </div>);

        return (
            <div>
                {/* <Header /> */}
                <img src={profile} alt='profile' className="profile" />
                <h1>Helo!</h1>
                <p>My name is Khalil.</p>
                {/* {this.state.displayedBio ? <Title /> : null} */}
                <Title />
                <p>I'm always looking forward to working on meaningful projects</p>
                {bio}
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
                {/* <hr />
                <TestApi /> */}
            </div>
        )
    }
}

// const AppWithHeader = () => {
//     return (
//         <Header Component={App} />
//     )
// }

export default App;