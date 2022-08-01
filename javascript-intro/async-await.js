const request = require('native-request')

const getTodos = () => {
  return new Promise((resolve, reject) => {
  request.get('https://jsonplaceholder.typicode.com/todos/1', (err, data) => {
      if (err) reject(data)
      resolve(data)
    })
  })
}

const getAPI = async () => {
  const res = await getTodos()
  console.log(res)
  console.log('data fetched')
}

getAPI()

// getTodos()
//   .then(response => console.log(response))
//   .catch(err => console.log(err))

