// FUNCTION INSIDE OBJECT
// This keyword ---> Memungkinkan suatu property mengakses propery lain didalam object yang sama

// Ex. Menyimpan data user kedalam bentuk object dengan data sebagai berikut :
//          - Nama
//          - Username
//          -  Tahun Lahir

//          - Umur

let user = {
  nama: 'Defryan',
  username: 'ryandefryan',
  tahunLahir: 1990,
  umur: function () {
    let year = new Date().getFullYear();
    let umur = year - this.tahunLahir;
    return umur;
  },
};

console.log(user.umur());
