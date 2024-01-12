
aa()   //! fonksiyonu üstte de altta da çağırsak yazdırır!


function aa(){     // func tipi void ...

    console.log('Hello');
    console.log('2');
    
}


console.log(typeof aa());






let cenny = "cenk"
bb(cenny)

function bb(name){     
    console.log('Hello', name);   
}



let user = 'KullanıcıAdı'

cc (user)

function cc(name = 'User') {

    console.log('Mraba', name);
}

cc() // dışarıdan gelen value olmayınca default değer olan user'ı aldı








// üçgenin kenar ölçülerini al... tipini yazdır
function ucgenTipi (a, b, c) {

    if (a == b && b == c) {
        return 'Eşkenar Üçgen';
    } else if (a == b || a == c || b == c) {
        return 'İkizkenar Üçgen';
    } else {
        return 'Çeşitkenar Üçgen';
    }
}

console.log(ucgenTipi(4, 5, 6))
console.log(ucgenTipi(7, 7, 6))
console.log(ucgenTipi(12, 12, 12))




// saat dakika ve saniye parametreleri alıp toplam saniyeyi döndür


function convertToSeconds(x, y, z,){
    let toplam = (x*60*60) + (y*60) + (z)
    console.log(toplam);
}

convertToSeconds(1, 1, 1)
