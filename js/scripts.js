
// Page Elements//
const frontCover = document.querySelector('.front-cover');
const mainPage = document.querySelector('.main-page');
const projectGrid = document.querySelector('.projectGrid');
const navBar = document.querySelector('nav');
const aboutPage = document.getElementById('about');
const projectsPage = document.getElementById('projects');
const contactPage = document.getElementById('contact');
const downArrow = document.querySelector('.downArrow');
// Functions //

function createCard(item){
    let {name, link, image, description} = item;
    let card = document.createElement('div');
    card.className = 'project-tile';
    card.innerHTML = `
        <h2>${name}</h2>
        <div class="cardInfo">
            <a href="${link}" target="_blank"><img src="${image}"></a>
            <p>${description}</p>
        </div>
    `;
    projectGrid.appendChild(card);
}




// Card Array Objects //

let projectCardArray = [
    {
        name: "Tribute Page",
        link: "https://andrewrey.github.io/freecodecamp-tributePage/",
        image: "img/tribute.png",
        description: "Using HTML CSS and SASS, I created a tribute page for Chad Muska."
    },
    {
        name: "Survey Form",
        link: "https://andrewrey.github.io/freecodecamp-surveyForm/",
        image: "img/survey-form.png",
        description: "Created a page focused on the form element. With this form I used several types of form input elements."
    },
    {
        name: "Product Landing Page",
        link: "https://andrewrey.github.io/freecodecamp-productLandingPage/",
        image: "img/product-landing-page.png",
        description: "Created page using HTML CSS SASS and Javascript. This page uses several break points to be mobile first as well use JavaScript to create product section as well as overlay card of each individual product. "
    },
    {
        name: "Tech Documentation Page",
        link: "https://andrewrey.github.io/freecodecamp-techdocumentationPage/",
        image: "img/technical-documentation.png",
        description: "Page utilizes the CSS Grid and is Mobile responsive which re-organizes the grid positioning for screen size."
    },

];

projectCardArray.forEach(createCard);


/// Event Listeners /////

// when header nav button is clicked, it's selected and unhides matching card
navBar.addEventListener('click', e =>{
    let button = e.target;
    let buttons = document.querySelectorAll('.navLink');
    buttons.forEach(link => link.classList.contains('selected')?link.classList.remove('selected'):"");
    aboutPage.classList.add('hide');
    projectsPage.classList.add('hide');
    contactPage.classList.add('hide');
    console.log(buttons);
    if(button.textContent === "About"){
        button.classList.add("selected");
        aboutPage.classList.remove('hide');
    } else if(button.textContent === "Projects"){
        button.classList.add("selected");
        projectsPage.classList.remove('hide');
    } else if(button.textContent === 'Contact'){
        button.classList.add("selected");
        contactPage.classList.remove('hide');
    }
});

// when downarrow clicked unhides <main> 

downArrow.addEventListener('click', e => {
    frontCover.classList.add('uncover');
    setTimeout(() => {
        frontCover.classList.add('hide');
    }, 2000);
    setTimeout(()=>{
        frontCover.classList.remove('uncover');
    }, 2500);
});