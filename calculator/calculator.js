// let a = window.prompt("elso szam: ");
// let b = window.prompt("masodik szam ");
// let c = window.prompt("muvelet: ");

// if (c == "+") {
//     window.alert(Number(a) + Number(b))
// } else if (
//     c == "-") {
//     window.alert(Number(a) - Number(b))
// } else if
//     (c == "*") {
//     window.alert(Number(a) * Number(b))
// } else if
//     (c == "/") {
//     window.alert(Number(a) / Number(b))
// } else {
//     window.alert("rossz muvelet!")
// }



let a = window.prompt("elso szam: ");
if (isNaN(a)) {
    window.alert("az elso ertek nem szam!")
}
let b = window.prompt("masodik szam ");
if (isNaN(b)) {
    window.alert("a masodik ertek nem szam!")
}
let c = window.prompt("muvelet: ");

switch (c) {
    case "+":
        window.alert(Number(a) + Number(b));
        break;
    case "-":
        window.alert(Number(a) - Number(b));
        break;
    case "*", "x":
        window.alert(Number(a) * Number(b));
        break;
    case "/":
        window.alert(Number(a) / Number(b));
        break;
    default:
        window.alert("Nem ertelmezheto muvelet")
}