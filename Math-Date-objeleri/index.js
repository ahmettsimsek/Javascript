/* MATH objem ile;
------------------------------------------
Math ile sayıyı yuvarlama yaparız.
.Math.floor = sayıyı en küçük tam sayıya yuvarlar
.Math.ceil = sayıyı en büyük tam sayıya yuvarlar
.Math.abs = negatif sayıyı pozitif sayıya cevirir
.Math.random() * 9 = 0-9 arası küsüratlı sayı üretir
 */

let number = 10.9999998

console.log("floor kullanımı =", Math.floor(number))
console.log("ceil kullanımı =", Math.ceil(number))

let number2 = -10.9999998
console.log("abs kullanımı =", Math.abs(number))
console.log("abs + floor/ceil kullanımı =", Math.floor(Math.abs(number)))


console.log("rastgele tam sayı üretimi =", Math.floor(Math.random() * 9 ))
console.log("rastgele tam sayı üretimi =", Math.floor(Math.random() * 9 + 1 ))

// Math.pow(2,3) = 2 nin 3. kuvvetini al(üssü işlem)
// Math.sqrt(x) = x'in karekök işlemini yapar

console.log("üssü işlemi =", Math.pow(2,3))
console.log("karekök işlemi =", Math.sqrt(9))

// ****************************************************************************

/* Date objem ile, 

new Date() = bana güncel tarihi verir. bununla birlikte yılı saati ayı gibi paremetreleri alabiliriz. 
*/

console.log(new Date())
console.log(new Date(2025,10,19))
console.log(new Date(2025,10,19).getMonth())