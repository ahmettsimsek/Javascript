/*const text = document.getElementById('text')
console.log(text, 'xfgdsfgdg')

text.innerText = "yeni mesaj " // HTML sayfadakı textimizi değiştirir
*/

/*
const btn = document.getElementById('btn')
btn.addEventListener('click', () => { // click eklediğim için listener zorunlu eklemek
    text.innerText = "yeni mesaj " // butona tıklama olunca texti o zaman değiştir deriz
})
*/

/*
const btn = document.getElementById('btn')
let count = 0
btn.addEventListener('click', () => { // click eklediğim için listener zorunlu eklemek
    text.innerText = count + 1// butona tıklama olunca texti o zaman değiştir deriz
    return count
})
*/

/*
const btn = document.getElementById('btn')
btn.addEventListener('click', () => { // click eklediğim için listener zorunlu eklemek
    prompt('deneme promptu')
})
*/

const funcOne = () => {
    prompt('deneme mesajıdır')
}   

// onumuzde 2 seçenek var ya addeventListener ile ya da fonksiyonu HTML sayfamızda onClick vererek yapabiliriz. sadece onclick değil onchange, onmouse vb durumlarımız da var.
