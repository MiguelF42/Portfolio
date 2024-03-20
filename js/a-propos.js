const selector = document.getElementById('selector');
const etudes = document.getElementById('etudes');
const experiences = document.getElementById('experiences');
const age = document.getElementById('age');
let etudesActive = true;

function getAge(date) { 
    var diff = Date.now() - date.getTime();
    var age = new Date(diff);

    return Math.abs(age.getUTCFullYear() - 1970);
} 

age.innerHTML = getAge(new Date(2004, 3, 9));

const etudesClick = () => {
    if (!etudesActive) {
        selector.classList.remove('experiences');
        etudes.classList.add('active');
        experiences.classList.remove('active');
        etudesActive = true;
    }
}

const experiencesClick = () => {
    if (etudesActive) {
        selector.classList.add('experiences');
        etudes.classList.remove('active');
        experiences.classList.add('active');
        etudesActive = false;
    }
}

