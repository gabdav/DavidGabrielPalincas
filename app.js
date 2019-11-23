const body = document.getElementById('mail')
const page = document.getElementById('page');
const home = document.getElementById('home');
const skills = document.getElementById('skills');
const experience = document.getElementById('experience');
const education = document.getElementById('education');
const projects = document.getElementById('projects');

body.addEventListener('click', copyItem);
skills.addEventListener('click', changePage('skills', Skills));
home.addEventListener('click', changePage('home', Home));
experience.addEventListener('click', changePage('experience', Experience));
education.addEventListener('click', changePage('education', Education));
projects.addEventListener('click', changePage('projects', Projects));

function copyItem(e) {


    if (e.target.className === 'align-middle mail') {
        let text = e.target.textContent;
        navigator.clipboard.writeText(text);
        showAlert('Copied to clipboard', 'alert alert-dismissible alert-primary');
    }
}
jQuery(document).ready(function() {
    jQuery('[data-toggle="tooltip"]').tooltip();
    jQuery('[data-toggle="popover"]').popover();
});

//Alert------
function showAlert(message, classes) {
    const alertDiv = document.getElementById('alert');

    this.clearAlert();

    const div = document.createElement('div');

    div.className = classes;

    div.appendChild(document.createTextNode(message));

    alertDiv.appendChild(div);

    setTimeout(() => {
        this.clearAlert();
    }, 1500);

}

function clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
        currentAlert.remove();
    }
}
//--------


function changePage(pageName, pageObj) {
    return function(e) {
        if (e.target.parentElement.className === `nav-item mr-3 ${pageName}` || e.target.parentElement.className === `nav-item mr-3 ml-3 ${pageName}`) {
            const allStuff = document.querySelectorAll('li')
            allStuff.forEach((item) => {

                if (item.className === e.target.parentElement.className) {
                    item.className += " active";
                } else {
                    item.className = item.className.replace(" active", "");

                }
            })
            page.innerHTML = pageObj.giveHtml()
            jQuery(document).ready(function() {
                jQuery('[data-toggle="tooltip"]').tooltip();
                jQuery('[data-toggle="popover"]').popover();
            });
        }
    }


}

//Modal--------
function openModal(name) {
    slideIndex = 1;
    document.getElementById(name).style.display = "block";
}

function closeModal(name) {
    document.getElementById(name).style.display = "none";
}

let slideIndex = 1;

function plusSlides(n, name) {
    showSlides(slideIndex += n, name);
}


function showSlides(n, name) {
    var i;
    const slides = document.getElementsByClassName(name);


    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}
//--------