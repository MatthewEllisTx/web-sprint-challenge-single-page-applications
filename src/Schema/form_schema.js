import * as yup from 'yup';

const pizzaSchema = yup.object().shape({
  size: yup.string()
    .trim()
    .required('Size is required'),
  sauce: yup.string()
    .required('Sauce is required'),
  toppings: yup.array()
    .required('Toppings array is required')
    .max(10, 'Choose 10 or fewer toppings'),
  'gluten-free': yup.bool()
    .required('Must be true or false'),
  quantity: yup.number()
    .required('Quantity is required')
    .min(1),
  instructions: yup.string()
    .max(280)
});

export default pizzaSchema;