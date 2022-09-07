(async () => {
    let n = document.createElement('iframe');
    document.body.append(n);
    window.alert = n.contentWindow.alert.bind(window);
    window.prompt = n.contentWindow.prompt.bind(window);
    window.confirm = n.contentWindow.confirm.bind(window);
    n.remove();
            function reactHandler() {
                return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
            };
        
            if (window.location.pathname != '/play/factory') {
                alert('You must be in a Factory game!');
            } else {
                reactHandler().stateNode.state.dance = ""
                reactHandler().stateNode.state.lol = ""
                reactHandler().stateNode.state.joke = ""
                reactHandler().stateNode.state.showTour = ""
                reactHandler().stateNode.state.hazards = ["", "", "", "", ""]
                reactHandler().stateNode.state.glitcherName = ""
                reactHandler().stateNode.state.glitch = ""
                reactHandler().stateNode.state.glitchMsg = ""
                reactHandler().stateNode.state.glitcherBlook = ""
                alert('Attempted to remove glitches.');
            };
})();