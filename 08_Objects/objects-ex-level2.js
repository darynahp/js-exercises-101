// 1. Find the person who has many skills in the users object.
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}


let mostSkilledPerson = '';
let maxSkills = 0;

for (const user in users) {
  const numberOfSkills = users[user].skills.length;

  if (numberOfSkills > maxSkills) {
    maxSkills = numberOfSkills;
    mostSkilledPerson = user;
  }
}

console.log(`${mostSkilledPerson} has the most skills: ${maxSkills}`);

// Count logged in users, count users having greater than equal to 50 points from the following object.

let loggedInCount = 0;
let highPointsCount = 0;

for (const user in users) {
  if (users[user].isLoggedIn) {
    loggedInCount++;
  }

  if (users[user].points >= 50) {
    highPointsCount++;
  }
}

console.log(`Logged in users: ${loggedInCount}`);
console.log(`Users with 50 or more points: ${highPointsCount}`);

// Find people who are MERN stack developer from the users object

const mernDevelopers = [];

for (const user in users) {
  const skills = users[user].skills;

  if (
    skills.includes('MongoDB') &&
    skills.includes('Express') &&
    skills.includes('React') &&
    skills.includes('Node')
  ) {
    mernDevelopers.push(user);
  }
}

console.log('MERN developers:', mernDevelopers);


