// bila ada 10 orang, ['a','b','c','d','e','f','g','h','i','j'].
// orang-orang tsb akan diatur tempat duduk nya berdasarkan urutannya secara vertikal,
// dan jumlah maksimal kursi per baris vertikal adalah 3.
// tampilkan siapa saja yg berada di baris 1, 2, dan 3 nya.

// hasil yg benar :
// Baris 0 :  [ 'a', 'd', 'g', 'j' ]
// Baris 1 :  [ 'b', 'e', 'h' ]
// Baris 2 :  [ 'c', 'f', 'i' ]



var penonton = ['a','b','c','d','e','f','g','h','i','j']
var baris = 3
var result = []

for (let i = 0; i < 3; i++) {
   result.push([])
}
var row = 0
for (let i = 0; i < penonton.length; i++) {
    result[row].push(penonton[i])
    row = row + 1
    if (row >= 3) {
       row = 0 
    }
}
console.log(result);

