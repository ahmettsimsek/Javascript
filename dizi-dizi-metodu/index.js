//Array, veri toplamak istiyorum ve burada toplayabailiriz.

const firstArr = ["1","2","3","4"]
console.log(firstArr)

// 1- veri eklemek için .push() methosu kullanılır. En sona ekler
firstArr.push("5")
console.log(firstArr)


// 2- veri silmek için .pop() kullanılır. En son elemanı siler.
firstArr.pop() 
console.log(firstArr)


// 3- en başına veri eklemek istersek .unshift() metodu kullanılır.
firstArr.unshift("0") 
console.log(firstArr)


// 4- array birleştirmek için .concat() methodu kullanılır.
const firstArr2 = ["1","2","3","4"]
console.log(firstArr2.concat(["5","6","7"]))


// 5- filtreleme işlemi için .filter() kullanılır.
console.log(firstArr2.filter(fs => fs =="4")) // fs dediğim değerin 4 'e eşit olanı filtrele
console.log(firstArr2.filter(fs => fs !=="4")) // fs dediğim değerin 4 den farklı olanı filtrele


// 6-  farklı olan elemanı bulmak için .find() kullanılır.
console.log(firstArr2.find(fs => fs !=="4")) // fs dediğim değerin 4 den farklı olanı-olanları bul


// 7- hepsi eşit mi için .every() kullanılır. true-false döndürür.
console.log(firstArr2.every(fs => fs =="4")) // fs dediğim değerim yani tüm elemanlarım 4'e eşitse true, yoksa false


// 8- aralarından en azından 1 tanesi eşit mi için .some() kullanılır. true-false döndürür.
console.log(firstArr2.some(fs => fs =="4")) // fs dediğim değerim yani tüm elemanlarım 4'e eşitse true, yoksa false


// 9- arrayımızın içerisini değiştirmek için .map() fonksiyonumuz kullanılır. 2 paremetre alır.
const firstArr3 = ["1","2","3","4"]
console.log(firstArr3.map(fs => fs*3)) // tüm elemanları 3 ile çarptım
console.log(firstArr3.map(fs => Number(fs))) // tüm elemanları string -> number yaptım


//10- sıralama için .sort() methodu kullanılır.
const firstArr4 = [1,2,3,4]
console.log(firstArr4.sort((a,b) => a-b)) // küçükten büyüğe, çıktı [ 1, 2, 3, 4 ]
console.log(firstArr4.sort((a,b) => b-a)) //  büyükten küçüğe, çıktı [ 4, 3, 2, 1 ]

// 11- Obje tanımlayacak olursak (aray [] ile obje ise {} ile tanımlanır.)
const obj ={
    isim: "ahmet",
    yas:24
}

console.log(obj) // çıktı { isim: 'ahmet', yas: 24 } olur
console.log(obj.isim) // direk isim çıktısı alırız, ahmet


//12- array oluştrarak içerisine objeler oluşturabiliriz. öıktı 1 tane array içi objeler.
const arr = [
    {
        name: "ahmet",
        age: 15
    },
    {
        name: "mehmet",
        age: 17
    }
]

console.log(arr) // çıktı, [ { name: 'ahmet', age: 15 }, { name: 'mehmet', age: 17 } ]  olur.
console.log(arr.length) // eleman sayısını verir