import React, { Component } from 'react';
//import EvenAndOdd from '../Topic/EvenAndOdd'
// import FilterObject from '../Topic/FilterObject'
// import FilterString from '../Topic/FilterString'
// import Palindrome from '../Topic/Palindrome'
// import Sum from '../Topic/Sum'

class Palindrome extends Component {
    constructor() {
        super();

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    change(val) {
        this.setState({userInput: val})
    }

    solution(input) {
        var isPalindrome;
        if(input === input.split('').reverse().join('')){
            isPalindrome = true;
        } else {
            isPalindrome = false;
        }

        this.setState({
            palindrome: isPalindrome
        });
    }

  render() {
      return(
    <div className="puzzleBox filterStringPB"> 
       <h4>Palindrome</h4>
       <input className="inputLine" onChange={(e) => this.change(e.target.value)}></input>
       <button className="confirmationButton" onClick={(e) => this.solution(this.state.userInput)}>Check</button>
       <span className="resultsBox">Palindrome: { JSON.stringify(this.state.palindrome) }</span>
    </div>
  )
}
}

export default Palindrome;  