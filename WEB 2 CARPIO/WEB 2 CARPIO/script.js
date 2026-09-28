function showAlert() {
    alert("Hello! This is an Alert dialog box.");

    document.getElementById("result").textContent =
        "Alert dialog box was displayed.";
}

function showConfirm() {
    let answer = confirm("Do you want to continue?");

    if (answer) {
        document.getElementById("result").textContent =
            "You clicked OK.";
    } else {
        document.getElementById("result").textContent =
            "You clicked Cancel.";
    }
}

function showPrompt() {
    let name = prompt("What is your name?");

    if (name === null || name.trim() === "") {
        document.getElementById("result").textContent =
            "No name was entered.";
    } else {
        document.getElementById("result").textContent =
            "Hello, " + name + "! Welcome.";
    }
}
