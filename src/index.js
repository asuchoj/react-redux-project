import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const name = ()=> {
    return 'John S';
};

const BaseComponent = (props) => {
    return <h1>Hello, {props.name}</h1>;
}

const element = <BaseComponent name={name()} />;

ReactDOM.render(
    element,
    document.getElementById('main')
);



// const name = ()=> {
//     return 'John';
// };
//
// const greeting = (name) => {
//     return (
//         <h1>Hello {name}</h1>
//     );
// };
//
// const getGreeting = () => {
//     if (name()) {
//         return greeting(name());
//     } else {
//         return greeting('World');
//     }
// }
//
// function tick() {
//     const element = (
//         <h1>{new Date().toLocaleTimeString()}</h1>
//     );
//     ReactDOM.render(
//         element,
//         document.getElementById('main')
//     )
// }
//
// setInterval(tick, 1000);

// ReactDOM.render(
//   getGreeting(),
//   document.getElementById('main')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
