document.addEventListener("DOMContentLoaded", () => {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "<p>This content was added dynamically using JavaScript!</p>";

    const button = document.createElement("button");
    button.textContent = "Click Me";
    button.onclick = () => alert("You clicked the button!");
    contentDiv.appendChild(button);
});
