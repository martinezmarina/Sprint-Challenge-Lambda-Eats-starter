import React from 'react'

const Order = (props) => {
    const {pizzaOrder} = props
    console.log(pizzaOrder)

    return(
        <div>
            This is your order:
            and then the pizza and all toppings will be displayed here
        </div>
    )
}

export default Order