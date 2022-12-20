import React, { Component } from 'react'
import CartIcon from '../Cart/CartIcon'
import  classes from './HeaderCardButton.module.scss'

export class HeaderCardButton extends Component {
  render() {
    return (
      <button  className={classes.button} >
        <span className={classes.icon} >
        <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge} >99</span>        
      </button>
    )
  }
}

export default HeaderCardButton