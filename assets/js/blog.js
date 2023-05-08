let userInfo = document.querySelector('#user-info')
console.log()
let onOff = 1;
function userIconOnClick() {
    if (onOff == 1) {
        userInfo.classList.add('open')
        onOff = 0;
    }
    else {
        userInfo.classList.remove('open')
        onOff = 1;
    }

}