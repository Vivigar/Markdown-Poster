console.log("Initiating Markdown Parser");

let textArea = document.getElementById('text-parse-area');
console.log(textArea);

textArea.addEventListener('keyup', autoSize);

function autoSize() {
    textArea.style.height = "auto";
    textArea.style.padding = "none;"

    textArea.style.height = textArea.scrollHeight + "px";
}

function autoSizeTextArea() {


}
