# React
Blooket is a web-app running on [React](https://reactjs.org/)<br>and it also uses react to store its values for the games, therefore we can debug/reverse engineer it <br>A very good tool for this is [React-Developer-Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi), a Chrome extension a tool that is used for viewing react values, but we can use it to find where Ben stores game data, and edit it.<br>
Now, this can be extremely confusing at times, that's why i recommend learning React itself before attempting to cheat with it.<br>
the __correct__ way to edit react values is via ``` reactHandler().stateNode.setState() ```, but if you want to edit values manually make sure to call ``` reactHandler().stateNode.forceUpdate() ```, if you want some examples check out the example folder [here](https://github.com/notzastix/BlooketCheatTools/blob/main/examples/).

# Firebase
Blooket uses firebase for websocket and handling hosting, so to edit values that are "server-side" we need to either use `reactHandler().stateNode.props.firebase.setVal()` or send a encoded request to `https://fb.blooket.com/c/firebase/games/${gameID}/v` with the value to edit, the id and the path of the player sending it, which doesn't even have to be you, so you can for example, make someone else swap with you in Gold Quest, or make someone else swap with someone else, its really insecure and easily exploitable (like most of blooket), for some example and a more in depth dive into firebase look at the [examples folder](https://github.com/notzastix/BlooketCheatTools/blob/main/examples/)

# API
Blooket's API is quite important, it is used for things like addTokens and autoAnswer.<br>
Now recently ben has added hashing/encryption to the api, the algorithm being used for hashing is [AES-GCM](https://en.wikipedia.org/wiki/Galois/Counter_Mode)<br>
There is already a decoder and an encoder for the API, public so you don't really need to worry.

# Anitcheat
One thing that has been coming up a lot recently is Ben adding an Anticheat. Now, there is a detection system for editing React values, also he overrode `alert()`, `prompt()`, and `confirm()` and added a function to detect if the input had the following bits of text: 'basil', 'incompatible', 'gold', 'script is outdated' in it, if it did, it would send a request to Blooket's API to disable your account. A while back, Ben also added encryption to his API requests, I have a bypass ready [here](https://github.com/notzastix/BlooketCheatTools/blob/main/bypasses/requestEncoder.js)

# Bypassing?

We can bypass these patches to an extent there are already bypasses for the `alert()`, `prompt()`, and `confirm()` patch [here](https://github.com/notzastix/BlooketCheatTools/blob/main/bypasses/bypass.js). For example in Gold Quest, there are values `gold` and `gold2` and if they aren't equal to each other, it kicks you from the game.

<p>- zastix</p>
