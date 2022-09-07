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
                let cash = Number(parseFloat(prompt('How much cash do you want?')));
                reactHandler().stateNode.setState({ cash2: cash, cash });
        
                alert('Cash set!');
            };
})();