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
        
            if (window.location.pathname != '/defense') {
                alert('This cheat is for the Tower Defense game mode!')
            } else {
                let hltt = Number(parseFloat(prompt('How much health do you want?')));
                reactHandler().stateNode.state.health({ hltt });
                alert('Health set!');
            };
})();