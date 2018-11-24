let chooseBtn = document.getElementById('choose'),
    reciveBtn = document.getElementById('receive'),
    heading = document.getElementsByTagName('h2')[0],
    nameImput = document.getElementsByClassName("contactform_name")[0],
    phoneInput = document.querySelector('.contactform_phone'),
    mailInput = document.querySelectorAll('contactform_mail')[0],
    modal = document.querySelector('.modal'),
    close = document.querySelector('.close'),
    text = document.getElementsByName('message')[0];

// console.log(chooseBtn);
/*
function hover() {

};
*/

function hover() {
    heading.textContent = "Действительно все!";
};

// heading.onmouseenter = hover;

/*
function out() {
    heading.textContent = "Все включено!";
};*/
// heading.removeEventListener("mouseenter", hover);

heading.addEventListener("mouseenter", hover);
heading.addEventListener("mouseleave", function() {
    heading.textContent = "Все включено!";
});

reciveBtn.addEventListener('click', function() {
    modal.style.display = "block";
});


close.addEventListener('click', function() {
    modal.style.display = "none";
});

nameImput.addEventListener('input', function() {
    text.value = "Меня зовут " + nameImput.value + ". И я хочу спросить:";
    if (nameImput.value == '') {
        text.value = "";
    };
});
