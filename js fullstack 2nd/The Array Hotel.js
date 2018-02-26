/* The Array Hotel
In this challenge, we'll use an array to manage the occupancy of a hotel called The Array Hotel.

Each room in the hotel will be represented with a "vacant" or "occupied" string in the array. The index of the string in the array is the room number. For example, for a hotel with an occupancy array of ["occupied", "vacant", "occupied", "vacant"], we can determine that Rooms 0 and 2 are occupied and Rooms 1 and 3 are free.

Your job is to write a function called findVacantRooms to help the owner of the hotel find which rooms are vacant. This function should return an array of the room numbers that are vacant.
*/

function findVacantRooms(arr) {
    var result = []
    for (idx = 0; idx < arr.length; idx++) {
        if (arr[idx] === "vacant") {
            result.push(idx)
        }
    }
    return result
}

//EXAMPLE TEST

var rooms = ["vacant", "occupied", "occupied", "vacant", "vacant"];
console.log(findVacantRooms(rooms));
//OUTPUT: [0,3,4]