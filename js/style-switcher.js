const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open');
})

window.addEventListener('scroll', () => {
    if(document.querySelector('.style-switcher').classList.contains('open'))
    {
        document.querySelector('.style-switcher').classList.remove('open');
    }
})

const alternateStyles = document.querySelectorAll('.alternate-style');
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute('title'))
        {
            style.removeAttribute('disabled');
        }
        else
        {
            style.setAttribute('disabled','true');
        }
    })
}

function changeLogo() {
    if(document.body.classList.contains('dark')) 
    {
        logo.setAttribute('src','images/logo dark-mode.webp');
    }
    else
    {
        logo.setAttribute('src','images/logo light-mode.webp');
    }
}

const dayNight = document.querySelector('.day-night');
const logo = document.querySelector('.logo a img');
dayNight.addEventListener('click', () => {
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
    changeLogo();
})
window.addEventListener('load', () => {
    if(document.body.classList.contains('dark'))
    {
        dayNight.querySelector('i').classList.add('fa-sun');
    }
    else
    {
        dayNight.querySelector('i').classList.add('fa-moon');
    }
    changeLogo();
})

// const langage = document.querySelector('.langage');
// const body = document.querySelector('body');

// langage.addEventListener('click',() => {
//     const html = document.querySelector('html');
//     let link = '../langage/';


//     if (html.getAttribute === 'en')
//     {
//         link = link+'fr.html';
//         html.setAttribute('lang','fr');
//     }
//     else
//     {
//         link = link+'en.html';
//         html.setAttribute('lang','en');
//     }

//     readTextFile(link)

// })

// function readTextFile(file)
// {
//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET", file, false);
//     rawFile.onreadystatechange = function ()
//     {
//         if(rawFile.readyState === 4)
//         {
//             if(rawFile.status === 200 || rawFile.status == 0)
//             {
//                 var allText = rawFile.responseText;
//                 body.innerHTML = allText;
//             }
//         }
//     }
//     rawFile.send(null);
// }