// new map adlı bir metod - fonksiyonumuz vardır 

/* 
 bir değişken tanımlarız b diye ve new map içerisinde bir değer koyuyoruz 
1- yeni değer generate etmek istersek set komutu ile
2- boyutuna bakmak istersek size komutu ile
3- silmek istersel delete komutu ile
 */



// 1. Oluşturma: İçinde "a": 5 olan bir Map yaratıyorsun.
const b = new Map([ ["a", 5] ]); 

// 2. Ekleme: 'b' anahtarına 6 değerini atıyorsun.
b.set('b', 6); 

// 3. Boyut: Map'in içinde kaç eleman var? (Şu an "a" ve "b" var, sonuç: 2)
console.log(b.size); 

// 4. Silme: "a" anahtarını siler. 
// delete() metodu silme başarılıysa 'true' döndürür. Ekranda 'true' görürsün.
console.log(b.delete("a")); 

// 5. Sonuç: İçinde sadece {'b' => 6} kalan Map'i yazdırır.
console.log(b);



/*
Map'in Amacı Nedir? Neden Obje {} Kullanmıyoruz?
"Zaten objelerle de person.name = 'Ahmet' yapabiliyorum, neden Map kullanayım?" diyebilirsin. İşte fark yaratan özellikleri:

Her Şey Anahtar Olabilir: Objelerde anahtarlar her zaman String veya Symbol olmak zorundadır. Map'te ise bir fonksiyonu, bir objeyi hatta başka bir diziyi bile anahtar olarak kullanabilirsin.

Sıralama Garantisi: Map, eklediğin elemanları ekleme sırasına göre tutar. Objelerde bu her zaman garanti değildir.

Hızlı Boyut Ölçümü: Map'te kaç eleman olduğunu b.size ile anında alırsın. Objede ise Object.keys(obj).length gibi uzun yollar kullanman gerekir.

Performans: Çok sık veri ekleyip siliyorsan (senin kodundaki set ve delete işlemleri gibi), Map objelere göre daha hızlı çalışacak şekilde optimize edilmiştir.
*/