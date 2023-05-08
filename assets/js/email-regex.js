const email = document.querySelector("input[type = 'email']");
const password = document.querySelector("input[type = 'password']")

const dangNhap = document.querySelector("button.email-btn")

function enableBtn() {
    if (checkRegex()) {
        dangNhap.classList.add('enable');
        dangNhap.disabled = false
    }
    else {
        dangNhap.classList.remove('enable');
        dangNhap.disabled = true;
    }
}

function checkRegex() {
    let pattern1 = /^\w{8,}$/
    let patternEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let resultPass = pattern1.test(password.value);
    let checkEmail = patternEmail.test(email.value);
    return resultPass && checkEmail;
}
window.onload = (event) => {
    enableBtn();
}
email.addEventListener('input', enableBtn)
password.addEventListener('input', enableBtn)
dangNhap.addEventListener('click', () => {
    location.href = 'http://127.0.0.1:5501/index.html'
})

