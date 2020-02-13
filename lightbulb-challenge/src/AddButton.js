import React, {Component} from 'react';
import LightSwitch from './LightSwitch';

class AddButton extends Component {
    constructor(){
        super()
            this.state = {
                lights: [],
        }
    }

    insertLight = () =>{
        let displayedLights = this.state.lights
        displayedLights.push(<LightSwitch / >);
        this.setState({ lights: displayedLights })
    }

    removeLight = () =>{
        let displayedLights = this.state.lights
        displayedLights.pop();
        this.setState({ lights: displayedLights})
    }

    render(){
        return (
            <div>
                <h1 className="App-Top">
                    <button onClick={ this.insertLight } className="addButtons">Add Light Switch</button>
                    <button onClick={ this.removeLight } className="removeButtons">Remove Light Switch</button>
                </h1>
            <p className= "App-Top">{this.state.lights}</p>
            </div>
    )}
}

export default AddButton
