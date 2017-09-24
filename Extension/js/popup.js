function save_options() {
    var state = document.getElementById('state').checked;
    chrome.storage.sync.set({
        state: state
    });
}

function restore_options() {
    chrome.storage.sync.get({
        state: true
    }, function (items) {
        document.getElementById('state').checked = items.state;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('state').addEventListener('click', save_options);
});
