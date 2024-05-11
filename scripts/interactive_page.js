// Página interactiva creada por Alejo Cifarelli

//introduction_box starts
const info_box = document.querySelector("#more_info");
const p_one = document.querySelector("#p_one");
const p_two = document.querySelector("#p_two");
const github_link = document.createElement("a");
let link = document.createTextNode("GitHub");
info_box.appendChild(github_link);
github_link.appendChild(link);
github_link.href = "https://github.com/aleuc0099";
p_one.textContent = "Esta página interactiva fue creada por Alejo Cifarelli en el año 2024";
p_two.innerHTML = "Para más información, visitar";

github_link.addEventListener("mouseover", () => {
    github_link.classList = "over";
});
github_link.addEventListener("mouseout", () => {
    github_link.classList = "out";
});
//introduction_box ends

//form_box starts
function showName() {
    let paragraph = document.querySelector("#form_p");
    let saved_name = localStorage.getItem("name");
    let submit_button = document.querySelector("#submit_button");
    let name_input = document.querySelector("#name_input");
    if (saved_name) {
        paragraph.textContent = "Hola " + saved_name + "!";
        paragraph.classList.toggle("big_font");
        submit_button.classList.toggle("off");
        name_input.classList.toggle("off");
    } else {
        paragraph.textContent = "Hola visitante!"
    }
}

function save_name(e) {
    e.preventDefault();
    let name = document.querySelector("#name_input").value;
    localStorage.setItem("name", name);
    showName();
}

let form = document.querySelector("#name_form");
form.addEventListener("submit", save_name);

form.addEventListener("DOMContentLoaded", showName);
//form_box ends

//food_box starts
const food_form = document.querySelector("#food_form")
const food_input = document.querySelector("#food_input");
const season_input = document.querySelector("#season_input");


class Fav_food {
    constructor(food, season) {
        this.food = food;
        this.season = season;
    }
}

food_form.addEventListener("submit", (e) => {
    e.preventDefault();
    let fav_food = new Fav_food(food_input.value, season_input.value);
    const enJSON = JSON.stringify(fav_food);
    console.log(enJSON);
    console.log(fav_food);
    localStorage.setItem("fav_food", enJSON);
});
//food_box ends