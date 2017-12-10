# RedMin

This chrome extension is intended to make reddit look... well frankly, better. Reddit has admirably allowed every subreddit to customize itself which gives the website a very unique look. Whilst some may enjoy the variety when browsing reddit, some like myself, might find it irritating. I'm constantly having to waste time looking for various functionality that some subreddits have moved elsewhere and some might have hidden altogther to improve said subreddit's aesthetic.

To cut to the chase this extension intercepts the reddit html and removes the subreddit css reference, it then injects the extensions own css file. This sentence is the main reason I'm open sourcing the extension code. I recognise that the permission to edit page content is one that I myself do not enjoy allowing because it gives the extension a lot of power. However, given that this extenion will be open source and the code basic, it is easy to see that this extension is in no way malicious. 

The reason I have opted to inject the CSS in this way is that trying to override existing CSS with "!important" all over the place is quite frankly a nightmare. It turned out to be much easier to just remove the reference to the CSS file altogether. I am by no means a coding pro. I have spent a reasonably long time programming (8 years or so), however aside from certain topics at university. It is mostly self taught. Additionally only a small amount of that time has been spent on web oriented topics. Thus, the javascript used might not be the best method or the most efficient however it currently works and produces zero errors, which is something that couldn't be said for my first attempt.

I am very welcoming of both feature and code suggestions, although please note having been a one man show for most of my projects I am relatively new to Git/GitHub and so all the code pull requests and merges etc might take me a tad longer to figure out than 5 minutes. Although that said, I have started using Git more and I am slowly coming to grips with it. PS I realise at this stage some people will be screaming at me about "How could this guy not be using version control and file history etc!!!!" and to that I don't have much to say other than I am getting on board and hate my past self for having Google Drive folders filled with poorly names files like "Newest Code 2 - revision 1.py" or "Totally now working as of Sept 2016.c".

I think thats about it for now, and I will update this file with any relevant information as and when it is required!

-distraktd
