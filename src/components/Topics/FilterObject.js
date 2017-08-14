import React, { Component } from 'react';
//import EvenAndOdd from '../Topic/EvenAndOdd'
// import FilterObject from '../Topic/FilterObject'
// import FilterString from '../Topic/FilterString'
// import Palindrome from '../Topic/Palindrome'
// import Sum from '../Topic/Sum'

class FilterObject extends Component {
    constructor() {
        super();

    this.state = {
        employees: [
                {name: 'Jimmy Joe', title: 'Hack0r', age: 12} ,
                {name: 'Jeremy Schrader', age: 24, hairColor: 'brown'} ,
                {name: 'Carly Armstrong',title: 'CEO',}
            ],
        
        userInput: '',
        filteredEmployees: []
        }
    }

    change (val) {
        this.setState({userInput: val});
    }
    solution(input) {
        var employees = this.state.employees;
        var filteredEmployees = [];

        for (var i = 0; i < employees.length; i++) {
            if (employees[i].hasOwnProperty(input)) {
                    filteredEmployees.push(employees[i]);
            }
        }
        this.setState({ filteredEmployees: filteredEmployees});
    }
  render() {
      return(
    <div className="puzzleBox filterObjectPB"> 
        <h4>FilterObject</h4>
        <span className="puzzleText">Original: { JSON.stringify(this.state.employees, null, 10) } </span>
        <input className="inputLine" onChange={(e) => this.change(e.target.value)}></input>
        <button className="confirmationButton" onClick={(e) => this.solution(this.state.userInput)}>Filter</button>
        <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) } </span>
    </div>
  )
}
}

export default FilterObject;  