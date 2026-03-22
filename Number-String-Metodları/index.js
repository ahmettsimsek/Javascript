// 1- iki farklı number ve string atamayı kullanmak için. birleştirme işlemi yapar yan yana aslında. sonuç da string olur. 

const a = "10"
const number2 = 24
console.log(a+number2)

// 2- String bir ifade number olarak çıksın istersek Number() parametresini kullanırız.

const b = "10"
const number3 = 24
console.log(Number(b)+number3)

// 3- number bir ifade string olarak çıksın istersek .toString() parametresini kullanırız.

const c = "10"
const number4 = 24
console.log(Number(c)+number3.toString())

// 4- string bir ifadeyi(sayı değil metinsel) number olarak çıksın istersek number() paremetresi kullansak bile hata alırız. 

const d = "Ahmet"
const number5 = 24
console.log(Number(d)+number3)

// 5- ondalıklı sayılarda virgül sonrası kaç basamak görünsün istersek .toFixed() methodunu kullanırız. 

const number6 = 24.432352523452
console.log(number6.toFixed(2))

// 6- parseInt() veya parseFloat() methotları ile irregular sayılarda çıktıyı güzelleştirebiliriz. Biri çıktıyı tam sayı biri de ondalılı verir.

console.log(parseInt(314e-3))
console.log(parseFloat(314e-3))

// 7- metinsel ifadeyi birleştirmek için .concat() methodu kullanılır. 

let name = "Ahmet";
console.log(name.concat('2222222'))

// 8- string ifademizde yer değiştirme için .replace() methodu kulanılır. İlk gördüğünü değiştirir dikkat. 

let name2 = "Ahmet";
console.log(name2.replace('e', 'E')) // karşımıza çıkan ilk e'i büyük E ile değiştiridik. 

// 9- string ifademizde hepsini kapsıyacak şekilde  yer değiştirme için .replaceAll() methodu kulanılır ya da .replace(/degişen/g değiştirmek istenilen)

let name3 = "AhmetSimsek";
console.log(name3.replaceAll('e', 'E')) // karşımıza çıkan ilk e'i büyük E ile değiştiridik. 
console.log(name3.replace(/e/g, 'E')) // karşımıza çıkan ilk e'i büyük E ile değiştiridik. 

// 9- Metinsel ifademizi array hale getirmek için .split() methodu kullanılır.

let name4 = "AhmetSimsek";
console.log(name4.split(''))
console.log(name4.split('').join('')) // .join() methodu ile geri birleştirme sağlanır.
console.log(name4.split('').join(',')) // .join() methodu ile geri birleştirme sağlanır ancak aralarına virgül koyduk.

// 10- belirli aralıktaki değeri vermek için .substr(başlangıç, bitiş) metodu veya .slice(başlangıç, bitiş) kullanılır.

let name5 = "AhmetSimsek";
console.log(name5.substr(0,3))
console.log(name5.slice(0,3))

// 11- string metindeki tüm ifadeleri küçük harfe cevirmek için .toLowerCase() methodu kullanılır.

let name6 = "AhmetSimsek";
console.log(name6.toLowerCase())

// 12- string metindeki tüm ifadeleri büyük harfe cevirmek için .toUpperCase() methodu kullanılır.

let name7 = "AhmetSimsek";
console.log(name7.toUpperCase())

//13- string ifadeinin sağında ve solunda boşluk mevcutsa ve bundan kurtulmak istersem .trim() fonksiyıonu kullanılır.

let name8 = "    AhmetSimsek      ";
console.log(name8.trim())

//14- .includes() parametresi ile gerçekten string yapımın içerisinde var mı yok mu bunu kontrol eder. true-false döndürür.

let name9 = "AhmetSimsek";
console.log(name9.includes('e'))

//15- .seearch() parametresi ile gerçekten string yapımın içerisinde var mı yok mu bunu kontrol eder. yoksa -1 varsa kaçıncı indexte olduğunu döndürür.

let name10 = "AhmetSimsek";
console.log(name10.search('r')) // -1 döner
console.log(name10.search('m')) // 2 döner

//16- istenilen karakteri döndürür. index numarası ile belirtiriz belirtmez isek ilk indexi verir.

let name11 = "AhmetSimsek";
console.log(name11.charAt(2)) // m çıktısı
console.log(name11.charAt()) // a çıktısı