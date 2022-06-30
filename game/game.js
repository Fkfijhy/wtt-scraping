Array.from(document.getElementById("tab-menu").children).forEach(element => {
    element.addEventListener("click", () => {
        document.querySelectorAll(".tab").forEach(my_tab => {
            if (my_tab.id.replace("tab-", "") === element.id.replace("button-", "")) {
                my_tab.classList.add("active");
            } else {
                my_tab.classList.remove("active");
            }
        });
    });
});

let actualCommandNumber = 1;

document.getElementById("take-order").onclick = function() {
    var newCommand = document.createElement("span");
    newCommand.id = "command-" + actualCommandNumber;
    newCommand.innerHTML = `<h3>New command : ${actualCommandNumber} </h3>`;
    actualCommandNumber++;
    document.getElementById("command-line").appendChild(newCommand)
        // document.createTextNode(color);
        // Math.floor(Math.random() * 10);
}

function getCommand(commandNumber) {
    var commands = {
        1: {
            "customer": "Cooper",
            "ingredients": {
                "mushrooms": 4,
                "olives": 0,
                "anchovies": 0,
            },
            "cooking": 2,
            "cut": 6,
        },
        2: {
            "customer": "Sue",
            "ingredients": {
                "mushrooms": 0,
                "olives": 6,
                "anchovies": 0,
            },
            "cooking": 6,
            "cut": 4,
        },
    }
    return commands[commandNumber];
}

// function send_message(tabs) {
//     browser.tabs.sendMessage(tabs[0].id, "ScanAsked").then(window.close());
// }

// /*
//  * addEventListener for the popup button
//  * When you click on the button, it sends a message to the `content script`, asking to register the songs
//  */
// document.getElementById("ANTOINE_GRIEZZMAN").addEventListener("click", () => {
//     // Window should be closed before you can see this message
//     document.getElementById('NGOLO_KANTE').innerText = "ERROR: If you see this, something bad happened.";
//     browser.tabs.query({ active: true, currentWindow: true })
//         .then(send_message);
// });