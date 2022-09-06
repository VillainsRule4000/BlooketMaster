// So this first example just swaps with a player in Gold Quest.

let e = Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner

amountOfGoldToGiveToTheTarget = 0
nameOfThePlayerToSwapWith = 'notzastix'
e.memoizedProps.firebase.setVal({
  id: e.memoizedProps.client.hostId, // the id of the game your in
  path: "c/" + e.memoizedProps.client.name, // the path, (aka "c/youRInGameName")
  val: {
    b: e.memoizedProps.client.blook, // the profile Blook you're using
    g: e.stateNode.state.gold, // amount of gold you have (if you change this it updates your gold stored server-side)
    tat: nameOfThePlayerToSwapWith + ":swap:" + amountOfGoldToGiveToTheTarget
  }
})

// This second example sets a players crypto in crypto-hack (essentially the same as hacking the player)

let e = Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;

target = 'notzastix'
amountToTake = 5
e.memoizedProps.firebase.setVal({
  id: e.memoizedProps.client.hostId, // the id of the game your in
  path: "c/" + e.memoizedProps.client.name, // the path, (aka "c/youInGameName")
  val: {
    p: e.stateNode.state.password, // your password
    b: e.memoizedProps.client.blook, // the profile Blook you're using
    cr: e.stateNode.state.crypto, // amount of crypto you have
    tat: target + ":" + amountToTake
  }
})

// For more information on how values work look at Firebase.md
