import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(){
        super()
        this.state = {
            term: ""
        }
    }

    handleChange = e => {
        this.setState({term: e.target.value})
    }

    render() {
        return (
            <form noValidate autoComplete="off">
                <input className="search-bar" type="text" value={this.state.term} name="term" onChange={this.handleChange}/>
            </form>
        );
    }
}

export default SearchBar;