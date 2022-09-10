import React from "react";
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom'
import createBrowserHistory from "history/createBrowserHistory";
import App from './components/App';
import TestApi from "./components/TestApi";
import './index.css'

const history = createBrowserHistory()

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route exact path='/' component={App}></Route>
            <Route path='/testapi' component={TestApi}></Route>
        </Switch>
    </Router>, document.getElementById('root')
)

// new Promise((reslove, reject) => {
//     return reject(new Error('no Bears'))

//     setTimeout(() => {
//         // console.log('Bears');
//         reslove('Bears,Beets, Battlestar Glatica')
//     }, 2000);
// })
//     .then(quote => {
//         console.log(quote);
//     })
//     .catch(error => console.log('error', error))


// class Animal {
//     constructor (name, age){
//         this.name = name;
//         this.age = age;
//     }

//     speak (){
//         console.log("I am", this.name, "and I am ", this.age ," years old");
//     }
// }

// const animal1 = new Animal('Simba',3)
// animal1.speak()

// console.log(animal1);

// class Lion extends Animal {
//     constructor (name,age,furColor,speed){
//         super(name,age);
//         this.furColor = furColor;
//         this.speed = speed;
//     }

//     roar(){
//         console.log("ROOOOAR !! I have",
//         this.furColor, " Fur, and i can run",
//         this.speed, "miles an hour");
//     }
// }

// const lion1 = new Lion('Mufasa', 20, 'golden',25)
// lion1.speak()
// lion1.roar()
// console.log(lion1);