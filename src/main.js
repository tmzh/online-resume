const nameInput = document.getElementById("name-input");
const outputArea = document.getElementById("text-output");

let jsonResume = {
    "First Name": "John",
    "Last Name": "Snow",
};

let mappings = {
    "first name": "First Name",
    "last name": "Last Name",
}

const updateOutput = () => {
    outputArea.innerHTML = JSON.stringify(jsonResume, null, 2);
}


const dataArea = document.querySelector(".data-area");

for (let key in mappings) {
    let section = document.createElement("section");
    dataArea.appendChild(section);

    let label = document.createElement("label");
    label.innerHTML = `${mappings[key]}: `;

    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", key);
    input.setAttribute("placeholder", jsonResume[mappings[key]]);
    input.addEventListener("keyup", () => {
        jsonResume[key] = input.value;
        updateOutput();
    });

    section.appendChild(label);
    section.appendChild(input);
};

createInput();


updateOutput();
