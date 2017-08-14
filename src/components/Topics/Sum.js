import React, { Component } from 'react';
//import EvenAndOdd from '../Topic/EvenAndOdd'
// import FilterObject from '../Topic/FilterObject'
// import FilterString from '../Topic/FilterString'
// import Palindrome from '../Topic/Palindrome'
// import Sum from '../Topic/Sum'

class Sum extends Component {
    constructor() {
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }
    updateNum1(val) {
        this.setState({number1: parseInt(val)})
    }

    updateNum2(val) {
        this.setState({number2: parseInt(val)})
    }

    solution(num1, num2) {
       var sum = num1 + num2;
       this.setState({sum:sum})
    }
    

  render() {
      return(
    <div className="puzzleBox sumPB"> 
      <h4>Sum</h4>
      <input className="inputLine" onChange={(e) => this.updateNum1(e.target.value)}></input>
      <input className="inputLine" onChange={(e) => this.updateNum2(e.target.value)}></input>
      <button className="confirmationButton" onClick={(e) => this.solution(this.state.number1, this.state.number2)}>Add</button>
      <span className="resultsBox"> Sum: {JSON.stringify(this.state.sum)}</span>
    </div>
  )
}
}

export default Sum;  