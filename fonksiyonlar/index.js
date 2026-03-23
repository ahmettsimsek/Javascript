// mesela bir tane butonumuz vardır ve butona basınca arka planda ne olması gerektiğini bizlere anlatır.

/* iki tanımlama şeklimiz var fonksiyonu
   1- değişekn tanımlarız(daha yaygın şekli)
   2-function şeklinde direk
*/

const nameFunc = () => {
    console.log("ahmetttt")
}

nameFunc()


const nameFunc2  = () => {
    age = 26
    if(age == 26){
        console.log('yas 2666666')
    }
}

nameFunc2()

// dışarıdan değer atamak için. Eğer fonksiyonun içine a yerine doğrudan num1 yazsaydın, o fonksiyon sadece num1 ile çalışırdı. Ama fonksiyonların amacı genel (tekrar kullanılabilir) olmalarıdı. ilk olarak değer atadım dışaırda, ikinci olarak fonksiyon içerisine gönderdim ve son olarak gönderdiğim değeri fonksiyon içerisinden karşılıyorum.

let num1 = 10

const nameFunc3  = (a) => { // fonk karşılar
    console.log(a)
}

nameFunc3(num1) // fonskiyonu gönderiyor



let num2 =30
let num3 = 40

const nameFunc4 = (a,b) => {
    console.log(a,b)
}

nameFunc4(num2,num3)


// tek tek a.b.c yazmaktansa ...props ile hepsini sağlarız (a, ...props) ile a = num1 kalan ...props= num2,num3,num4 sağlar. eğer (...props, a) yazarzan hata alır her zaman sona doğtru olmak zorunda. Bua spread operatör deriz.

let num4 =30
let num5 = 40
let num6 = 50

const nameFunc5 = (a, ...props) => {
    console.log(a,...props)
}

nameFunc5(num4,num5, num6)


// Her zaman console.log ile değer döndurmek zorunda değilim. Burada RETURN kavramı gelir. Örneğin toplama işleminde return ile denersek bize diyeceği toplamını döndürücem demektir.
let num7 =30;
let num8 = 40;
let num9 = 50;

const nameFunc6 = (a,b,c) => {
    return a+b+c
}

console.log(nameFunc6(num7,num8,num9))