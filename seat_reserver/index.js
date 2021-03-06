window.addEventListener('load', function () {
    initLoad();
})

function initLoad() {
    const welcome = document.querySelector('#welcome');
    const dataField = document.querySelector('#dataField');
    const loginForm = document.querySelector('#loginForm');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        let inputs = [...document.querySelectorAll("#loginForm input")];
        let isValid = (!inputs?.find(input => !input.value) ?? false);
        if (isValid) {
            displayUserData();
            displaySeats()
            welcome.style.display = "none";
            dataField.style.display = "flex";
        }
    }
    )
}

function displayUserData() {
    const nameInput = document.querySelector("#loginForm #name");
    const emilInput = document.querySelector("#loginForm #email");
    const phoneInput = document.querySelector("#loginForm #phone");

    loginForm.innerHTML = `
        <div>
            <P class="title">Personal data</p>
            <br>
            <p>Name: ${nameInput.value} </p>
            <p>E-mail: ${emilInput.value} </p>
            <p>Phone: ${phoneInput.value}</p>
        </div>
    `
}

function displaySeats() {
    let audience = [
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    ];
    const seatsDisplay = document.querySelector('#seatLocator')
    for (let row = audience.length - 1; row >= 0; row--) {
        for (let chair = 0; chair < audience[row].length; chair++) {
            let counter = [row + 1, chair + 1];
            switch (audience[row][chair]) {
                case 0:
                    seatsDisplay.innerHTML += `
                    <div class="chairItem free" id=${counter}></div>
                    `;
                    break;
                case 1:
                    seatsDisplay.innerHTML += `
                        <div class="chairItem taken" id=${counter}></div>
                        `;
                    break;
                case 2:
                    seatsDisplay.innerHTML += `
                    <div class="chairItem selected" id=${counter}></div>
                    `;
                    break;
            };
        }
    };
    seatsDisplay.innerHTML += "------------ <strong>Screen</strong> ------------"
    let chairItems = document.querySelectorAll('.chairItem');
    for (let i = 0; i < chairItems.length; i++) {
        chairItems[i].addEventListener('click', function (event) {
            changer(event.target);
            btnEnable(reserveBtn, chairItems)
        })
    };
    let seatCounter = document.querySelector('#seatCounter');
    let reserveBtn = document.querySelector('#reserveBtn');
    reserveBtn.disabled = true;
    reserveBtn.addEventListener('click', function () {
        reserveBtn.disabled = true;
        seatCounter.innerHTML = ""
        for (elem of chairItems) {
            if (elem.className === 'chairItem selected') {
                seatCounter.innerHTML += `
                Row: ${elem.id.split(',')[0]}, Seat: ${elem.id.split(',')[1]} |
                `
                elem.className = 'chairItem taken';
            }
        };
    })
};

function changer(target) {
    switch (target.className) {
        case 'chairItem free':
            target.classList.remove("free");
            target.classList.add("selected");
            break;
        case 'chairItem selected':
            target.classList.remove("selected");
            target.classList.add("free");
            break;
        case 'chairItem taken':
            window.alert("Selected seat is not available");
            break;
    };
}

function btnEnable(target, database) {
    let anyBtn = false
    for (elem of database) {
        if (elem.className === 'chairItem selected') {
            anyBtn = true
        }
    }
    target.disabled = !anyBtn;
}