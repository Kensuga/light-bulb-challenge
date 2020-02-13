import React, {Component} from 'react'
import lightOff from "./light-off.png"
import lightOn from "./light-on.png"
import switchOff from "./SwitchOff.png"
import switchOn from "./SwitchOn.png"

export default class LightSwitch extends Component {
    constructor(){
        super()
            this.state = {
                 lightSwitch: 0,
                 switchImage: switchOff,
                 switchLight: lightOff
        }
    }

    switchLightMethod = () => {
        if (this.state.lightSwitch === 0){
            this.setState({ lightSwitch: 1})
            this.setState({ switchImage: switchOn })
            this.setState({ switchLight: lightOn })
        } else {
            this.setState({ lightSwitch: 0})
            this.setState({ switchImage: switchOff })
            this.setState({ switchLight: lightOff })
        }
    }

    render(){
        return(
            <div className = "buttonAlign">
                <p><img className ="light" src = {this.state.switchLight}></img></p>
                <button onClick = {this.switchLightMethod} ><img className = "switch" src ={this.state.switchImage}></img></button>
            </div>
        )
    }
}
