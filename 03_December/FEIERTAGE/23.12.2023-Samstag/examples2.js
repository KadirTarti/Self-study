
/*

let monthName = prompt("Enter a month name: ");

let monthNumber;

switch (monthName.toLowerCase()) {
  case "january":
      monthNumber = 1;
      break;
  case "february":
      monthNumber = 2;
      break;
  case "march":
      monthNumber = 3;
      break;
  case "april":
      monthNumber = 4;
      break;
  case "may":
      monthNumber = 5;
      break;
  case "june":
      monthNumber = 6;
      break;
  case "july":
      monthNumber = 7;
      break;
  case "august":
      monthNumber = 8;
      break;
  case "september":
      monthNumber = 9;
      break;
  case "october":
      monthNumber = 10;
      break;
  case "november":
      monthNumber = 11;
      break;
  case "december":
      monthNumber = 12;
      break;
  default:
      console.log("Invalid month name. Please enter a valid month name.");
      
}

console.log(monthNumber);

*/


//* Girilen farklı 3 tam sayının toplamını, çarpımını, en küçüğünü ve en büyüğünü yazdıran programı yazınız.

/*
let sayi1 = +prompt(`Lütfen ilk sayıyı giriniz: `)
let sayi2 = +prompt(`Lütfen ikinci sayıyı giriniz: `)
let sayi3 = +prompt(`Lütfen üçüncü sayıyı giriniz: `)

let toplam  = sayi1 + sayi2 + sayi3;
let carpim = sayi1 * sayi2 * sayi3;

let minimum = Math.min(sayi1, sayi2, sayi3);
let maximum = Math.max(sayi1, sayi2, sayi3);

console.log(`Üç sayının toplamı : ${toplam}`);
console.log(`Üç sayının çarpımı : ${carpim}`);
console.log(`Üç sayının en büyüğü : ${maximum}`);
console.log(`Üç sayının en küçüğü : ${minimum}`);

*/

// !------------------------------------------

//* Girilen sayıların tek veya çift olduğunu bildiren programı tasarlayınız. (Ternary deyimi ile yapınız).

let sayi = parseInt(prompt(`Lütfen bir sayı girin:`))

let sonuc = sayi % 2 === 0 ? "even" : "odd";console.log("Number 1 is " + result1);