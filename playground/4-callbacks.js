// const geocode = (address, callback) =>
// {
//     setTimeout(()=>{
//         const data ={
//             latitude: 0,
//             longitude: 0
//         }

//         callback(data)
//     }, 2000)  
// }

// geocode('Los Angeles', (data) =>
// {
//     console.log(data)
// })


const add = (arg1, arg2, callback) => {
    setTimeout(() => {
        const sum = arg1 + arg2

        callback(sum)
    }, 2000);
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

