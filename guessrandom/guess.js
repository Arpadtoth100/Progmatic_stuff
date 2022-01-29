// let randomSzam =
//     Math.floor(Math.random() * 10);
// window.alert(randomSzam);
// let guess = Number(window.prompt("guess the nr..."));

// if (guess === randomSzam) {
//     window.alert("Bull's eye!")
// } else if (guess + 2 === randomSzam || guess + 1 === randomSzam) {
//     guess = Number(window.prompt("a bit more, guess again"))
//     if (guess === randomSzam) {
//         window.alert("Bull's eye!")
//     } else if (guess + 2 === randomSzam || guess + 1 === randomSzam) {
//         guess = Number(window.prompt("a bit more, guess again"))
//         if (guess === randomSzam) {
//             window.alert("Bull's eye!")
//         }
//         else {
//             window.alert("Sorry, you failed!")
//         }
//     } else if (guess - 2 === randomSzam || guess - 1 === randomSzam) {
//         guess = Number(window.prompt("a bit less, guess again"))
//         if (guess === randomSzam) {
//             window.alert("Bull's eye!")
//         }
//         else {
//             window.alert("Sorry, you failed!")
//         }
//     } else {
//         guess = Number(window.prompt("Guess again..."))
//         if (guess === randomSzam) {
//             window.alert("Bull's eye!")
//         }
//         else {
//             window.alert("Sorry, you failed!")
//         }
//     }
// } else if (guess - 2 === randomSzam || guess - 1 === randomSzam) {
//     guess = Number(window.prompt("a bit less, guess again"))
//     if (guess === randomSzam) {
//         guess = Number(window.alert("Bull's eye!"))
//         if (guess === randomSzam) {
//             window.alert("Bull's eye!")
//         }
//         else {
//             window.alert("Sorry, you failed!")
//         }
//     } else if (guess + 2 === randomSzam || guess + 1 === randomSzam) {
//         guess = Number(window.prompt("a bit more, guess again"))
//         if (guess === randomSzam) {
//             window.alert("Bull's eye!")
//         }
//         else {
//             window.alert("Sorry, you failed!")
//         }
//     } else if (guess - 2 === randomSzam || guess - 1 === randomSzam) {
//         guess = Number(window.prompt("a bit less, guess again"))
//         if (guess === randomSzam) {
//             window.alert("Bull's eye!")
//         }
//         else {
//             window.alert("Sorry, you failed!")
//         }
//     } else {
//         guess = Number(window.prompt("Guess again..."))
//         if (guess === randomSzam) {
//             window.alert("Bull's eye!")
//         }
//         else {
//             window.alert("Sorry, you failed!")
//         }
//     }
// } else {
//     guess = Number(window.prompt("Guess again..."))
//     if (guess === randomSzam) {
//         window.alert("Bull's eye!")
//     } else if (guess + 2 === randomSzam || guess + 1 === randomSzam) {
//         guess = Number(window.prompt("a bit more, guess again"))
//         if (guess === randomSzam) {
//             window.alert("Bull's eye!")
//         }
//         else {
//             window.alert("Sorry, you failed!")
//         }
//     } else if (guess - 2 === randomSzam || guess - 1 === randomSzam) {
//         guess = Number(window.prompt("a bit less, guess again"))
//         if (guess === randomSzam) {
//             window.alert("Bull's eye!")
//         }
//         else {
//             window.alert("Sorry, you failed!")
//         }
//     } else {
//         guess = Number(window.prompt("Guess again..."))
//         if (guess === randomSzam) {
//             window.alert("Bull's eye!")
//         }
//         else {
//             window.alert("Sorry, you failed!")
//         }
//     }
// }


let randomSzam = Math.floor(Math.random() * 10);
window.alert(randomSzam);
let guess = Number(window.prompt("guess the nr..."));
while (guess !== randomSzam) {
    if (guess + 2 === randomSzam || guess + 1 === randomSzam) {
        guess = Number(window.prompt("a bit more, guess again"))
    } else if (guess - 2 === randomSzam || guess - 1 === randomSzam) {
        guess = Number(window.prompt("a bit less, guess again"))
    } else {
        guess = Number(window.prompt("Guess again..."))
    }
};
window.alert("Bull's eye!");