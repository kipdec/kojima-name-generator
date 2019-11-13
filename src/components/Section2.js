import React from 'react';

class Section2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
            fullName: "",
            occupation: "",
            breed: "",
            story: "",
            object:"",
            skill:"",
            number:"",
            fear:"",
            realFear:"",
            activity:"",
            condition:"",
            som:"",
            name:"",
            zodiac:"",
            persona:""
            
        }
        this.submitProfile = this.submitProfile.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    submitProfile(response){
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
                <h2>Section 2: Personal Information</h2>
                <h4><i>
                    Kojima's characters have names that are directly related to their own character traits.
                    This information will make sure your name fits your personality.
                    </i></h4>
                <form onSubmit={this.submitProfile}>
                    <ol>
                        <li>
                            <p>What is your full name?</p>
                            <input name="fullName" type="text" value={this.state.fullName.value} onChange={this.handleInputChange} />
                        </li>
                        <li>
                            <p>What do you do at your occupation? (A single noun. E.g. 'Farmer')</p>
                            <input name="occupation" value={this.state.occupation.value} onChange={this.handleInputChange} type="text" />
                        </li>
                        <li>
                            <p>What was your first pet's specific species/breed? If you never had a pet, please answer with an animal you wish you owned.</p>
                            <input name="breed" value={this.state.breed.value} onChange={this.handleInputChange} type="text" />
                        </li>
                        <li>
                            <p>What's your most embarrassing childhood memory? (Two words)</p>
                            <input name="story" value={this.state.story.value} onChange={this.handleInputChange} type="text" />
                        </li>
                        <li>
                            <p>What is the object you'd least like to be stabbed by?</p>
                            <input name="object" value={this.state.object.value} onChange={this.handleInputChange} type="text"/>
                        </li>
                        <li>
                            <p>What is something you are good at? (Verb ending in -ing)</p>
                            <input name="skill" value={this.state.object.value} onChange={this.handleInputChange} type="text" />
                        </li>
                        <li>
                            <p>How many carrots do you believe you could eat in one sitting, if someone,
                            like, forced you to eat as many carrots as possible?</p>
                            <input name="number" value={this.state.object.value} onChange={this.handleInputChange} type="text" />
                        </li>
                        <li>
                             <p>What is your greatest intangible fear? (e.g. death, loneliness, fear itself)</p>
                             <input name="fear" value={this.state.fear.value} onChange={this.handleInputChange} type="text"/>
                        </li>
                        <li>
                            <p>What is your greatest tangible fear? (e.g. horses)</p>
                            <input name="realFear" value={this.state.realFear.value} onChange={this.handleInputChange} type="text"/>
                        </li>
                        <li>
                            <p>What is the last thing you did before starting this worksheet?</p>
                            <input name="activity" value={this.state.activity.value} onChange={this.handleInputChange} type="text" />
                        </li>
                        <li>
                            <p>What condition is your body currently in? (single word answer)</p>
                            <input name="condition" value={this.state.condition.value} onChange={this.handleInputChange} type="text" />
                        </li>
                        <li>
                            <p>Favorite state of matter?</p>
                            <input name="som" value={this.state.som.value} onChange={this.handleInputChange} type="text" />
                        </li>
                        <li>
                            <p>A word your name kind of sounds like? (e.g. Brian -> Brain)</p>
                            <input name="name" value={this.state.name.value} onChange={this.handleInputChange} type="text" />
                        </li>
                        <li>
                            <p>What is your Zodiac sign?</p>
                            <input name="zodiac" value={this.state.zodiac.value} onChange={this.handleInputChange} type="text" />
                        </li>
                        <li>
                            <p>If you had to define your personality in one word, what would it be?</p>
                            <input name="persona" value={this.state.persona.value} onChange={this.handleInputChange} type="text" />
                        </li>
                    </ol>
                    
                    <input type="submit" value="submit"/>
                </form>
            </div>
            
        )
    }
}

export default Section2;