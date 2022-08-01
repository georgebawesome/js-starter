const request = require('native-request')

console.log('fetching data - started')
const getTodos = () => {
  return new Promise((resolve, reject) => {
  request.get('https://jsonplaceholder.typicode.com/todos/1', (err, data) => {
      if (err) reject(data)

      resolve(data)

      // console.log(data)
      // console.log('fetching data - completed')
      // ... 
    })
  })
}

getTodos()
  .then(response => console.log(response))
  .catch(err => console.log(err))


// const users = ['user1', 'user2', 'user3']
// const getUsers = () => {
//   setTimeout(() => {
//     users.forEach(user => {
//       console.log(user)
//     })
//   }, 1000)
// }

// const createUser = (user, callback) => {
//   setTimeout(() => {
//     users.push(user)
//     callback()
//   }, 2000)
// }

// createUser('user4', getUsers)