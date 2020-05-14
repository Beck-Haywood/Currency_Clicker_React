import React, { Component } from 'react'

class Clicker extends Component {
  constructor(props) {
    super(props)
    this.state = { pennies: 0, nickels: 0, dimes: 0, quarters: 0 }
    this.total = 0
  }

  increment(coin) {
    const newState = {}
    newState[coin] = this.state[coin] + 1
    this.setState(newState)
  }
  increment_total_money(coin) {
    const newState = {}
    if (coin === 'pennies') {
      newState[coin] = this.total + 0.01
    }
    if (coin === 'nickels') {
      newState[coin] = this.total + 0.05
    }
    if (coin === 'dimes') {
      newState[coin] = this.total + 0.10
    }
    if (coin === 'quarters') {
      newState[coin] = this.total + 0.25
    }
    this.setState(newState)
  }

  render(props) {
    const {pennies, nickels, dimes, quarters} = this.state
    const { coin_type } = this.props
    return (
      <div>
        <div className="Stats">
            <h1>Total pennies: {pennies}</h1>
            <h1>Total nickels: {nickels}</h1>
            <h1>Total dimes: {dimes}</h1>
            <h1>Total quarters: {quarters}</h1>
            <h1>Total Money: ${pennies / 100}</h1>
        </div>
    
        <button onClick={(e) => {
          // console.log({coin_type})
          this.increment({coin_type}.coin_type)
          this.increment_total_money({coin_type})
        }}>Click</button>
      </div>
    )
  }
}
export default Clicker
