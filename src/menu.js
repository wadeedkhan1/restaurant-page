const createMenu = () => {
    const content = document.querySelector("#content");

    const heading = document.createElement('h1');
    heading.textContent = "Menu";
    content.appendChild(heading);

    const dishes = document.createElement("div");
    dishes.classList.add('dishes-container');

    const dishData = [
        { name: "Fruit Salad", image: "./fruit salad.jpg" },
        { name: "Salad", image: "./salad.jpg" },
        { name: "Lamb Steak", image: "./lamb steak.jpg" },
        { name: "Sushi", image: "./sushi.jpg" },
        { name: "Soup", image: "./soup.jpg" },
        { name: "Steak", image: "./steak.jpg" },
        { name: "Pasta", image: "./pasta.jpg" },
        { name: "Salmon Salad", image: "./salmon salad.jpg" },
        { name: "Oil", image: "./oil.jpg" },
    ];

    dishData.forEach(dish => {
        const dishDiv = document.createElement("div");
        dishDiv.classList.add('dish');

        const img = document.createElement('img');
        img.src = dish.image;
        img.style.height = '100px';

        const name = document.createElement('h6');
        name.textContent = dish.name;

        dishDiv.appendChild(img);
        dishDiv.appendChild(name);
        dishes.appendChild(dishDiv);
    });

    content.appendChild(dishes);
};

export default createMenu;
