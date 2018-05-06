import React, { Component } from 'react';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    async handleClick() {
        const id = await this.getIdPromise();
        this.props.history.push(`/show/${id}`);
    }

    render() {
        return (
            <div>
                <h2>Rendering Home page.</h2>
                <p>
                    Click on the below button to go to <code>/show/testId</code> in a few seconds using <code>history.push('/show/testId')</code>
                </p>
                <button onClick={this.handleClick}>Click me</button>
            </div>);
    }

    getIdPromise() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('testId');
            }, 1500);
        });
    }
}