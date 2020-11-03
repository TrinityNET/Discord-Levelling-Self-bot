# Discord-Levelling-Self-bot
Works for any levelling system that works in intervals.

First, you will need node.js installed. You can get a free VM from Google Cloud to passively run the selfbot in the background.

Once node.js is installed, open the config.json and replace the token value with your Discord token. There's YouTube video tutorials on how to do this.

61000ms is equivalent to 61 seconds. The bot works in 60 second intervals so I added an extra second to be on the safe side. You can modify this value accustomed to the server you're in. You can also copy and paste the channels.get.send line multiple times underneath each other with a different channel ID to bot multiple servers.

There is also an array called msgArray. You can modify this list to say different words/phrases. It selects a random one when sending the message.

Snap - ctos07.
