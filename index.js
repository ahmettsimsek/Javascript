const text = document.getElementById('text')
console.log(text, 'xfgdsfgdg')

text.innerText = "yeni mesaj " // HTML sayfadakı textimizi değiştirir


const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
    text.innerText = "yeni mesaj " // butona tıklama olunca texti o zaman değiştir deriz
})

const btn2 = document.getElementById('btn2')