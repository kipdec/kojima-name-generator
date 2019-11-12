import React from 'react';

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
            <div>
                <h1>Section 3: Kojima Information</h1>
                <h3><i>Kojima character names reflect his own idiosyncrasies. He can't help himself.</i></h3>
                <form onSubmit={this.handleSubmit}>
                    <ol>
                        <li>
                            Who is your favorite film character? (NOTE: must be played by Kurt Russell)
                            <input name="kurt" value={this.state.kurt.value} onChange={this.handleInputChange} type="text"/>
                        </li>
                        <li>
                            What is the last word of the title of your favorite Kubrick film?
                            <input name="kubrick" value={this.state.kubrick.value} onChange={this.handleInputChange} type="text"/>
                        </li>
                        <li>
                            What is the first word in the title of your favorite Joy Division album?
                            <input name="joy" value={this.state.joy.value} onChange={this.handleInputChange} type="text"/>
                        </li>
                        <li>
                            What is a scientific term you picked up from listening to NPR once?
                            <input name="science" value={this.state.science.value} onChange={this.handleInputChange} type="text" />
                        </li>
                        <li>
                            What is a piece of military hardware you think looks cool even though war is bad?
                            <input name="military" value={this.state.military.value} onChange={this.handleInputChange} type="text" />
                        </li>
                        <li>
                            What is something you'd enjoy watching Mads Mikkelsen do? (one word)
                            <input name="mads" value={this.state.mads.value} onChange={this.handleInputChange} type="text" />
                        </li>
                    </ol>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Section3;