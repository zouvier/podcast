async function validateForm(event) {
    if (await validateEmail(event.target[0].value)) {
        document.getElementsByClassName('warning-inactive')[0].className = 'warning-active'
    }
    event.preventDefault();
}

function validateEmail(email) {
    return delay(1000).then(() => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)));
}

function delay(time){
    return new Promise (resolve => setTimeout(resolve,time))
}

const form = document.getElementById('forms');
form.addEventListener('submit', validateForm);

