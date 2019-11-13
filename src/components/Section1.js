import React from 'react';
import {roll} from '../utilities';

class Section1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {altNames: false, lastRoll: null}
        this.rollNames = this.rollNames.bind(this);
    }

    rollNames(){
        const result = roll(6);
        this.setState({lastRoll: result});
        this.setState({altNames: false});
        if(result > 5) this.setState({altNames: true});
    }

    render(){
        const lastRoll = this.state.lastRoll;
        const altNames = this.state.altNames;
        var YouRolled = (<p>You have not yet rolled</p>);
        var NumOfNames = (<p>We can't know until you roll...</p>);
        if(lastRoll != null){
            YouRolled = (<p>You rolled: {lastRoll}</p>);
            NumOfNames = (<p>You have 1 name.</p>);
            if(altNames){
                NumOfNames = (<p>You have 1 name + 6 other alternate names.</p>);
            }
        }
        
        
        return(
            <div className="section">
                <h2>Section 1: Determining How Many Names You Have</h2>
                <h4>
                    <i>
                    Kojima often creates characters that have many alternate names,
                    so we must first figure out how many names you will have.
                    </i>
                </h4>
                {YouRolled}
                <button onClick={this.rollNames}>Roll</button>
                {NumOfNames}
            </div>
        )
    }
}

export default Section1;