export const productFormFields = [
    {label: 'Product Name', name: 'name', type: 'text', required: true},
    {label: 'Quantity', name: 'quantity', type: 'number', required: true},
    {label: 'Category', name: 'categoryId', type: 'select', required: true, defaultOptionMessage: "Select a category"},
    {label: 'Price', name: 'againstValue', type: 'number', required: true},
    {
        label: 'Currency',
        name: 'currency',
        type: 'select',
        required: false,
        defaultOptionMessage: "Select your currency"
    },
    {label: 'Exchange Rate', name: 'exchangeRate', type: 'number', required: true, disabled: true},
    {label: 'Against value', name: 'price', type: 'number', required: true, disabled: true}
]