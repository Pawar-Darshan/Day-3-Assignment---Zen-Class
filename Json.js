// Question No.1: For the given JSON iterate over all for loops (for, for in, for of, forEach)
//Answer:
//Given Data as below:
var object = [
    { person: "Mohan", age: 2, company: "Guvi" },
    { person: "Rohan", age: 3, company: "Guvi Geeks" },
    { person: "Raju", age: 4, company: "Guvi Geek Network" },
];

//JSON iteration with the help of normal for loop:
for (let i = 0; i < object.length; i++) {
    console.log(`
    Person Name: ${object[i].person},
    Person age: ${object[i].age},
    Person company: ${object[i].company}`)
}
//Output:
// Person Name: Mohan,
// Person age: 2,
// Person company: Guvi

// Person Name: Rohan,
// Person age: 3,
// Person company: Guvi Geeks

// Person Name: Raju,
// Person age: 4,
// Person company: Guvi Geek Network

//JSON iteration with the help of for in loop:
for(let i in object){
    console.log(`
    Person Name: ${object[i].person},
    Person age: ${object[i].age},
    Person company: ${object[i].company}
    `)
}

//Output:
// Person Name: Mohan,
// Person age: 2,
// Person company: Guvi

// Person Name: Rohan,
// Person age: 3,
// Person company: Guvi Geeks

// Person Name: Raju,
// Person age: 4,
// Person company: Guvi Geek Network

//JSON iteration with the help of for of loop:
for(let item of object){
    console.log(`
    Person Name: ${item.person},
    Person age: ${item.age},
    Person company: ${item.company}
    `)
}

//Output:
// Person Name: Mohan,
// Person age: 2,
// Person company: Guvi

// Person Name: Rohan,
// Person age: 3,
// Person company: Guvi Geeks

// Person Name: Raju,
// Person age: 4,
// Person company: Guvi Geek Network

//JSON iteration with the help of forEach loop:
object.forEach((item) => {
    console.log(`
        Person Name: ${item.person},
        Person age: ${item.age},
        Person company: ${item.company}   
    `)
})
//Output:
// Person Name: Mohan,
// Person age: 2,
// Person company: Guvi

// Person Name: Rohan,
// Person age: 3,
// Person company: Guvi Geeks

// Person Name: Raju,
// Person age: 4,
// Person company: Guvi Geek Network

// Question No.2: Create your own resume data in JSON format
//Answer:
var resume = [{
    Name: "Darshan",
    Surname: "Pawar",
    Email: "officialdarshan007@gmail.com",
    Education: "B Tech in Computer Science",
    company: "KSB Limited",
    Address : {
        HouseName: "Chinamani Bungalow",
        HouseNumber: 69,
        Street: "Tapovan Road",
        City: "Nashik",
        Country: "India"
    },
    Courses : [
        "Full Stack Development Course",
        "AutoCAD",
        "Unigrafics"
    ],
    Hobbies : [
        "Reading",
        "Programming"
    ],
}]

for(let i = 0; i<resume.length; i++){
    console.log(resume[i]);
}

//Output: 
   
// {
//     Name: 'Darshan',
//     Surname: 'Pawar',
//     Email: 'officialdarshan007@gmail.com',
//     Education: 'B Tech in Computer Science',
//     company: 'KSB Limited',
//     Address: {
//       HouseName: 'Chinamani Bungalow',
//       HouseNumber: 69,
//       Street: 'Tapovan Road',
//       City: 'Nashik',
//       Country: 'India'
//     },
//     Courses: { course1: 'Full Stack Development Course', course2: 'Unigrafics' },
//     Hobbies: { hobby1: 'Reading', hobby2: 'Programming' }
//   }