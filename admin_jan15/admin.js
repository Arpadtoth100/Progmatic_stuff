// class Userlist {
//     constructor() {
//         this.userList = []
//     }
//     addUser(fullName, userName, email) {
//         let nU = new User(fullName, userName, email);
//         nU.id = this.userList.length;
//         this.userList.push(nU);
//     }
//     deletUser(index) {
//         delete this.userList[index];
//     }
// }

// class User {
//     constructor(fullName, userName, email) {
//         this.id = 0;
//         this.fullName = fullName;
//         this.userName = userName;
//         this.email = email;
//         this.isImage = false;
//         this.imageUrl = null;
//     }

//     getId() {
//         return this.id;
//     }
//     getName() {
//         return this.fullName;
//     }
//     setName(string) {
//         this.fullName = string;
//     }
//     getUser() {
//         return this.userName;
//     }
//     setuser(string) {
//         this.userName = string;
//     }
//     getEmail() {
//         return this.email;
//     }
//     setEmail(string) {
//         this.email = string;
//     }
//     toggleImage() {
//         if (this.isImage === true) {
//             this.isImage = false;
//         } else {
//             this.isImage = true;
//         }
//     }
//     getImageUrl() {
//         return this.imageUrl;
//     }
//     setImageUrl(string) {
//         this.imageUrl = string;
//     }
// }

// let userList = new Userlist;
// userList.addUser("Kiss Jolan", "Joli", "ajoli@example.com");
// userList.addUser("Nagy Fero", "csotany", "f1deszbuz1@kdnp.hu");
// userList.addUser("Pelda Bela", "pelus", "example@example.com");
// userList.addUser("Kiss Joco", "Joci", "ajoci@example.com");
// userList.addUser("Kiss Fero", "csoti", "f1d*szb*z1@kd*p.hu");
// userList.addUser("Pelda Bela", "pelus", "example2@example1.com");






//          NAVBAR FUNCTIONALITY + DISPLAY TRIGGER

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
let body = document.body;
let container = document.querySelector("#container");
let dataField = document.querySelector("#datafield");
let navButtons = document.querySelectorAll('#navbar a');
let active = null;

let statsTab = document.querySelector('#stats');
let userDataTab = document.querySelector('#userData');
let galleryTab = document.querySelector('#gallery');
let neo = document.querySelector('#neo');
let loaded = false

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
                break;
            case 'usersTab':
                clearUp(userDataTab, statsTab, galleryTab, neo);
                if (!loaded) {
                    looping();
                    loaded = true
                }
                break;
            case 'galleryTab':
                clearUp(galleryTab, statsTab, userDataTab, neo);
                break;
        }
    })
}

let logOut = document.querySelector('#adminLogOut');
logOut.addEventListener('click', function () {
    location.href = "index.html";
})

//          STATISTICS TAB FUNC

let userNrPrint = document.querySelector('#usernr');
userNrPrint.innerText = `Number of registered users: ${userList.length}`;
let usersWithPix = document.querySelector('#picdusers');

let counter = 0;
for (let j = 0; j < userList.length; j++) {
    if (userList[j].isImage === true) {
        counter++;
    }
}
usersWithPix.innerText = `Users with profile pictures: ${counter}`;


//          USERS TAB FUNC

const dataTable = document.querySelector('#dataShow');
const nameInput = document.querySelector('#nameInput');
const userInput = document.querySelector('#userInput');
const emailInput = document.querySelector('#emailInput');
const saveInputButton = document.querySelector('#saveInput');
const modifyButton = document.querySelectorAll('.modifyButtons');
let deleteButtons = [];
const noUsersLeft = document.querySelector('#noUsersLeft');
console.log(deleteButtons);

saveInputButton.addEventListener('click', function () {
    let nU = new User(nameInput.value, userInput.value, emailInput.value);
    nU.id = userList.length;
    userList.push(nU);
    looping();
})

function removeElementsByClass(className) {
    const elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}
function looping() {

    if (userList.length !== 0) {
        removeElementsByClass('removeME')
    }

    for (let i = 0; i < userList.length; i++) {
        let tR = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        let td7 = document.createElement('td');
        let td8 = document.createElement('td');
        let btn1 = document.createElement('button');
        let btn2 = document.createElement('button');
        tR.className = "removeME"
        btn1.className = "modifyButtons"
        btn2.className = "delete"
        td1.textContent = userList[i].id;
        td2.textContent = userList[i].fullName;
        td3.textContent = userList[i].userName;
        td4.textContent = userList[i].email;
        td5.textContent = userList[i].isImage;
        td6.textContent = userList[i].imageUrl;
        btn1.textContent = "Modify";
        btn2.textContent = "Delete";
        dataTable.appendChild(tR);
        tR.appendChild(td1);
        tR.appendChild(td2);
        tR.appendChild(td3);
        tR.appendChild(td4);
        tR.appendChild(td5);
        tR.appendChild(td6);
        tR.appendChild(td7);
        tR.appendChild(td8);
        td7.appendChild(btn1);
        td8.appendChild(btn2);
        deleteButtons = document.querySelectorAll('.delete');
        console.log("in loop: " + deleteButtons)
    }
}

console.log(deleteButtons)
// deleteButtons.addEventListener('click', function (event) {
//     event.target.parentNode.parentNode.removeChild()
//     looping();
// })


