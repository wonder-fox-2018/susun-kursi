// bila ada 10 orang, ['a','b','c','d','e','f','g','h','i','j'].
// orang-orang tsb akan diatur tempat duduk nya berdasarkan urutannya secara vertikal,
// dan jumlah maksimal kursi per baris vertikal adalah 3.
// tampilkan siapa saja yg berada di baris 1, 2, dan 3 nya.

// hasil yg benar :
// Baris 0 :  [ 'a', 'd', 'g', 'j' ]
// Baris 1 :  [ 'b', 'e', 'h' ]
// Baris 2 :  [ 'c', 'f', 'i' ]

'use strict'

function generateSeats(row) {
	let seats = []
	for(let i=0; i<row; i++) { // hapus a dari rowa
		seats.push([]) // tambah s ke seat
	}
	return seats
}

function managePerson(arr, rowSeats) {
	let seats = generateSeats(rowSeats) // tambah s ke generateSeat
	let row = 0

	for(let i=0; i<arr.length; i++) { //hapus -1 dari arr.length -1
		seats[row].push(arr[i])  //tambah s ke seat
		if(row < rowSeats -1) { // ganti row <= 2 jadi row < rowSeats -1
			row++
		} else {
			row = 0 //hapus = dari ==
		}
	}
	printSeats(seats)
}

function printSeats(seats) {
	for(let i=0; i<seats.length; i++) { // ganti 1 menjadi 0 di i=1
		console.log(`Baris ${i} : `, seats[i])
	}
}

managePerson(['a','b','c','d','e','f','g','h','i','j'], 3)
