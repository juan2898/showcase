import React, { Component } from 'react';
//import EvenAndOdd from '../Topic/EvenAndOdd'
// import FilterObject from '../Topic/FilterObject'
// import FilterString from '../Topic/FilterString'
// import Palindrome from '../Topic/Palindrome'
// import Sum from '../Topic/Sum'

class FilterString extends Component {
    constructor() {
        super();

        this.state = {
            emails: ['otf2898@gmail.com', 'sob@gmail.com', 'tde2898@gmail.com', 'tgod2898@gmail.com'],
            userInput: '',
            filteredEmail: []
        }
    }

    change (val) {
        this.setState({userInput: val});
    }

    solution (input) {
        var emails = this.state.emails;
        var filteredEmail = [];

        for (var i = 0; i < emails.length; i++) {
        if (emails[i].includes(input)) {
            filteredEmail.push(emails[i])
        }
        this.setState({filteredEmail: filteredEmail})
    }
    }

  render() {
      return(
    <div className="puzzleBox filterStringPB"> 
       <h4>Filter String</h4>
       <span className="puzzleText"> Names: { JSON.stringify(this.state.emails, null, 10) }</span>
       <input className="inputLine" onChange={(e) => this.change(e.target.value)}></input>
       <button className="confirmationButton" onClick={(e) => this.solution(this.state.userInput)}>Filter</button>
       <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredEmail, null, 10) } </span>
    </div>
  )
}
}

export default FilterString;  