//^Guess Number Game

//* //? : Tahmin Oyunu
//* Program 1*20 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer 5 hak içinde bildi ise "Tebrikler  bildiniz" yazacaktır.

let devam;
do {
    const rastgele= Math.ceil(Math.random()*20)
    console.log(rastgele);
    
    let hak=5;
    
    while(hak>0) {
    
        const guess = +prompt(`Sayı tahmin ediniz:`)
    
        hak--;
    
        if (rastgele==guess) {
            console.log(`Tutturdun :)🎉`);
            break;
        } else if (rastgele>guess) {
            console.log(`Arttır🔼 `);
            console.log(`${hak} hakkınız kaldı!`); 
        } else {
            console.log(`Azalt 🔽`);
        console.log(`${hak} hakkınız kaldı!`); 
     }
     if (hak==0) {
        console.log(`Üzgünüm, hakkınız kalmadı! Bilgisayarın tuttuğu sayı ${rastgele} idi...`);
     }
    }
    devam=prompt(`Devam etmek için e'ye basın`)
    
} while (devam.toLocaleLowerCase()=="e");


