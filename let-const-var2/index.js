// Yorum satırı için (//) veya (/* */) ile tekli veya çoklu satıırı yapabiliriz.

// console.log ile çıktılarımızı terminal ekranında görebiliriz. terminalde node index.js ile çıktı alabiliriz.

// const, let, var tanımlama-atama yapmak için kullanılır.

/* 
1- const ile tanımlanan değişken sonra değiştirilemez, hata verir. 
---------------------------------
const isim = "ali"
isim = "aaaa aaaa"
console.log(isim)
*/

// 2- let veya var değiştirmeye izin verir 
let ad = "ali"
ad = "aaaa aaaa"
console.log(ad)

var is = "ali"
is = "aaaa aaaa"
console.log(is)

// 3- tırnak içi tanımlama metinsel algılar string, sayılar tırnaksız yazılır. 
let adınız = "ahmet" // string atama
const age = 26;// number atama
const result = false // boolean atama
console.log(adınız, age, result)

// 4- tipi öğrenemk için "TYPEOF" kullanılır.

console.log(typeof age, typeof result)

// 5- Matematiksel işlem yapmak için
console.log(4+4)
console.log(4*4)
console.log((4+4)*5)

// 6- iki farklı number atamayı kullanmak için

const number1 = 14
console.log("toplam sonucu =",age + number1, )

// 7- iki farklı number ve string atamayı kullanmak için. birleştirme işlemi yapar yan yana aslında. sonuç da string olur. 

const a = "10"
const number2 = 24
console.log(a+number2)

// 8- number ve string toplamı number olarak çıksın istersek Number() parametresini kullanırız.

const b = "10"
const number3 = 24
console.log(Number(b)+number3)