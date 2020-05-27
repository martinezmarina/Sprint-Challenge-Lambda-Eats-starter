import * as yup from 'yup';

const PizzaSchema = yup.object().shape({
    name: yup.string()
    .trim()
    .min(2, 'Your name must be at least two characters long')
    .required('Must give us a name for your Order'),
    pizza_size: yup.string()
    .required('Must Pick a Pizza Sauce'),
    sauce: yup.string()
    .required('Must Pick a Sauce'),
    special_instructions: yup.string()
    .trim(),

})
export default PizzaSchema