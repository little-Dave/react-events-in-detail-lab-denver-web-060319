// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {

  handleClick = event => {
    event.persist();
    setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
    // console.log(event)
  }

  render() {
    // console.log(this.props.onDelayedClick)
    return (
      <div>
        <button onClick={this.handleClick}></button>
      </div>
    )
  }
}