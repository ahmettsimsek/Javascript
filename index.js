// Biz fonksiyon veya obje şeklinde çağarabiliriz ancak eskiden çok kullanılan ve javada hala kullanılan class yapılarımız var.  

/* obje oluşturmaya benzer. örneğin aşağıda class oluşumumuz, 
1- person isimli class oluşturduk,
2- constructor'ımız var. bu dışarıdan veri alabilir ya da almayabilir. name ve age ekledik,
3- fonksiyon da oluşturabillriz istersek altına, içeride 
4- bu fonksiyon bize isim ve yaşı return edicek
*/

/*
 Dışarıda classlardan bir tane oluşturmak istersem, atama yaparız ve atama içeriğine new + class ismi + burada da fonk çalıştırırsak en sonda console.log ile yazdırırsak, bize class içi tanımlı fonk sonucu çıkacaktır
*/


class Person{
    constructor(){
        this.name = "Ahmet",
        this.age = 24
    }

    displayFunc(){
        return this.name + "-" + this.age
    }
}

const person = new Person().displayFunc()

console.log(person) // çıktı = Ahmet-24

//--------------------------------------------------------------------------
// dışarııdan veri girişi olsun istersek, örneğin test girişi olsun istedik ,

class Person2{
    constructor(a){
        this.name = "Ahmet",
        this.age = 24
        this.text = a 
    }

    displayFunc2(){
        return this.name + "-" + this.age + "-" + this.text
    }
}

const person2 = new Person2("deneme").displayFunc2()
const person3 = new Person2("deneme1").displayFunc2()

console.log(person2, person3)


//****************************************/

/*
Class Yapısını Neden Kullanırız? (Fabrika Benzetmesi)
Bir araba fabrikası düşün. Class, arabanın tasarım planıdır (blueprint). new anahtar kelimesi ise o planı kullanarak banttan gerçek bir araba indirmektir.

Yazdığın Kod Üzerinden Önemli Detaylar:
constructor (Yapıcı Metot): Bu, new Person() dediğin anda otomatik olarak çalışan ilk fonksiyondur. Nesnenin "doğum anı" gibi düşünebilirsin. Görevi, nesnenin özelliklerini (this.name, this.age) hazırlamaktır.

this Kelimesi: Bu kelime "şu an oluşturduğum bu nesne" demektir. Sınıf içindeki değişkenlere ve fonksiyonlara ulaşmak için kullanılan bir anahtardır.

new Anahtar Kelimesi: Bu kelimeyi kullanmazsan JavaScript bir nesne oluşturmaz, sadece fonksiyonu çağırmaya çalışır ve hata verir.

*/
