// OBJECT 
// Sama seperti array, berfungsi untuk menyimpan data lebih dari 1
// Jika di array, data diberi label index penomoran. Object di beri label menggunakan pasangan "key" & "value"

// ANALOGI  ---> Semua benda yang kita lihat , itu merupakan object
//          ---> Object itu memiliki properti

// Ex. Object : Laptop 
//      Properties : 
//              -Merk : Lenovo Ideapad
//              -Warna : Hitam
//              -Ukuran Layar : 15.6
//              -...

// CRUD (Create, Read, Update, Delete)

// Create
// syntax Literal
let Laptop = {
    merk: 'Lenovo Ideapad'
    Warna: 'Hitam'
    Ukuran: 15.6
}

let Laptop2 = {
    merk: 'Asus Tuf'
    warna: 'Putih'
    ukuran: 15
}

// Syntax New
let laptop3 = new Object()
laptop3.merk = 'HP Pavilion'
laptop3.warna = 'Hitam'
laptop3.ukuran = 15.6

// READ 
console.log(laptop3);
console.log(laptop3.merk);
console.log(laptop3.warna);
console.log(laptop.ukuran);

let laptop4 = {
    merk: 'ASUS TUF',
    warna: {
        warna1: 'Hitam',
        warna2: 'Putih',
        warna3: 'Silver'
    },
    ukuran: 15.6
}
// console.log(laptop4.warna3) ---> Undefined
console.log(laptop4.warna.warna3)
// console.log(laptop4.warna[2]) ---> Undefined

let laptop5 = {
    merk: 'Lenovo Ideapad',
    warna: 'Putih',
    ukuran: [15.6, 15, 14.5, 14, 13.5]
}
console.log(laptop5.ukuran[4])

let laptop4 = {
    merk: 'ASUS TUF',
    warna: {
        warna1: 'Hitam',
        warna2: 'Putih',
        warna3: 'Silver'
    },
    ukuran: 15.6
}
// console.log(laptop4.warna3) ---> Undefined
console.log(laptop4.warna.warna3)
// console.log(laptop4.warna[2]) ---> Undefined

let laptop5 = {
    merk: 'Lenovo Ideapad',
    warna: 'Putih',
    ukuran: [15.6, 15, 14.5, 14, 13.5]
}
console.log(laptop5.ukuran[4])


let laptop4 = {
    merk: 'ASUS TUF',
    warna: {
        warna1: 'Hitam',
        warna2: 'Putih',
        warna3: 'Silver'
    },
    ukuran: 15.6
}
// console.log(laptop4.warna3) ---> Undefined
console.log(laptop4.warna.warna3)
// console.log(laptop4.warna[2]) ---> Undefined

let laptop5 = {
    merk: 'Lenovo Ideapad',
    warna: 'Putih',
    ukuran: [15.6, 15, 14.5, 14, 13.5]
}
console.log(laptop5.ukuran[4])

class Siswa{
    constructor(a, b, c){ // Create Properties
        this.nama = a 
        this.umur = b 
        this.asal = c
    }
}

let siswa1 = new Siswa('Kevin', 17, 'Jawa Timur')
console.log(siswa1)
let siswa2 = new Siswa('Aisyah', 17, 'Jawa Timur')
console.log(siswa2)