// 1'den 8'ye kadar olan sayılardan biri eksik. o eksiği bulun
    
function findMissingNumber(arr) {
    const n = arr.length+1
    const nToplam = n* (n+1) / 2;
    const diziToplam = arr.reduce((a,b) => a+b, 0);
    return nToplam - diziToplam 
}

    const missingNumber = findMissingNumber([1, 2, 4, 6, 3, 7, 8]);
    console.log(missingNumber); // Output: 5


//& başka bir çözüm
function eksikSayilariBul(dizi, baslangic, bitis) {
        let tamSayilar = new Set();
        for (let i = baslangic; i <= bitis; i++) {
            tamSayilar.add(i);
        }
        for (let j = 0; j < dizi.length; j++) {
            tamSayilar.delete(dizi[j]);
        }
        return Array.from(tamSayilar);
}
    let sayiDizisi = [1, 2, 4, 6, 7, 9, 10, 11, 12, 15];
    let baslangic = 1;
    let bitis = 20;
    let eksikler = eksikSayilariBul(sayiDizisi, baslangic, bitis);
    console.log("Eksik sayılar: " + eksikler.join(", "));






/* --------------------------------------------------------------------------- */
/*      XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX     */ 
/* --------------------------------------------------------------------------- */







    function rotateArrayObjects(arr, steps) {
        // Your code here
        }
        // Example usage:
        const inputArray = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Bob' },
        { id: 4, name: 'Alice' }
        ];


        function rotateArrayObjects(arr, steps) {
            return arr.slice(steps).concat(arr.slice(0, steps));
           }

           
        const rotatedArray = rotateArrayObjects(inputArray, 2);
        console.log(rotatedArray);
        /*
        Output: [
        { id: 3, name: 'Bob' },
        { id: 4, name: 'Alice' },
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' }
        ]
        */