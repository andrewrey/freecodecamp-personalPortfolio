
// Page Elements//
const projectGrid = document.querySelector('.projectGrid');


// Functions //

function createCard(item){
    let {name, link, image, description} = item;
    let card = document.createElement('div');
    card.className = 'projectCard';
    card.innerHTML = `
        <h2>${name}</h2>
        <div class="cardInfo">
            <a href="${link}"><img src="${image}"></a>
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