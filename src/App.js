import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom'
import PizzaBuild from './Components/PizzaBuild'
import PizzaSchema from './Components/PizzaSchema'
import * as yup from 'yup';

const initialFormValues = {
  name: '',
  pizza_size: '',
  sauce: '',
  toppings: {
    pepperoni: false,
    sausage: false,
    bacon: false,
    chicken: false,
    steak: false,
    green_pepper: false,
    onion: false,
    tomatoes: false,
    black_olives: false,
    pineapple: false,
    spinach: false,
    mushrooms: false,
    jalapeno: false,
    banana_pepper: false,
  },
  special_instructions: '',
}
const initialFormErrors = {
  name: '',
  pizza_size: '',
  sauce: '',
}
const initialPizza = []
const initialDisabled = true

const App = () => {
  const [pizza, setPizza] = useState(initialPizza)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)


  const onInputChange = evt => {
    const { name } = evt.target
    const { value } = evt.target
    yup
      .reach(PizzaSchema, name)
      .validate(evt.target.value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

    setFormValues({
      ...formValues,
      [name]: value
    })
  }
  const onCheckboxChange = evt => {
    const { name } = evt.target
    const { checked } = evt.target
    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: checked
      },
    })
  }
  const onSubmit = evt => {
    evt.preventDefault()
    const newPizza = {
      name: formValues.name,
      pizza_size: formValues.pizza_size,
      sauce: formValues.sauce,
      toppings: Object.keys(formValues.toppings)
        .filter(igdt => formValues.toppings[igdt] === true),
      special_instructions: formValues.special_instructions
    }

    setPizza(newPizza)
    setFormValues(initialFormValues)
  }
  useEffect(() => {
    PizzaSchema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])
  return (
    <div>
      <header>
        <nav>
          <h1>Lambda Eats</h1>
          <Link to='/'>Home</Link>
          <Link className='buildPizza' to='/pizza_builder'>Build Your Pizza</Link>
        </nav>
      </header>

      <Switch>
        <Route path='/pizza_builder'>
          <PizzaBuild
            values={formValues}
            onInputChange={onInputChange}
            onCheckboxChange={onCheckboxChange}
            onSubmit={onSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
      </Switch>
      <div className="yourOrder">
        <h2>Your Order</h2>
        <p>Order Name: {pizza.name}</p>
        <p>Pizza Size: {pizza.pizza_size}</p>
        <p>Sauce: {pizza.sauce}</p>
        <p>Toppings: {pizza.toppings}</p>
        <p>Instructions: {pizza.special_instructions}</p>
      </div>
    </div>
  );
};
export default App;
