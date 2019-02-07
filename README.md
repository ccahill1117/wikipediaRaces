# WikiRaces 🏎️ 🏁

## Authors
[Christopher Cahill](https://github.com/ccahill1117) &&
[Ryan Leslie](https://github.com/ryanleslie33) &&
[Quinn Miller](https://github.com/quinnrobepicodus)

### What's a Wiki Race?

A Wikipedia race "is a race between any number of participants, using links to travel from one Wikipedia page to another. The first person to reach the destination page, or the person that reaches the destination using the fewest links, wins the race. Intermediary pages may also be required."

[-wikipedia (Wikipeidia Wikirace article)](https://en.wikipedia.org/wiki/Wikipedia:Wikirace)

### Current Status

Application creates a game object with a randomly generated 'start' article and 'end' article with a unique game ID and username (email address) of player. Game object is pushed to firebase and as user clicks on links in the 'navigation' pane the game object 'article history' array is updated, so as to track the user's progress. A simple scoring system has been implemented, so that a player begins with 100 points, and each subsequent click subtracts a point from the score.

### Next Steps

- Add timed game type
- Allow for competitive 'session' play against another opponent
- Add 'history' component to see all of a logged-in player's games
- Add 'current games' component to see other games being played


#### Some interesting sites and learning materials we discovered along the way
###### Here's an example API call we used to test out our API call

[https://en.wikipedia.org/w/api.php?action=parse&pageid=3747](https://en.wikipedia.org/w/api.php?action=parse&pageid=3747)

###### Here are some links to useful wikipedia resources about their API

[https://en.wikipedia.org/w/api.php](https://en.wikipedia.org/w/api.php)

[https://www.mediawiki.org/wiki/API:Errors_and_warnings](https://www.mediawiki.org/wiki/API:Errors_and_warnings)

[https://en.wikipedia.org/wiki/Special:ApiSandbox#action=help&recursivesubmodules=1](https://en.wikipedia.org/wiki/Special:ApiSandbox#action=help&recursivesubmodules=1)

[https://www.mediawiki.org/wiki/API:Tutorial](https://www.mediawiki.org/wiki/API:Tutorial)

[https://en.wikipedia.org/api/rest_v1/](https://en.wikipedia.org/api/rest_v1/)

###### Really interesting project which shows all wikipedia edits, posts, deletions, etc. in real time and then adds music

[http://listen.hatnote.com/](http://listen.hatnote.com/)

###### Wikipedia API query parameters diagram

![alt text](./src/assets/800px-Request_format.svg.png "Logo Title Text 1")
