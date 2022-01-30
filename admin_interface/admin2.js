//          NAVBAR FUNCTIONALITY + DISPLAY TRIGGER

const nameInput = document.querySelector('#nameInput');
const userInput = document.querySelector('#userInput');
const emailInput = document.querySelector('#emailInput');
const picInput = document.querySelector('#picInput');
const saveInputBtn = document.querySelector('#saveInput');

let body = document.body;
let container = document.querySelector("#container");
let dataField = document.querySelector("#datafield");
let navButtons = document.querySelectorAll('#navbar a');

let active = null;
let picCounter = 0;

let statsTab = document.querySelector('#stats');
let userDataTab = document.querySelector('#userData');
let galleryTab = document.querySelector('#gallery');
let neo = document.querySelector('#neo');
let auxId = null;
let auxCounter = myUserList.getList().length;

const dataTable = document.querySelector('#dataShow');
const tBody = document.querySelector("#tBody")

const selector = document.querySelector("#usersinselect");
const picSaver = document.querySelector("#savepic");
const picCards = galleryTab.querySelectorAll('img');
renderTable(myUserList.getList())

let tRows = tBody.querySelectorAll('tr');
let delBtns = document.querySelectorAll('.deleteBtn');
let modBtns = document.querySelectorAll('.modifyBtn');
let selectOptions;
let logOut = document.querySelector('#adminLogOut');
logOut.addEventListener('click', function () {
    location.href = "index.html";
})

function clearUp(target, check1, check2, check3) {
    target.classList.remove("noShow")
    target.classList.add("show")
    check1.classList.remove('show')
    check1.classList.add('noShow')
    check2.classList.remove('show')
    check2.classList.add('noShow')
    check3.classList.remove('show')
    check3.classList.add('noShow')
};

for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener('click', function (event) {
        let trgt = event.target;
        if (active) {
            active.classList.remove('active');
        }
        active = event.target;
        trgt.classList.add('active');
        switch (trgt.id) {
            case 'statisticsTab':
                clearUp(statsTab, userDataTab, galleryTab, neo);

                for (let j = 0; j < myUserList.getList().length; j++) {
                    if (myUserList.userList[j].imageUrl.length > 2) {
                        picCounter++;
                    }
                }

                userNrPrint.innerText = `Number of registered users: ${myUserList.getList().length}`;
                usersWithPix.innerText = `Users with profile pictures: ${picCounter}`;
                picCounter = 0;
                break;
            case 'usersTab':
                clearUp(userDataTab, statsTab, galleryTab, neo);
                reRender()
                break;
            case 'galleryTab':
                clearUp(galleryTab, statsTab, userDataTab, neo);
                renderSelect(myUserList.getList())
                break;
        }
    })
}

let userNrPrint = document.querySelector('#usernr');
let usersWithPix = document.querySelector('#picdusers');

function renderTable(database) {
    for (let i = 0; i < database.length; i++) {
        database[i].setImage();
        tBody.innerHTML += `
        <tr>
            <td> ${database[i].id}</td>
            <td> ${database[i].fullName}</td>
            <td> ${database[i].userName}</td>
            <td> ${database[i].email}</td>
            <td> ${database[i].isImage}</td>
            <td> ${database[i].imageUrl}</td>
            <td> <button class='modifyBtn'>Modify</button> </td>
            <td> <button class='deleteBtn'>Delete</button> </td>
        </tr>    
        `
    }
}

saveInputBtn.addEventListener("click", function () {
    if (auxId === null) {
        newTrData(nameInput.value, userInput.value, emailInput.value, picInput.value)
        myUserList.addUser(nameInput.value, userInput.value, emailInput.value, picInput.value);
        myUserList.getList()[auxCounter].setImage()
        nameInput.value = "";
        userInput.value = "";
        emailInput.value = "";
        picInput.value = "";
        reRender()
    } else {
        myUserList.getList()[auxId].fullName = nameInput.value;
        myUserList.getList()[auxId].userName = userInput.value;
        myUserList.getList()[auxId].email = emailInput.value;
        myUserList.getList()[auxId].imageUrl = picInput.value;
        myUserList.getList()[auxId].setImage();
        auxId = null;
        nameInput.value = "";
        userInput.value = "";
        emailInput.value = "";
        picInput.value = "";

        reRender()
    }
})

let isPicV;
let newTrData = function (nIV, uIV, eIV, pIV) {
    const newNameV = nIV;
    const newUserV = uIV;
    const newEmilV = eIV;
    const newPicV = pIV;
    if (newPicV !== "") {
        isPicV = true;
    } else {
        isPicV = false;
    }
    tBody.innerHTML += `
    <tr>
        <td>${myUserList.getList().length}</td>
        <td>${newNameV}</td>
        <td>${newUserV}</td>
        <td>${newEmilV}</td>
        <td>${isPicV}</td>
        <td>${newPicV}</td>
        <td> <button class='modifyBtn'>Modify</button> </td>
        <td> <button class='deleteBtn'>Delete</button> </td>
    </tr>    
    `
}

function addListeners() {
    for (let i = 0; i < myUserList.getList().length; i++) {
        delBtns[i].addEventListener("click", () => {
            myUserList.deleteUser(i)
            reRender();
        })
    }
    for (let j = 0; j < myUserList.getList().length; j++) {
        modBtns[j].addEventListener("click", () => {
            nameInput.value = myUserList.getList()[j].fullName;
            userInput.value = myUserList.getList()[j].userName;
            emailInput.value = myUserList.getList()[j].email;
            picInput.value = myUserList.getList()[j].imageUrl;
            auxCounter = myUserList.getList().length;
            auxId = [j]
        })
    }
}

function reRender() {
    tBody.innerHTML = ""

    renderTable(myUserList.getList())
    delBtns = document.querySelectorAll('.deleteBtn');
    modBtns = document.querySelectorAll('.modifyBtn');
    auxCounter = myUserList.getList().length;
    addListeners()
}
addListeners()

let selectedUserIndex;
let selectedCard;

selectOptions = document.querySelector('select');

function renderSelect(database) {
    selector.innerHTML = "<option>Select a user</option>"
    for (let i = 0; i < database.length; i++) {
        selector.innerHTML += `
            <option value=${database[i].fullName}>${database[i].fullName}</option>
        `
    }
}

selectOptions.addEventListener('change', function (event) {
    selectedUserIndex = event.target.selectedIndex - 1
})

for (let k = 0; k < picCards.length; k++) {
    picCards[k].addEventListener('click', function () {
        selectedCard = picCards[k].src
        console.log(selectedUserIndex, selectedCard)
    })
}

picSaver.addEventListener('click', function () {
    myUserList.getList()[selectedUserIndex].setImageUrl(selectedCard);
    console.log(myUserList.getList());
})
