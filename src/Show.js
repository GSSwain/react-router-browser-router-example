import  { Component } from 'react';

export default class Show extends Component {
    state = { id : ""};

    constructor(props){
        super(props);
        console.group('constructor()');
            console.log(`Params: ${JSON.stringify(this.props.match.params)}`);
            console.log(`State: ${JSON.stringify(this.state)}`);
        console.groupEnd('constructor()');
    }
    
    // I'm doing this to set the id in state
    static getDerivedStateFromProps(nextProps, prevState){
        console.group("getDerivedStateFromProps()");
            console.log(`getDerivedStateFromProps called with nextProps: ${JSON.stringify(nextProps)}`);
            console.log(`getDerivedStateFromProps called with prevState: ${JSON.stringify(prevState)}`);
        console.groupEnd('getDerivedStateFromProps()');

        if(nextProps.match.params.id !== prevState.id){
            return { id: nextProps.match.params.id };
        }
        return null;
    }

    componentDidMount(){
        console.group('componentDidMount()');
            console.log(`Params: ${JSON.stringify(this.props.match.params)}`);
            console.log(`State: ${JSON.stringify(this.state)}`);
        console.groupEnd('componentDidMount()');
        // The id is available in this function. You can use this to fetch the details.
    }

    render(){
        return `Rendering Show page for id : ${this.state.id}`;
    }
}