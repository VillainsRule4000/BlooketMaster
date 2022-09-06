/*
So this first example is the "correct" way to edit react values, there are other way(s) but this is easiest.
You could also make the function into a variable and use that.
*/
function reactHandler() {
    return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
};
reactHandler().stateNode.setState({
    round: Number(prompt('What round would you like to go to?'));
}).catch(() => alert('An error has occurred.'));


/*
So this is the "incorrect" or wrong way to do it, this is actually how I first edited react values.
*/
function reactHandler() {
    return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
};
reactHandler().stateNode.state.round = Number(prompt('What round would you like to go to?'))
reactHandler().stateNode.forceUpdate().catch(() => alert('An error has occurred.')); // if you didn't do forceUpdate() it wouldn't update the value automatically.
