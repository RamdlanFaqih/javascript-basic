// TUGAS

/*
1. prompt untuk mengetahui saldo akhir dari apa yang di inputkan oleh user
2. menentukan hari dari tanggal yang ada saat ini di pc kalian
**/


//* 1. Prompt untuk mengetahui saldo akhir dari apa yang di inputkan oleh user */
let saldoAwal = prompt (`berapa saldo awal kamu?`)
let saldoTambahan = prompt ('berapa saldo tambahan kamu?')

saldoAwal = Number(saldoAwal);
saldoTambahan = Number(saldoTambahan)
const saldoAkhir = saldoAwal + saldoTambahan

alert(
    `saldo awal saya sebesar ${saldoAwal} & saldo tambahan saya sebesar ${saldoTambahan} jadi total saldo akhir yang saya miliki adalah ${saldoAkhir} `)

//**2. Menentukan hari dari tanggal yang ada saat ini */
// let hari = new Date().getDay()
// namaHari = ['minggu', 'senin', 'selasa', 'rabu,', 'kamis', 'jumat', 'sabtu']

// hari = namaHari[hari]

// console.log(`hari ini adalah hari ${hari}`)