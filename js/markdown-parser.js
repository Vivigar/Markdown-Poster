console.log("Initiating Post Maker");

let textArea = document.getElementById('text-parse-area');
let submitButton = document.getElementById('submit-button');
let postCounter = 1;

// Makes sure the height is set to automatic and reassigns it based on the scroll height of the text box.
function resizeTextArea() {
    textArea.style.cssText = "height: auto; padding: none;"; // Set height to auto first so that the height won't adjust unless neccisary
    textArea.style.height = textArea.scrollHeight + "px"; 
}

textArea.addEventListener('keyup', resizeTextArea);
submitButton.addEventListener('click', submitThePost);

// Fetches the post counter and the content of the text area to assign it in HTML code as a string value
function getThePost() {
    let postIDHTML = '<div class="postID">' + postCounter + '</div>';
    let postContentHTML = '<div class="postContent">' + textArea.value + '</div> ';
    return '<div class="post">' + postIDHTML + postContentHTML + '</div>';
}

function submitThePost() {
    let newPost = document.createElement("div").innerHTML = getThePost();
    textArea.insertAdjacentHTML('beforebegin', newPost);

    // Reset the value of the text area and brings the focus back
    textArea.value = '';
    textArea.focus();

    // Increment post counter for the list
    postCounter++;
}