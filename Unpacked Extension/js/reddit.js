chrome.storage.sync.get({
    state: true
}, function (items) {
    if (items.state) {
        // Set up a mutation observer to remove subreddit style
        // `mutations` is an array of mutations that occurred
        // `me` is the MutationObserver instance
        var observerCss = new MutationObserver(function (mutations, me) {
            console.log("CSS Mutation Observer");
            // Query selector grabs link tag with subreddit style
            var style = document.querySelector("link[ref=applied_subreddit_stylesheet]");
            if (style) style.parentNode.removeChild(style);
            // If a subreddit style sheet is specified then it is removed.
            // The custom CSS file is inserted/appended to the head.
            $('head').append('<link rel="stylesheet" href="' + chrome.extension.getURL('/css/reddit.css') + '" type="text/css" />');
            // I realise I can have the extension insert the CSS
            // automatically rather than adding a reference but that caused issues
            // as the page would render prior to the extension injecting the CSS.
            // This was the only method I found that works.
            me.disconnect(); // stop observing
            return;
        });

        // Start observing
        observerCss.observe(document, {
            childList: true,
            subtree: true
        });



        // Set up another mutation observer to eddit the reddit logo
        // `mutations` is an array of mutations that occurred
        // `me` is the MutationObserver instance
        var observer = new MutationObserver(function (mutations, me) {
            // Grab reddit logo in the top banner
            var img = document.getElementById('header-img');
            // If present then adjust the img tag to the correct dimensions
            // and alter the image source to the extensions reddit logo.
            // The reason the dimensions need to be set here is that some subreddits
            // have custom logos and I found it necessary to hard code the dimensions
            // to prevent the logo the extension uses from warping the page.
            if (img) {
                document.getElementById("header-img").width = 39;
                document.getElementById("header-img").height = 54;
                document.getElementById("header-img").src = chrome.extension.getURL('/images/reddit.png');
                me.disconnect(); // stop observing
                return;
            }
        });

        // Start observing
        observer.observe(document, {
            childList: true,
            subtree: true
        });
    }
});
