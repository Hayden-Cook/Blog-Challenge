const themeSwitcher = document.querySelector('.color-theme');
const toggleContainer = document.querySelector('#toggleLightDark');

let mode = 'dark-colors';

themeSwitcher.addEventListener('click', function(event) {
    event.preventDefault();
    if (mode === 'dark-colors') {
        mode = 'light-colors';
        toggleContainer.setAttribute('class', 'light-colors');
    }
    else {
        mode = 'dark-colors';
        toggleContainer.setAttribute('class', 'dark-colors');
    }
});

//const themeSwitcher = document.querySelector("#toggle-Light-Dark");
//const container = document.querySelector("#theme-container");

//let mode = 'dark-colors';

//themeSwitcher.addEventListener('click', function() {
    //if (mode === 'dark-colors') {
        //mode = 'light-colors';
        //container.setAttribute('class', 'light-colors');
    //}
    //else {
        //mode = 'dark-colors';
        //container.setAttribute('class', 'dark-colors');
    //}
//});
