import React from "react";


const PizzaBuild = (props) => {
    const {
        values,
        onInputChange,
        onSubmit,
        disabled,
        onCheckboxChange,
        errors,
    } = props
    
  return (
    <div>
      <h2>Build Your Own Pizza</h2>
      <form onSubmit={onSubmit}>
          <div className='errors'>{errors.name}</div>
          <label>Name
            <input 
            type='text'
            name='name'
            onChange={onInputChange}
            value={values.name}
            />
          </label>
          <p>Choice of Size</p>
          <div className='errors'>{errors.pizza_size}</div>
        <label>
          <select
            name="pizza_size"
            value={values.pizza_size}
            onChange={onInputChange}
          >
            <option value="">- Select Size-</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="xlarge">Xlarge</option>
          </select>
        </label>
        <p>Choice of Sauce</p>
        <div className='errors'>{errors.sauce}</div>
        <label>
            <input
            type='radio'
            name='sauce'
            value='red'
            onChange={onInputChange}
            />Original Red
        </label>
        <label>
            <input
            type='radio'
            name='sauce'
            value='ranch'
            onChange={onInputChange}
            />Garlic Ranch
        </label>
        <label>
            <input
            type='radio'
            name='sauce'
            value='bbq'
            onChange={onInputChange}
            />BBQ Sauce
        </label>
        <label>
            <input
            type='radio'
            name='sauce'
            value='alfredo'
            onChange={onInputChange}
            />Spinach Alfredo
        </label>
        <p>Add Meat Toppings</p>

        <label>
          <input
            type='checkbox'
            name='pepperoni'
            checked={values.toppings.pepperoni}
            onChange={onCheckboxChange}
          />Pepperoni
        </label>

        <label>
          <input
            type='checkbox'
            name='sausage'
            checked={values.toppings.sausage}
            onChange={onCheckboxChange}
          />Sausage
        </label>

        <label>
          <input
            type='checkbox'
            name='bacon'
            checked={values.toppings.bacon}
            onChange={onCheckboxChange}
          />Bacon
        </label>

        <label>
          <input
            type='checkbox'
            name='chicken'
            checked={values.toppings.chicken}
            onChange={onCheckboxChange}
          />Grilled Chicken
        </label>

        <label>
          <input
            type='checkbox'
            name='steak'
            checked={values.toppings.steak}
            onChange={onCheckboxChange}
          />Steak
        </label>
        <p>Add Veggie Toppings</p>
        <label>
          <input
            type='checkbox'
            name='green_pepper'
            checked={values.toppings.green_pepper}
            onChange={onCheckboxChange}
          />Green Peppers
        </label>

        <label>
          <input
            type='checkbox'
            name='onion'
            checked={values.toppings.onion}
            onChange={onCheckboxChange}
          />Onions
        </label>

        <label>
          <input
            type='checkbox'
            name='tomatoes'
            checked={values.toppings.tomatoes}
            onChange={onCheckboxChange}
          />Diced Tomatoes
        </label>

        <label>
          <input
            type='checkbox'
            name='black_olives'
            checked={values.toppings.black_olives}
            onChange={onCheckboxChange}
          />Black Olives
        </label>

        <label>
          <input
            type='checkbox'
            name='pineapple'
            checked={values.toppings.pineapple}
            onChange={onCheckboxChange}
          />Pineapple
        </label>

        <label>
          <input
            type='checkbox'
            name='spinach'
            checked={values.toppings.spinach}
            onChange={onCheckboxChange}
          />Spinach
        </label>

        <label>
          <input
            type='checkbox'
            name='mushrooms'
            checked={values.toppings.mushrooms}
            onChange={onCheckboxChange}
          />Mushrooms
        </label>

        <label>
          <input
            type='checkbox'
            name='jalapeno'
            checked={values.toppings.jalapeno}
            onChange={onCheckboxChange}
          />Jalapeno
        </label>

        <label>
          <input
            type='checkbox'
            name='banana_pepper'
            checked={values.toppings.banana_pepper}
            onChange={onCheckboxChange}
          />Banana Peppers
        </label>
        <p>Special Instructions</p>
        <label>
            <textarea
            name='special_instructions'
            value={values.instructions}
            onChange={onInputChange}
            cols='70'
            rows='5'
            />
        </label>
      </form>
      <button disabled={disabled}>Submit</button>
    </div>
  );
};

export default PizzaBuild;
