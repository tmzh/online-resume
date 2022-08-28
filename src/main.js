const outputArea = document.getElementById("text-output");

let jsonResume = {
    "basics": {
        "name": "John Snow",
        "label": "King in the north ",
        "image": "",
        "email": "john@gmail.com",
        "phone": "(912) 555-4321",
        "url": "https://johndoe.com",
        "summary": "A summary of John Doe…",
        "location": {
            "address": "2712 Broadway St",
            "postalCode": "CA 94115",
            "city": "San Francisco",
            "countryCode": "US",
            "region": "California"
        },
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
    fieldSet.setAttribute("class", "border border-solid border-gray-300 p-3");
    dataArea.appendChild(fieldSet)

    // Create input fields
    for (let child in section) {
        let entry = document.createElement("div");

        let label = document.createElement("label");
        label.setAttribute("for", child);
        label.setAttribute("class", "w-1/4 text-right font-bold");
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
