window.addEventListener('load', function () {

    let errorMsg = document.querySelector('#errorMsg');
    let form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let inputs = document.querySelectorAll('input');
        if (inputs[0].value.toLowerCase() === 'admin' && inputs[1].value.toLowerCase() === 'password') {
            location.href="admin.html"
        }
        else {
            errorMsg.style.display = "inline-block";
        }
    })




})
