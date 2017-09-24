chrome.storage.sync.get({
    state: true
}, function (items) {
    if (items.state) {
        // Set up a mutation observer to remove subreddit style
        // `mutations` is an array of mutations that occurred
        // `me` is the MutationObserver instance
        var observerCss = new MutationObserver(function (mutations, me) {
            // Query selector grabs link tag with subreddit style
            var style = document.querySelector("link[ref=applied_subreddit_stylesheet]");
            // If it finds the tag i.e. the subreddit has its own stylesheet then
            // it removes the tag and inserts a new tag referencing the extensions
            // own CSS file. I realise I can have the extension insert the CSS
            // automatically rather than adding a reference but that cause issues
            // as the page would render prior to the extension injecting the CSS.
            // This was the only method I found that works.
            if (style) {
                style.parentNode.removeChild(style);
                //document.querySelector('head').innerHTML += '<link rel="stylesheet" href=' + chrome.extension.getURL('/reddit.css') + ' type="text/css"/>';
                $('head').append('<link rel="stylesheet" href="' + chrome.extension.getURL('/reddit.css') + '" type="text/css" />');
                me.disconnect(); // stop observing
                return;
            }
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
            // If present then adjust the a tag to the correct dimensions
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
