import createRestaurantPage from "./restaurant";
import createContactPage from "./contact";
import createMenu from "./menu";

function initialLoad() {

    const content = document.querySelector("#content");

    const navBar = document.createElement("div")
    navBar.classList.add("navbar")
    const homeButton= document.createElement("button");
    homeButton.textContent = "Home"
    homeButton.classList.add("buttons")
    homeButton.addEventListener("click", () => {
        content.innerHTML = '';
        content.appendChild(navBar);
        createRestaurantPage();
    });


    navBar.appendChild(homeButton);


    const menuButton = document.createElement("button")
    menuButton.textContent = "Menu"
    menuButton.classList.add("buttons")
    menuButton.addEventListener("click", () => {
        content.innerHTML = '';
        content.appendChild(navBar);
        createMenu();
    });

    navBar.appendChild(menuButton);

    const contactButton = document.createElement('button')
    contactButton.textContent = "Contact Us"
    contactButton.classList.add("buttons")
    contactButton.addEventListener("click", () => {
        content.innerHTML = "";
        content.appendChild(navBar);
        createContactPage()
    })

    navBar.appendChild(contactButton);

    content.appendChild(navBar)

    createRestaurantPage();
        //createContactPage();
    //createMenu();
}

export default initialLoad;
