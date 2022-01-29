// from admin2 stat func


let dataTable = document.querySelector('#dataShow');
let nameInput = document.querySelector('#nameInput');
let userInput = document.querySelector('#userInput');
let emailInput = document.querySelector('#emailInput');
let saveInputButton = document.querySelector('#saveInput');
let modifyButton = document.querySelectorAll('.modifyButtons');
let deleteButtons;
let noUsersLeft = document.querySelector('#noUsersLeft');


saveInputButton.addEventListener('click', function () {
    newUserList.addUser(nameInput.value, userInput.value, emailInput.value)
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
    td1.textContent = User.id;
    td2.textContent = User.fullName;
    td3.textContent = User.userName;
    td4.textContent = User.email;
    td5.textContent = User.isImage;
    td6.textContent = User.imageUrl;
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
})

function removeElementsByClass(className) {
    const elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}


for (let i = 0; i < newUserList.length; i++) {
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
    td1.textContent = newUserList[i].id;
    td2.textContent = newUserList[i].fullName;
    td3.textContent = newUserList[i].userName;
    td4.textContent = newUserList[i].email;
    td5.textContent = newUserList[i].isImage;
    td6.textContent = newUserList[i].imageUrl;
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




// for (let i = 0; i < deleteButtons.length; i++) {

//     deleteButtons[i].addEventListener('click', function (event) {
//         delete userList[i]
//         let tR = document.createElement('tr');
//         let td1 = document.createElement('td');
//         let td2 = document.createElement('td');
//         let td3 = document.createElement('td');
//         let td4 = document.createElement('td');
//         let td5 = document.createElement('td');
//         let td6 = document.createElement('td');
//         let td7 = document.createElement('td');
//         let td8 = document.createElement('td');
//         let btn1 = document.createElement('button');
//         let btn2 = document.createElement('button');
//         tR.className = "removeME"
//         btn1.className = "modifyButtons"
//         btn2.className = "delete"
//         td1.textContent = userList[i].id;
//         td2.textContent = userList[i].fullName;
//         td3.textContent = userList[i].userName;
//         td4.textContent = userList[i].email;
//         td5.textContent = userList[i].isImage;
//         td6.textContent = userList[i].imageUrl;
//         btn1.textContent = "Modify";
//         btn2.textContent = "Delete";
//         dataTable.appendChild(tR);
//         tR.appendChild(td1);
//         tR.appendChild(td2);
//         tR.appendChild(td3);
//         tR.appendChild(td4);
//         tR.appendChild(td5);
//         tR.appendChild(td6);
//         tR.appendChild(td7);
//         tR.appendChild(td8);
//         td7.appendChild(btn1);
//         td8.appendChild(btn2);
//     })
// }
