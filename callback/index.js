const { rejects } = require("node:assert");
const { resolve } = require("node:dns");
const { setTimeout } = require("node:timers");

console.log("1")

setTimeout(() => {
    console.log("2")
}, 1000);

console.log("3")

// burda 132 çıktısı bekleriz doğal olarak ancak bunu bir fonksiyon içerisinde yapsaydık undefined olur. bu durum olmasın istersek callback kullanırız. 

console.log("1")

const funcOne = (a) => {
    setTimeout(() => {
    return a
    }, 1000);
}

let val = funcOne("2")
console.log(val)

console.log("3")

/* callback fonksiyonu ile yaparsak dümdüz yapmak yerine. Callback'in asıl amacı "Sıralamayı Garanti Altına Almaktır".

JavaScript normalde asenkron işleri (API'den veri çekmek, veritabanına yazmak, süre beklemek) arkada yapar ve kodun geri kalanını çalıştırmaya devam eder. Callback ise projenin akışına şunu der: "Bu veri gelmeden şu işlemi yapma!"
*/

console.log("1")

const funcOne2 = (a,b) => {
    setTimeout(() => {
    b(a)
    }, 1000);
}

let val2 = funcOne2("2", (val) => { // callback fonk yapmış olduk
    console.log(val)
})


console.log("3")

//-------------------------------------------------------------------------------------
//Promise yapısı, JavaScript'te "vakit alan" her türlü işlemde kullanılır. Eğer bir işlemin sonucunu almak için beklemen gerekiyorsa (internet hızı, dosya boyutu, veritabanı yoğunluğu vb.),
// Promis de kullanabiliriz callback yerine    

// 1. ADIM: Program başlar başlamaz bu satır anında çalışır.
console.log("1"); 

/**
 * 2. ADIM: funcOne3 adında bir fonksiyon tanımlıyoruz.
 * Bu fonksiyon çağrıldığında bize bir "Promise" (Söz) objesi verecek.
 */
const funcOne3 = (a) => {
    // Geriye bir "Söz" (Promise) döndürüyoruz. 
    // resolve: İşlem başarılı olursa çağrılacak fonksiyon.
    // reject: İşlem başarısız olursa (hata çıkarsa) çağrılacak fonksiyon.
    return new Promise ((resolve, reject) => {
        
        let status = true; // Gerçek hayatta bu bir veritabanı sorgusu veya API cevabı olabilir.

        // 3. ADIM: Bir zamanlayıcı kuruyoruz (Asenkron işlem).
        // JavaScript bu satırı görünce "2 saniye bekle" emrini kenara not eder ve devam eder.
        setTimeout(() => {
            if(status) {
                // Eğer status true ise, "Sözümü tuttum, işte değerin" der (resolve).
                resolve(a); 
            } 
            else {
                // Eğer bir sorun varsa, "Hata oluştu" diyerek sözü bozar (reject).
                reject("hataa");
            }
        }, 2000); // Bekleme süresi: 2000 milisaniye (2 saniye).
    });
}

/**
 * 4. ADIM: Fonksiyonu çağırıyoruz.
 * DİKKAT: 'val3' şu an sonucun kendisi değil, beklemede olan bir "Söz" objesidir.
 */
let val3 = funcOne3("2");

/**
 * 5. ADIM: Takipçileri (Listener) ayarlıyoruz.
 * .then() -> resolve çalışırsa (yani 2 saniye sonra) devreye girer.
 * .catch() -> reject çalışırsa (hata olursa) devreye girer.
 */
val3.then((result) => {
    console.log(result); // 2 saniye sonra ekrana "2" yazar.
}).catch((err) => {
    console.log(err);    // Hata olursa burası çalışır.
});

// 6. ADIM: JavaScript "2 saniye beklemeyi" sevmediği için hemen bu satıra atlar.
// Bu yüzden terminalde 3, 2'den daha önce görünür.
console.log("3");