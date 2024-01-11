// ? ===============================
// ?         FONKSİYONLAR
// ? ===============================

// !--------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !--------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");

// //!Funct expression ve arrow func yontemlerinde
//^SÜSLÜ KULLANMAYABİLİRİZ. SÜSLÜ YOKSA RETURN DE YOK. VARSA, VAR
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alırsiniz.

function a() {

}

const b = function (){

}

//&     arrow tek farkı üstteki function yerine parantez sonrası ok koymak

const control = () => {}


const kontrolEt = (sayi) => sayi % 3 == 0 ? "3'ün katıdır" : "3'ün katı değildir";


  console.log(kontrolEt(25));