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
function show_name() {
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
    food_form.classList.toggle("appear");
}

function save_name(e) {
    e.preventDefault();
    let name = document.querySelector("#name_input").value;
    if (confirm(`Es ${name} tu nombre correcto?`)) {
        localStorage.setItem("name", name);
        show_name();
    }
}

let form = document.querySelector("#name_form");
form.addEventListener("submit", save_name);
form.addEventListener("DOMContentLoaded", show_name);
//form_box ends

//food_box starts
const food_form = document.querySelector("#food_form")
const food_input = document.querySelector("#food_input");
const season_input = document.querySelector("#season_input");
const ffood_list = document.querySelector("#ffood_list");
const ffood_list_box = document.querySelector("#ffood_list_box");

class Fav_food {
    constructor(food, season) {
        this.food = food;
        this.season = season;
    }
    show_ffood() {
        ffood_list_box.classList = "appear";
        let new_food_item = document.createElement("li");
        ffood_list.appendChild(new_food_item);
        new_food_item.textContent = this.food + " en " + this.season;
    }
}

const ff_list = [];
food_form.addEventListener("submit", (e) => {
    e.preventDefault();
    let fav_food = new Fav_food(food_input.value, season_input.value);
    ff_list.push(fav_food);
    const JSON_list = JSON.stringify(ff_list);
    localStorage.setItem("fav_food_list", JSON_list);
    if (ff_list.length <= 5) {
        fav_food.show_ffood();
    } else {
        food_form.classList.toggle("appear");
    }
});
//food_box ends