// Object propert shorthand
const username = 'Saif'
const userAge = 22

const user = {
    username,
    age: userAge,
    location: 'Pakitan'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const { label: naamchange, stock, rating } = product
// console.log(naamchange)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock=0} ={}) => {
    console.log(type, label, stock)
}

transaction('order', product)