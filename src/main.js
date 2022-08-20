const outputArea = document.getElementById("text-output");

let jsonResume = {
    "basics": {
        "name": "John Snow",
        "label": "King in the north ",
    }
};

const updateOutput = () => {
    outputArea.innerHTML = JSON.stringify(jsonResume, null, 2);
}


const dataArea = document.querySelector(".data-area");

const addInputElements = (key) => {

    const section = jsonResume[key];

    // Create fieldset
    let fieldSet = document.createElement("fieldset");
    fieldSet.appendChild(document.createElement("legend")).innerHTML = key;
    fieldSet.setAttribute("class", "label-text");
    dataArea.appendChild(fieldSet)

    // Create input fields
    for (let child in section) {
        let entry = document.createElement("div");

        let label = document.createElement("label");
        label.setAttribute("for", child);
        label.setAttribute("class", "label-text");
        label.innerHTML = `${child}: `;

        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", child);
        input.setAttribute("placeholder", section[child]);
        input.addEventListener("keyup", () => {
            jsonResume[key][child] = input.value;
            updateOutput();
        });

        entry.appendChild(label);
        entry.appendChild(input);
        fieldSet.appendChild(entry);
    };

}

addInputElements("basics");


updateOutput();
