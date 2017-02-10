import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);    //super is necessary to define before this

        this.state = {
            header: "Header from p1rops...",
            "content": "Content from p1rops..."
        }
    }

    render() {
        return (
            <div>
                <Header headerProp = {this.state.header}/>
                <Content contentProp = {this.state.content}/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.headerProp}</h1>
            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.contentProp}</h2>
            </div>
        );
    }
}

export default App;
