const inputArea = document.getElementById("text-input");
const outputArea = document.getElementById("text-output");
const btnFormat = document.getElementById("format");
const btnMinify = document.getElementById("minify");

console.log(btnFormat)
console.log(inputArea)


btnFormat.addEventListener("click", () => {
    const formatted = JSON.stringify(JSON.parse(inputArea.value), null, 4);
    outputArea.value = formatted;
});

btnMinify.addEventListener("click", () => {
    const minified = JSON.stringify(JSON.parse(inputArea.value));
    outputArea.value = minified;
});
