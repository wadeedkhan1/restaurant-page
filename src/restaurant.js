const createRestaurantHomepage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');


    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');

    const heading = document.createElement('h1')
    heading.textContent = "Welcome to our Restaurant";
    textContainer.appendChild(heading)

    const p = document.createElement('p')
    p.textContent = "We serve the best Russian!"
    textContainer.appendChild(p);

    const image = document.createElement('img')
    image.src = "./restaurant.jpg";
    image.height = 300;
    pageContent.appendChild(image)

    pageContent.appendChild(textContainer);
    content.appendChild(pageContent);
}

export default createRestaurantHomepage;