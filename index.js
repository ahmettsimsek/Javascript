// scope = kapsam

//var -> function scope -> global scope
// let -> block scope
// const -> block scope ----yani  {} demek

// hepsi fonksiyon dışı yazımda global oluyor ancak fonksiyon içine gelince biri function scope, diğer ikisi global scope olur. 

//en mantıklısı const, sabit değiştirilemez. yanlışlıkla değişiklik onune geçilebilir.

// var da atama yapabilirsin tanımlama öncesi ancak let ve const olmaz hata verir.

// 10 çıktısı gelir
//--------------------------
//x = 10
//console.log(x)
//var x

// hata gelir
//---------------------------
//x=10
//console.log(x)
//let x

// hata gelir
//---------------------------
//x=10
//console.log(x)
//const x


// let -> mutable -> değişebilir, yeni değer ile  başta değer atamak zorunda değilsin,
// const -> immutable -> değişmez başta değer atamalısıjn ve değer değiştirilemez.

//Çalışır
//-------------------
//let x
//x = '10'
//console.log(x)

//hata verir
//---------------
//const x
//x = '10'
//console.log(x)

//hata verir
//---------------
//const x='10'
// x = '20'
//console.log(x)

//Çalışır
//---------------
//const x='10'
//console.log(x)

// const,  içerisi array veya obje varsa değiştirilebilir.
//const user = {
    name:'tayfun'
//}
//user.name= 'mehmet'
//console.log(user)

// const,  içerisi array veya obje hiç değişmesin istersem. object.freeze()

//const user = {
    name:'tayfun'
//}
//user.name= 'mehmet'
//Object.freeze(user)
//console.log(user)



// const,  içerisi array veya obje değişsin ama yeni değer atanmasın istersem object.seal()

// yaş eklenmedi ama isim değişti
//-----------------------------------------
//const user = {
    name:'tayfun'
//}
//Object.seal(user)
//user.name= 'mehmet'
//user.age='16'
//console.log(user)


// shift en başı siler, push en sonu ekler ancak atama yapılmaz !

//const names = ['ahmet','mehmet','ali']
//console.log(names)
//names.shift()
//console.log(names)
//names.push('tayfn')
//console.log(names)


//geçici olarak ihtiyacımız olan şeylerde let kullanabiliriz, genelde de let ve const kullanırız. var çok kullanılmaz, genelde let const işimizi cözemezse kullanırız. 

//for(let i=1; i <= 5; i++){
//    console.log(i)
//}
//console.log(i)

// Çıktı var global olduğu için 10 olur 
//-------------------------------------------
//var x = 5
//if(true){
//    var x =10
//}
//console.log(x)


// Çıktı let  olduğu için global olanı alır block çıkmaz olur 
//-------------------------------------------
//var x = 5
//if(true){
//    var x =10
//}
//console.log(x)



// butın kısmı, tıklayınca verir
//----------------------------------------------
//var x = 5
//document.querySelector('button').addEventListener('click', ()=> {
//    console.log(x)
//})

//IIFE , anında çalışan fonksiyon birimi, dışarıdan x'E ulaşılmaz var bile olsa 
(function() {
    var x = 5
    document.querySelector('button').addEventListener('click', ()=> {
    console.log(x)
    })
}) ()