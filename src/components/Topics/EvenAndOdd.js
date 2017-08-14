import React, { Component } from 'react';
// import EvenAndOdd from '../Topic/EvenAndOdd'
// import FilterObject from '../Topic/FilterObject'
// import FilterString from '../Topic/FilterString'
// import Palindrome from '../Topic/Palindrome'
// import Sum from '../Topic/Sum'

class EvenAndOdd extends Component {
    constructor () {
        super();

    this.state = {
        evenArray: [],
        oddArray: [],
        userInput: ''
     }
    }

    change (val) {
        this.setState({userInput: val});
    }

    solution(userInput) {
        var arr = userInput.split(',');
        var evens = [];
        var odds = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evens.push(arr[i]);
            } else {
                odds.push(arr[i]);
            }
        }
        this.setState({ evenArray: evens, oddArray: odds });
    }


  render() {
      return(
    <div className="puzzleBox evenAndOddPB"> 
       <h4>Evens and Odds</h4>
       <input className="inputLine" onChange={(e) => this.change(e.target.value)}></input>
       <button className="confirmationButton" onClick={(e) => this.solution(this.state.userInput)}>Split</button>
       <span className="resultsBox">Evens: { JSON.stringify(this.state.evenArray) }</span>
       <span className="resultsBox">Odds: { JSON.stringify(this.state.oddArray) } </span>
    </div>
  )
}
}

export default EvenAndOdd;  