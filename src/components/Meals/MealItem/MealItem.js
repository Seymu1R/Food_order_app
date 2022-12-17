import React from 'react'
import classes from './MealItem.module.scss'

function MealItem(props) {
 const price =`$${props.price.toFixed(2)}`;   
  return (
    <li key={props.id} >
        <div><h3>{props.name}</h3></div>
        <div  className={classes.description} ><h3>{props.description}</h3></div>
        <div  className={classes.price}><h3>{price}</h3></div>
        <div>   

        </div>
    </li>
  )
}

export default MealItem