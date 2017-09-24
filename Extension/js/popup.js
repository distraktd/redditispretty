// This is the JS for the options seen by clicking the extension icon.
// For the time being it is simply a toggle for on/off however
// I plan upon expanding this section in the future to allow things
// such as theme selection...

// Basic save function I pulled in from Google's tutorial
function save_options() {
    var state = document.getElementById('state').checked;
    chrome.storage.sync.set({
        state: state
    });
}

// Function to retrieve the setting from the user.
function restore_options() {
    chrome.storage.sync.get({
        state: true
    }, function (items) {
        document.getElementById('state').checked = items.state;
    });
}

// Add event listeners for the abover functions
document.addEventListener('DOMContentLoaded', restore_options);
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('state').addEventListener('click', save_options);
});
