// 1. Write a function to calculate the area of a rectangle.
// The function should take width and height as parameters and return the area.

function calculateRectangleArea(width, height) {
    return width*height
  }
  // Test the function
  console.log(calculateRectangleArea(5, 8)); // Expected output: 40






// 2. Write a function that prints the numbers from 1 to 10 using a for loop.
function printNumbers(start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
  }
  // Call the function
  printNumbers(1,10); // Expected output: 1 2 3 4 5 6 7 8 9 10






// 3. Create an object representing a car with properties like model, year, and color.
// Write a function to display information about the car.
let car = [{
    model: "Toyota Camry",
    year: 2022,
    color: "Blue"
  },

  {
    model: "Nissan",
    year: 2012,
    color: "Black"
  }

]

 function displayCarInfo(a) {
    console.log(a[1].model);
    car.map((x) =>{
        console.log(x.model);  
    })
  }

displayCarInfo(car)
  // Call the function
 // Expected output: "Toyota Camry, 2022, Blue"





// 4. Create a function that takes a person object (with properties like name, age, and occupation)
// and prints a greeting message including their name.
let person = {
    name: "John Doe",
    age: 30,
    occupation: "Engineer"
  };
  
  function greetPerson(person) {
    return `Hello, ${person.name}! How's being an ${person.occupation} at ${person.age}?` 
}
  // Call the function
console.log(greetPerson(person)); // Expected output: "Hello, John Doe! How's being an Engineer at 30?"
  




// 5. Create an array of objects representing books (with properties like title, author, and pages).
// Write a function to display information about each book using a loop.

let books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281 },
    { title: "1984", author: "George Orwell", pages: 328 }
  ];
  
  function displayBookInfo(books) {
    for (let book of books) {
        console.log(`Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}`);
    }
  }
  // Call the function
  displayBookInfo(books);
  // Expected output:
  // "Title: The Great Gatsby, Author: F. Scott Fitzgerald, Pages: 180"
  // "Title: To Kill a Mockingbird, Author: Harper Lee, Pages: 281"
  // "Title: 1984, Author: George Orwell, Pages: 328"
  




function sumOfArrays(arr1, arr2) {
    let sum1 = arr1.reduce((a, b) => a + b, 0);
    let sum2 = arr2.reduce((a, b) => a + b, 0);
    return sum1 + sum2;
}
//Test the function with:
let arr1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let arr2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
console.log(sumOfArrays(arr1, arr2)); // Output: 627




//Given a string, change every second letter to an uppercase 'Z'. Assume there are no spaces.

function changeEverySecondLetter(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if ((i + 1) % 2 === 0) {
            newStr += 'Z';
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}
let str = "javascript";
console.log(changeEverySecondLetter(str)); // Output: jZvZsZrZpZ

console.clear()

function prinThis (param) {
  console.log('x');
}
prinThis ('tapas')



//!    rest operator
function collectThinga (x, ...y) {
  console.log(x);
  console.log(y);
}
collectThinga (1,2,3,4,5,6,9,77,88,96)



//!  arrow functions
const add = (x,y) => {
  return x+y
}
console.log(add(5,2));

const madd = (x,y) => x+y;
console.log(madd(24,2));



//!   nested functions
function outer () {
  console.log('outer');
    function inner () {
      console.log(`inner`);
    }
    inner();  // iç fonksiyonu içeride çağırmak gerekiyor
}
outer()  //  önce outer yazar sonra inner



//!    global and function SCOPE
//* function scope'a globalden ERİŞİLEMEZ !! 
//^ bir fonksiyon tanımlandığı kapsam içindeki (global - lokal) bütün değişkenlere erişebilir!

function doSomething () {
  let x = 10;
  const y = 20;
  var z = 30;

  console.log(x,y,z);
}
doSomething ();
//! console.log(x,y,z);    hata veriyor globalden ERİŞİLEMİYOR


//^ const'a funck içindekilerle aynı değerleri globalde de tanımlayabiliyoruz
let x = 10;
const y = 20;
var z = 30;
doSomething()   // 10 20 30