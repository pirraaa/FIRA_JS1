//if...else statements

let grade = 50
if (grade > 60) {
    console.log("Selamat!");
    console.log("Anda Berhasil!");
} else {
    console.log("Maaf Anda gagal");
}


//nested if statemens

let grade = 80
if (grade > 89) {
    console.log("Sangat Bagus!");
} else if (grade > 60) {
    console.log("Bagus!");
} else {
    console.log("Maaf Anda gagal");
}


// switch case statement

let grade = 90
switch (grade) {
    case 100:
        console.log("Excellent!")
        break;
    case 90:
        console.log("Bagus!")
        break;
    case 70:
        console.log("Belajar lagi!")
        break;
    default:
        console.log("Maaf, Anda Gagal");
}


//for statement

for (i = 3; i <= 7; i++) {

    console.log("Aku mengikuti MSIB di Infinite Learning ");
    console.log("Aku mengikuti MSIB di Infinite Learning");
}


//  while statement

let i = 1
while (i <= 5) {
    console.log("Hello Mentor", i);
    i++;
}


let x = 0
while (x < 10) {
    console.log(x);
    x++;
}


// do while statement

let HelloWorld = ""; {
    let i = 1;
    do {
        console.log("Hello World");
        i++;
    }
    while (i <= 5);
    return 0;
}


let x = 0;
do {
    console.log(x);
    x++;
} while (x < 10);


// function

function kali(a, b) {
    hasilKali = a * b;
    console.log("Hasil kali a*b = " + hasilKali);
}
kali(8, 60); // -> Hasil kali a*b = 6


// function return

function kurang(a, b) {
    hasilKurang = a - b;
    return hasilKurang;
}

// memanggil function
var nilai1 = 10000;
var nilai2 = 3500;
var hasilPengurangan = kurang(nilai1, nilai2);

console.log("Hasil Pengurangan a-b = " + hasilPengurangan);
