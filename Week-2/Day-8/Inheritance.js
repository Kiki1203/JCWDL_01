// INHERITANCE
// Pewarisan property

// Ex.
// Product Buah
// let productBuah1 = {
//     nama: 'Apel',
//     harga: 10000,
//     stock: 10,
//     satuan: 'Kg',
//     jenis: 'Lokal',
// }

// // Product Pakaian
// let productPakaian = {
//     nama: 'Kaos Polos',
//     harga: 100000,
//     stock: 5,
//     satuan: 'Pcs',
//     warna: 'Merah',
//     bahan: 'Katun',
//     size: 'S'
// }

// // Product Electronic
// let productElectronic = {
//     nama: 'TV Samsung',
//     harga: 3000000,
//     stock: 10,
//     satuan: 'Unit',
//     ukuran: 45,
//     warna: 'Hitam'
// }

// Class Product
class Product {
  // Parent
  constructor(nama, harga, stock, satuan) {
    this.nama = nama;
    this.harga = harga;
    this.stock = stock;
    this.satuan = satuan;
  }
}

// Class Buah
class ProductBuah extends Product {
  // Child
  constructor(nama, harga, stock, satuan, jenis) {
    super(nama, harga, stock, satuan);
    this.jenis = jenis;
  }
}
let buah1 = new ProductBuah('Semangka', 10000, 10, 'Kg', 'Buah Lokal');
console.log(buah1);

// Class Pakaian
class ProductPakaian extends Product {
  constructor(nama, harga, stock, satuan, warna, bahan, size) {
    super(nama, harga, stock, satuan);
    this.warna = warna;
    this.bahan = bahan;
    this.size = size;
  }
}

// Class Electronic
class productElectronic extends Product {
  constructor(nama, harga, stock, satuan, ukuran, warna) {
    super(nama, harga, stock, satuan);
    this.ukuran = ukuran;
    this.warna = warna;
  }
}
