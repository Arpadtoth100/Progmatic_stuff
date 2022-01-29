window.addEventListener('load', function () {
    initLoad();
})

function initLoad() {
    const loginForm = document.querySelector('#loginForm');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        let inputs = [...document.querySelectorAll("#loginForm input")];
        let isValid = (!inputs?.find(input => !input.value) ?? false);
        if (isValid) {
            displayUserData();
            displaySeats()
        }
    }
    )
}

function displayUserData() {
    console.log("meghivtuk a userdata kijelzest")
}

function displaySeats() {
    console.log("meghivtuk a szek kijelzest")
}