const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python'];
let age = 250;
let isMarried = true;
const student = {
  firstName: 'Asabeneh',
  lastName: 'Yetayehe',
  age: 250,
  isMarried: true,
  skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
};

const txt = `{
  "Alex": {
    "email": "alex@alex.com",
    "skills": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "age": 20,
    "isLoggedIn": false,
    "points": 30
  },
  "Asab": {
    "email": "asab@asab.com",
    "skills": [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node"
    ],
    "age": 25,
    "isLoggedIn": false,
    "points": 50
  },
  "Brook": {
    "email": "daniel@daniel.com",
    "skills": [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux"
    ],
    "age": 30,
    "isLoggedIn": true,
    "points": 50
  },
  "Daniel": {
    "email": "daniel@alex.com",
    "skills": [
      "HTML",
      "CSS",
      "JavaScript",
      "Python"
    ],
    "age": 20,
    "isLoggedIn": false,
    "points": 40
  },
  "John": {
    "email": "john@john.com",
    "skills": [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux",
      "Node.js"
    ],
    "age": 20,
    "isLoggedIn": true,
    "points": 50
  },
  "Thomas": {
    "email": "thomas@thomas.com",
    "skills": [
      "HTML",
      "CSS",
      "JavaScript",
      "React"
    ],
    "age": 20,
    "isLoggedIn": false,
    "points": 40
  },
  "Paul": {
    "email": "paul@paul.com",
    "skills": [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node"
    ],
    "age": 20,
    "isLoggedIn": false,
    "points": 40
  }
}`;

// Level 1
const skillsJSON = JSON.stringify(skills);
console.log(skillsJSON); // Output: ["HTML","CSS","JS","React","Node","Python"]
const ageJSON = JSON.stringify(age);
console.log(ageJSON); // Output: "250"
const isMarriedJSON = JSON.stringify(isMarried);
console.log(isMarriedJSON); // Output: "true"

const studentJSON = JSON.stringify(student);
console.log(studentJSON); // Output: {"firstName":"Asabeneh","lastName":"Yetayehe","age":250,"isMarried":true,"skills":["HTML","CSS","JS","React","Node","Python"]}

// Level 2
const studentJSON2 = JSON.stringify({
  firstName: student.firstName,
  lastName: student.lastName,
  skills: student.skills
});
console.log(studentJSON2); // Output: {"firstName":"Asabeneh","lastName":"Yetayehe","skills":["HTML","CSS","JS","React","Node","Python"]}

// Level 3
const txtObj = JSON.parse(txt);
console.log(txtObj); // Output: an object with the parsed data

let maxSkills = 0;
let maxSkillsUser = '';

for (const user in txtObj) {
  const skillsCount = txtObj[user].skills.length;
  if (skillsCount > maxSkills) {
    maxSkills = skillsCount;
    maxSkillsUser = user;
  }
}

console.log(`The user with the most skills is ${maxSkillsUser} with ${maxSkills} skills.`);
// Output: The user with the most skills is Asab with 7 skills.