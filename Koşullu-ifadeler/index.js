// 1- eşitse ? bu olsun : değilse bu olsun mantığı (a == b ? eşittir yolu : eşit değildir yolu)

const age = 26
const name = age == 26 ? "Ahmet Şimşek" : "deneme deneme"

console.log(name) //Ahmet Şimşek verir

// == de === de eşit mi bakar ancak 3 eşittir tipleri(number,string,float) aynı mı ona da bakar.

const age2 = 26
const name2 = age2 > 26 ? "Ahmet Şimşek" : "deneme deneme" // deneme deneme verir

console.log(name2)



// 2- if-else bloğu

const age3 = 26
if(age3== 26){
    console.log("yaş 26 ya eşitmiş")
}
else{
     console.log("yaş 26 ya eşit değilmiş")
}

// 3- switch-key bloğu daha küçük yapılar için kullanılır.

switch (key) {
    case 25:
        console.log("yaş 25 eşitmiş")
        break;
    case 26:
        console.log("yaş 26 eşitmiş")
        break;
    case 27:
        console.log("yaş 27 eşitmiş")
        break;
    default: //başlangıç durumu
        break;
}