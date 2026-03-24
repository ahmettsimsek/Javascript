/* 
setTimeout, bir zamanlayıcıdır. Bir call back fonksiyonudur. girilen süre sonra çalışır. yazılışı,

        setTimeout(() => {
            
        }, timeout);

*/

setTimeout(() => {
    console.log("ahmetttt")
}, 3000); // saniye girilir, 3 saniye sonra 1 kez çalışır mesela



/* 
setInterval, ise girilen süre aralığıyla surekli çalışır. yazılışı,

setInterval(() => {
    
}, interval);
*/


setInterval(() => {
    console.log("ayşeee")
}, 1000); // 1 sn de bir çalışır


// Örneğin, saniye başı çalışan bir sistem
let count = 60

setInterval(() => {
    count--
    console.log(count)
}, 1000);