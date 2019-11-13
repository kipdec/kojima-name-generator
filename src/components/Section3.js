import React from 'react';
import {Link} from 'react-router-dom';

class Section3 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            kurt:"",
            kubrick:"",
            joy:"",
            science:"",
            military:"",
            mads:""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(response){
        response.preventDefault();

        console.log(this.state);
    }

    handleInputChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render(){
        return(
            <div className="section">
                <h2>Section 3: Kojima Information</h2>
                <h4><i>Kojima character names reflect his own idiosyncrasies. He can't help himself.</i></h4>
                <form onSubmit={this.handleSubmit}>
                    <ol>
                        <li>
                            <p>Who is your favorite film character? (NOTE: must be played by Kurt Russell)</p>
                            <input name="kurt" value={this.state.kurt.value} onChange={this.handleInputChange} type="text"/>
                        </li>
                        <li>
                            <p>
                            What is the last word of the title of your favorite Kubrick film?
                            </p>
                            <input name="kubrick" value={this.state.kubrick.value} onChange={this.handleInputChange} type="text"/>
                        </li>
                        <li>
                            <p>What is the first word in the title of your favorite Joy Division album?</p>
                            <input name="joy" value={this.state.joy.value} onChange={this.handleInputChange} type="text"/>
                        </li>
                        <li>
                            <p>What is a scientific term you picked up from listening to NPR once?</p>
                            <input name="science" value={this.state.science.value} onChange={this.handleInputChange} type="text" />
                        </li>
                        <li>
                            <p>What is a piece of military hardware you think looks cool even though war is bad?</p>
                            <input name="military" value={this.state.military.value} onChange={this.handleInputChange} type="text" />
                        </li>
                        <li>
                            <p>What is something you could watch Mads Mikkelson do all day? (one word)</p>
                            <input name="mads" value={this.state.mads.value} onChange={this.handleInputChange} type="text" />
                        </li>
                    </ol>
                    <Link to="/section/4">Continue</Link>
                </form>
            </div>
        )
    }
}

export default Section3;