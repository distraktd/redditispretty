chrome.storage.sync.get({
    state: true
}, function (items) {
    if (items.state) {
        // set up the mutation observer
        var observerCss = new MutationObserver(function (mutations, me) {
            // `mutations` is an array of mutations that occurred
            // `me` is the MutationObserver instance
            var style = document.querySelector("link[ref=applied_subreddit_stylesheet]");
            if (style) {
                style.parentNode.removeChild(style);
                //document.querySelector('head').innerHTML += '<link rel="stylesheet" href=' + chrome.extension.getURL('/reddit.css') + ' type="text/css"/>';
                $('head').append('<link rel="stylesheet" href="' + chrome.extension.getURL('/reddit.css') + '" type="text/css" />');
                me.disconnect(); // stop observing
                return;
            }
        });

        // start observing
        observerCss.observe(document, {
            childList: true,
            subtree: true
        });


        // set up the mutation observer
        var observer = new MutationObserver(function (mutations, me) {
            // `mutations` is an array of mutations that occurred
            // `me` is the MutationObserver instance
            var img = document.getElementById('header-img');
            if (img) {
                document.getElementById("header-img").width = 39;
                document.getElementById("header-img").height = 54;
                document.getElementById("header-img").src = chrome.extension.getURL('/images/reddit.png');
                me.disconnect(); // stop observing
                return;
            }
        });

        // start observing
        observer.observe(document, {
            childList: true,
            subtree: true
        });
    }
});
