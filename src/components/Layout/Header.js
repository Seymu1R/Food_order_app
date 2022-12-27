import React, { Fragment } from 'react'
import meals from '../../assets/images/meals.jpg';
import classes from './Header.module.scss'
import HeaderCardButton from './HeaderCardButton';

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1  > ReactMeals </h1>
        <HeaderCardButton onClick={props.onShowcart} />
      </header>
      <div className={classes['main-image']} >
        <img src={meals } alt='A table full of delicious food!' />
      </div>
    </Fragment>
  )
}

export default Header