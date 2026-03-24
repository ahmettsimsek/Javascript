/* backend'lerin yazdıklarını veritabanından sayfama çekmek istiyorum. çekme aracı olarak fetch ya da axios kullanmak istiyorum ancak mevcut değil. 
1- Bunun için terminale "npm init -y" ile package.json dosyası oluşturacaktır. Bu benim axios ve benzer kütüphanelerimi kurmak için ve onları buraya kaydetmeye yarayan bir yapıdır. 
2- terminalde "npm i axios" dersek bizim için axious'un kurulup .json dosyamıza geldiğini görürüz. 
3- her işlemi yaptıktan sonra "node index.js" "node index.js"  diyte sürekli baştan başlatıyorum. Bunu engellemek için terminalde "npm i nodemon" ile paketi kurarız,package.json dosyamıza gelir paket.
4- package.json dosyamıza gelerek, script içerisindeki test: gördüğümüz kısma gelip  "scripts": {
    "start": "nodemon index.js" yazıyoruz. nodemon kullanıcam index.js çalışsın istiyorum. 
5- terminalde "npm start" dersek noemon çalışıcaktır yani her işlemi yaptıktan sonra terminalde "node index.js " yazıp çalıştırmamıza gerek olmayacaktır. oto çıktı olur.
6- .js dosyanla - package dosyan aynı path üzerinde olmalıdır. 
*/

const { default: axios } = require("axios");

axios