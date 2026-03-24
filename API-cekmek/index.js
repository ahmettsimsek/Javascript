// 1- veri çekmek için öncelikle axios import ediyoruz


//2- bir fonksiyon yazıcaz, amacı veri çekmesi olacaktır. Dışlarıdan çağırarak ger.ekten çalışmasına imkan tanıyo olacağım.

//3- fonksiyon içinde boş bile olsa verileri saklayacak bir array olsun başlangıçta.

// 4- js hemen olmayınca geçer ve undifened çıktısı verir. Bunun önüne geçmek için asekron-await kullanırız. Bunu kullandığımız işlem tamamlayınmcayına kadar bekler diğer adıma geçmez, bitine atama yapar ve elde ettiğin verileri istediğin gibi kullanırsın. Bunu sağlayan yapı axios, axiosu kulanmak için de pacgkage.json içerisinde kurulum sağladım.



// 1. SATIR: Axios kütüphanesini projeye dahil ediyoruz. 
// Bu kütüphane, internetteki bir adrese (URL) gidip veri getirmemizi sağlar.
const { default: axios } = require("axios");

/* 3. SATIR: 'async' anahtar kelimesi bu fonksiyonun içinde 'beklenmesi gereken' 
asenkron işlemler (Promise) olacağını belirtir.*/ 
const getAll = async() => {
    
    // 4. SATIR: Verileri içine koymak için boş bir dizi (array) oluşturuyoruz.
    let arr = []

    // 5. SATIR: 'await' burada hayati önem taşır! 
    // JavaScript'e şunu der: "Dur! İnternetten veri gelene kadar (belki 1-2 saniye) bekle. 
    // Veri gelmeden alt satıra geçme." 
    // axios.get bir Promise döndürür, await ise o Promise 'resolve' olana kadar bekler.
    const data = await axios.get('https://restcountries.com/v3.1/all')

    // 6. SATIR: Gelen devasa veri paketini (data) daha önce oluşturduğumuz diziye ekliyoruz.
    // Not: Genelde axios ile veri çekerken 'data.data' şeklinde asıl içeriğe ulaşılır.
    arr.push(data)

    // 7. SATIR: İçine veriyi koyduğumuz diziyi fonksiyonun dışına gönderiyoruz.
    // ÖNEMLİ: async fonksiyonlar her zaman bir Promise döndürür.
    return arr
}

// 10. SATIR: Fonksiyonu çalıştırıyoruz.
getAll();