import React from 'react';
import {Link} from 'react-router-dom';
import {Roll, roll} from '../utilities';

class Section4 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hasMan: null,
            hasBig: false,
            hasOld: false,
            hasCondition: null,
            hasClone: false,
            hasKojima: null,
            hasBody: false
        }
        this.ManCheck = this.ManCheck.bind(this);
        this.ConditionCheck = this.ConditionCheck.bind(this);
        this.KojimaCheck = this.KojimaCheck.bind(this);
    }

    ManCheck(){
        this.setState({hasMan: false})
        if(roll(4) == 4){
            this.setState({hasMan: true})
        }
    }

    ResetConditions(){
        this.setState({
            hasCondition: null,
            hasBig: false,
            hasOld: false,
            hasBody: false
        })
    }

    ConditionCheck(){
        this.ResetConditions();
        switch(roll(8)){
            case 6:
                this.setState({
                    hasCondition: true,
                    hasBig: true,
                });
                break;
            case 7:
                this.setState({
                    hasCondition: true,
                    hasOld: true,
                });
                break;
            case 8:
                this.setState({
                    hasCondition: true,
                    hasBody: true
                });
                break;
            default:
                this.setState({
                    hasCondition: false
                });
                break;
        }
    }

    KojimaCheck(){
        this.setState({hasKojima: false});
        if(roll(100) == 69) this.setState({hasKojima: true});
    }

    render(){
        var manStatus = (<p>You can't know until you roll</p>);
        var conditionStatus = (<p>You can't know until you roll</p>);
        var kojimaStatus = (<p>You can't know until you roll</p>);
        var Next;
        // Check for man state
        if(this.state.hasMan != null){
            manStatus = (<p>You do not have this condition</p>);
            if(this.state.hasMan){
                manStatus = (
                    <p>
                        You have this condition. Your last name will include the suffix -man.
                        If your name already has -man at the end of it, I guess you're just going to have -manman
                        at the end of your name.
                    </p>)
            }
        }

        // Check for condition state
        if(this.state.hasCondition != null){
            conditionStatus = (<p>You do not have this condition</p>)
            if(this.state.hasCondition){
                if(this.state.hasBig) conditionStatus = 
                    (<p>You're big. Your name must have "Big" at the beginning of it</p>)
                if(this.state.hasOld) conditionStatus =
                    (<p>You are older than you once were. Your name must have "Old" at the beginning of it.</p>)
                if(this.state.hasBody) conditionStatus =
                    (<p>You are how you currently are. Adding your answer from Section 2, Number 11 to the beginning of your name.</p>)
            }
        }

        // Check for Kojima state
        if(this.state.hasKojima != null){
            kojimaStatus = (<p>You do not have this condition</p>)
            if(this.state.hasKojima){
                kojimaStatus = (<p>
                    Oh no. You are Hideo Kojima. Hideo Kojima created you and is also
                    you. You are the man who created himself and there is nothing you
                    can do about it. You’re in Kojima’s world—your world—and that’s
                    just the breaks, pal. Stop this worksheet now. You’re Hideo Kojima.
                    Go do the things that Hideo Kojima does.
                </p>)
            }
        }

        if(this.state.hasMan != null && this.state.hasCondition != null && this.state.hasKojima != null){
            Next = (<Link to="/section/5">Continue</Link>)
        }


        return (
            <div className="section">
                <h2>Section 4: Determining Your Name Conditions</h2>
                <h4>
                    Sometimes, a character will have a plot-based condition that affects their name.
                    You, too might have a condition that affects your name.
                    Conditions can stack, so please make note of how many your name has.
                </h4>
                <div>
                    <h3>THE -MAN CONDITION</h3>
                    <button onClick={this.ManCheck}>Roll</button>
                    {manStatus}
                </div>
                <div>
                    <h3>THE CONDITION CONDITION</h3>
                    <button onClick={this.ConditionCheck}>Roll</button>
                    {conditionStatus}
                </div>
                <div>
                    <h3>THE KOJIMA CONDITION</h3>
                    <button onClick={this.KojimaCheck}>Roll</button>
                    {kojimaStatus}
                </div>
                {Next}
            </div>
        )
    }
}

export default Section4;