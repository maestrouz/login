
let wrapperBlock = document.getElementById('wrapper');
let homeBlock = document.getElementById('home');
let emailBlock = document.getElementById('username');
let wrapper = false;
let home = false;

let user = 'Obidjon';

if (!wrapper) {
    wrapperBlock.style.display = 'none';
} else{
    wrapperBlock.style.display = 'block';
}

if (!home) {
    homeBlock.style.display = 'none'
}

function loginf() {
    wrapper = true
    wrapperBlock.style.display = 'block';
}

function loginUser() {
    if (username.value === user) {
        home = true;
        wrapperBlock.style.display = 'none';
        homeBlock.style.display = 'block'
    } else {
        alert('wrong')
    }
}