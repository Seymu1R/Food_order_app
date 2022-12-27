import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.scss";

function MealItemForm(props) {
  const amountInputRef = useRef();
  const [validstate , setValidState] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const numberEnteredAmount = +enteredAmount;

    if (enteredAmount.trim().length === 0 || numberEnteredAmount < 1) {
      setValidState(false)
      return;
    }
    props.onAddToCart(numberEnteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="amount"
        input={{
          id: "amount_ " + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!validstate &&  <p>Please enter valid amount</p>}
    </form>
  );
}

export default MealItemForm;
