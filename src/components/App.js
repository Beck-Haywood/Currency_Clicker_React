import React from 'react';
import './App.css';
import penny from './penny.png';
import nickel from './nickel.png';
import dime from './dime.png';
import quarter from './quarter.png'



// import Clicker from './clicker'
function Buycoins(props) {
  if (props.hidden) {
    return ( null
    )
  }
  return (
    <button onClick = {() => { 
      props.onClick()
        }}>{props.label}: {props.value}</button>
  )
}
function Icon(props) {
  if (props.hidden) {
    return ( null
    )
  }
  return (
    <img src={props.link} width={props.width} height={props.height}/>
  )
}

class App extends React.Component{
  constructor() {
    super()
    this.state = { pennies: 0, nickels: 0, dimes: 0, quarters: 0, hideNickels: false, hideDimes: false, hideQuarters: false, total: 0}
  }
  increment_coins(coin) {
    const newState = {}
    newState[coin] = this.state[coin] + 1
    console.log(newState)
    this.setState(newState)
  }
  update_total(amount) {
    let {total} = this.state
    total += amount
    this.setState({total})
  }
  render() {
    const {pennies, nickels, dimes, quarters, total} = this.state
    return (
      <div>
        <header className="App-header">
        <Header title={`Currency Clicker: $${total.toFixed(2)}`}/>
        {/* <Header title={`Currency Clicker: $${this.total}`}/> */}

        <div className="FlexBox">

          <button onClick = {() => {
            this.increment_coins('pennies')
            this.update_total(0.01)

          }}>Pennies: {this.state.pennies}</button>
        


          <Buycoins 
            label = "Buy Nickels"
            hidden={this.state.hideNickels} 
            onClick={() => {
            // const pennies = this.state.pennies - 25
            if (total >= 0.25) {
              this.update_total(-0.25)
              this.setState({hideNickels: true, pennies})
            }
          }}/>
          <Buycoins 
            label = 'Nickels'
            value = {this.state.nickels}
            hidden={!this.state.hideNickels}
            onClick={() => {
            this.setState({nickels : this.state.nickels + 1})
            this.update_total(0.05)
          }}/>

          <Buycoins 
            label = "Buy Dimes"
            hidden={this.state.hideDimes} 
            onClick={() => {
            if (total >= 1.25) {
              this.update_total(-1.25)
              this.setState({hideDimes: true, nickels})
            }
          }}/>
          <Buycoins 
            label = 'Dimes'
            value = {this.state.dimes}
            hidden={!this.state.hideDimes}
            onClick={() => {
            this.setState({dimes : this.state.dimes + 1})
            this.update_total(0.10)
          }}/>

          <Buycoins 
            label = "Buy Quarters"
            hidden={this.state.hideQuarters} 
            onClick={() => {
            if (total >= 2.50) {
              this.update_total(-2.50)
              this.setState({hideQuarters: true, dimes})
            }
          }}/>
          <Buycoins 
            label = 'Quarters'
            value = {this.state.quarters}
            hidden={!this.state.hideQuarters}
            onClick={() => {
            this.setState({quarters : this.state.quarters + 1})
            this.update_total(0.25)

          }}/>
        </div>
        <div className="Coins">
  
          <Icon link={penny} hidden={false} className="Penny" width="157" height="157"/>
          <Icon link={nickel} hidden={!this.state.hideNickels} className="nickel" width="175" height="175"/>
          <Icon link={dime} hidden={!this.state.hideDimes} className="dime" width="147" height="147"/>
          <Icon link={quarter} hidden={!this.state.hideQuarters} className="quarter" width="200" height="200"/>
        </div>
        </header>
      </div>
    );
  }
}

export default App;

function Header(props) {
  return (
    <h1>{props.title}</h1>
  )
}




