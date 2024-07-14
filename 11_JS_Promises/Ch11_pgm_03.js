// Promise constructor

// Promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.length > 0) {
      resolve(skills)
    } else {
      reject('Something wrong has happened')
    }
  }, 2000)
})

doPromise
 .then(result => {
    console.log(result)
  })
 .catch(error => console.log(error))

console.log('Waiting for 2 seconds...');

// after 2 seconds it will print the skills
// ["HTML", "CSS", "JS"]