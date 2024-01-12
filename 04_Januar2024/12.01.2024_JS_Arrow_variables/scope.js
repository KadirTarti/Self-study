// ? ==============================
// ?        FONKSİYONLAR-SCOPE
// ? ==============================
console.log("************ 4- SCOPE *************");

//! global scope... is for everyone.. everbody can see it

let first = 5;
let second = 12;
let third = 456;

console.log(first, second, third);

const scopeFunction = () => {
    first= 8;

    //& we assigned a new "second value" with let variable 
    let second= 45;
    let fourth = 1234;

    //&  return fourth yazılır. fonksiyon dışında bunu görmek için call yapılan yeri console.log da yazdırmalıyız
    return fourth
}
console.log(scopeFunction());
console.log(first);
console.log(second);




//***************************** */
//!   global variable

let num1 = 11;     //!    ---> global scope

const func1 = () => {

    let num1= 44;  //&  ---->   function scope

    num1++

    return num1
}
console.log(func1());


// The value from the function was assigned to the variable num1
num1=func1()  //^This is still global num1 but the value changed to 45







{
    num1++

    let x= 5;
    x++;
    let y= x+15;

    console.log(y);
}

