import React, { useContext } from 'react'
import CartContext from '../../store/cart-context';
import classes from './MealItem.module.scss'
import MealItemForm from './MealItemForm';

function MealItem(props) {
 const cartContext =  useContext(CartContext)

 const price1 = props.pricee.toFixed(2)  
 
 const addToCartHandler = amount => {
  cartContext.addItem({
    id:props.id,
    name: props.name,
    amount : amount,
    price3:props.pricee
  })
 
 };
  return (
    <li key={props.key1} >
        <div><h3>{props.name}</h3></div>
        <div  className={classes.description} ><h3>{props.description}</h3></div>
        <div  className={classes.price}><h3>${price1}</h3></div>
        <div>  
          <MealItemForm id={props.id} onAddToCart = {addToCartHandler} />
        </div>
    </li>
  )
}

export default MealItem