// alert('heyho')


// var usia = 30 (nilainya bisa berubah)
// const x = 1 (nilai nya gak bisa diubah ubah)
// let y = 2 (nilainya bisa berubah)

// akan terjadi error jika :
// const usia = 30
// usia = 35
// console.log('heyho usia kamu adalah' + usia)

// interpreted (akan mengeksekusi code dari atas ke bawah)
// let usia = 30
// usia = 35
// console.log('heyho usia kamu adalah' + usia)
// hasil yang muncul adalah "heyho usia kamu adalah 35"

// let usia = 30
// usia = 35
// console.log('heyho usia kamu adalah' + usia)
// alert('usia kamu adalah' + usia)

// let usia = prompt('berapa usia kamu?')
// alert('usia anda adalah ' + usia)

// let nama = 'ramdlan faqih' // string
// let usia = 18 //integer number
// let tinggiBadan = 165.5 // double atau float
// let beratBadan
// let pacar = 2

// beratBadan = 45

// if(pacar == null){
//     pacar = 'belum punya'
// } else {
//     pacar = 'udah punya'
// }

// let saldoAwal = 50000
// let saldoTambahan = 80000
// const hutang = 30000
// const saldoAkhir = saldoAwal + saldoTambahan - hutang

// // switch(pacar) {
// //     case 1:
// //         pacar = 'punya 1 aja'
// //         break
// //     case 2:
// //         pacar = 'saya punya pacar 2, aku cukup playboy'
// //         break
// //     default:
// //         pacar = 'belum punya pacar'
// //         break


// alert(
//     `nama saya ${nama} usia saya itu ${usia} tinggi badan saya ${tinggiBadan} berat badan saya ${beratBadan} dan pacar saya ${pacar}`
// )

// alert(
//     `saldo awal saya sebesar Rp.${saldoAwal} dan saldo tambahan yang akan saya miliki sebesar Rp.${saldoTambahan} jadi saldo yang akan saya miliki sebanyak Rp.${saldoAkhir}`
// )


/* Array **/

// let namaGuru = ['jodi' , 'bunga', 'rahman']
// namaGuru.push('dea, fikri')
// namaGuru.shift()
// namaGuru.pop()
// alert(namaGuru)

// let namaGuru = []

// namaGuru[0] = 'dea'
// namaGuru[1] = 'fikri'

// alert(namaGuru)

/* for loop */

//3 statement

// const namaGuru = ['faqih', 'gugun', 'wildan', 'ilar']
// for (let i = 0; i < namaGuru.length; i++) {
//     console.log(namaGuru[i])
// }

// let i = 0
// while(i < 10){
//     i++
//     console.log('ramdlan faqih')
// }

do {
    i++
    console.log('ramdlan faqih')
} while (i < 10)