import React, { Component } from 'react';

export default class SearchBar extends Component {
    //controlled form so component needs to keep state
    constructor(props){
        super(props);

        this.state = { term: '' }
    }

    render(){
        return (
            <form className="input-group">
                <input 
                    placeholder="Get a 5-day forcast"
                    className="form-control"
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary" >Submit</button>
                </span>
            </form>
        );
    }
}

