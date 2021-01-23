import React from 'react';

// const App = props => {
//     return <Header name="Hello React" />
// }
// const Header = props => {
//     return <Title name={props.name} />
// }
// const Title = props => {
//     return <h1>{props.name}</h1>
// }

// function component
// const MyContext = React.createContext("Hello React");
// const App = props => {
//     return <Header/>
// }
// const Header = props => {
//     return <Title/>
// }
// const Title = props => {
//     const name = React.useContext(MyContext);
//     return <h1>{name}</h1>
// }

// class component
const MyContext = React.createContext("Hello React");
class App extends React.Component {
    render() {
        return <Header />
    }
}
class Header extends React.Component {
    render() {
        return <Title />
    }
}
class Title extends React.Component {
    static contextType = MyContext;
    render() {
        return <h1>{this.context}</h1>
    }
}

export default App;