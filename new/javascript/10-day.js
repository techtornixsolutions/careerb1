let inputTag = document.getElementById('input');
let eye = document.getElementById('eye');
function display() {
    if (inputTag.type == 'password' && eye.className == 'fa-regular fa-eye') {
        inputTag.type = 'text';
        eye.className = 'fa-regular fa-eye-slash';
    }
    else {
        inputTag.type = 'password'
        eye.className = 'fa-regular fa-eye'
    }

}

