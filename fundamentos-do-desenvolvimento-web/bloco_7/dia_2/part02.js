const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Ex 1
const addNewShift = (obj, key, value) => obj[key] = value;
addNewShift(lesson2, 'turno', 'manhã');

// Ex 2
const keyListOfObjects = obj => Object.keys(obj);
console.log(keyListOfObjects(lesson2));

// Ex 3
const objectSize = obj => Object.keys(obj).length;
console.log(objectSize(lesson2));

// Ex 4
const listObjectValues = obj => Object.values(obj);
console.log(listObjectValues(lesson2));

// Ex 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

// Ex 6
const totalNumberOfStudents = obj => {
  let total = 0;
  
  for (key in obj) {
    if(obj[key].numeroEstudantes) total += obj[key].numeroEstudantes;
  }
  
  return total;
}
console.log(totalNumberOfStudents(allLessons));

// Ex 7
const keyValue = (obj, key) => Object.values(obj)[key];
console.log(keyValue(lesson1, 0));

// Ex 8
const verifyPair = (obj, key, value) => (obj[key] === value) ? true : false;
console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'numeroEstudantes', '10'));