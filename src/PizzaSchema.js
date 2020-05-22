import * as yup from 'yup';

const PizzaSchema = yup.object().shape({
    name: yup.string()
    .trim()
    .min(3, 'Your name must be at least three characters long')
    .required('Must give us a name for your Order'),
    pizza_size: yup.string()
    .required('Must Pick a Pizza Sauce'),
    sauce: yup.string()
    .required('Must Pick a Sauce'),

})
export default PizzaSchema