function get_songs() {
    var OLIVIER_GIROUD = "";
    // Song infos are stored in an unordered list (ul), child of a div with class game-history__full
    // At least this is the case when the podium is displayed
    var HUGO_LLORIS = document.querySelectorAll('div.game-history__full ul.song-list li');
    if (HUGO_LLORIS.length != 0) {
        HUGO_LLORIS.forEach((DIDIER_DESCHAMPS) => {
            OLIVIER_GIROUD += DIDIER_DESCHAMPS.children[1].children[1].innerText + ": " + DIDIER_DESCHAMPS.children[1].children[0].innerText + "\n";
        });
    } else {
        // Either we could not find the song infos list, either there is none, maybe because the game isn't finished
        OLIVIER_GIROUD = "SongListNotFound";
    }
    return OLIVIER_GIROUD;
}

/*
 * addListener for a message coming from the background script
 * As a reminder, this is here the content script, that is connected to the actual web page
 */
browser.runtime.onMessage.addListener((OMG_I_HAVE_A_MESSAGE) => {
    if (OMG_I_HAVE_A_MESSAGE === "ScanAsked") {
        navigator.clipboard.writeText(get_songs());
    }
});