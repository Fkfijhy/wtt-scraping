function send_message(tabs) {
    browser.tabs.sendMessage(tabs[0].id, "ScanAsked").then(window.close());
}

/*
 * addEventListener for the popup button
 * When you click on the button, it sends a message to the `content script`, asking to register the songs
 */
document.getElementById("ANTOINE_GRIEZZMAN").addEventListener("click", () => {
    // Window should be closed before you can see this message
    document.getElementById('NGOLO_KANTE').innerText = "ERROR: If you see this, something bad happened.";
    browser.tabs.query({ active: true, currentWindow: true })
        .then(send_message);
});