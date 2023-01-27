// ['Ann', 'Tom', 'Bob', 'Kate']; ['Tom', 'Bob'] => ['Godd job, Ann', 'Good job, Kate']

const getMessagesForPassedStudents = (allStudents, failedStudents) =>
  allStudents
    .filter((name) => !failedStudent.includes(name))
    .map((name) => "Good job, " + name);

const allStudents = ["Ann", "Tom", "Bob", "Kate"];
const failedStudents = ["Tom", "Bob"];

console.log(getMessagesForPassedStudents(allStudents, failedlStudents));

// 1. Find passed students
// 2. Add Good job
