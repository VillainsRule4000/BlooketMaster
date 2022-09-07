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
                alert('You must be in a Tower Defense game!');
            } else {
              for (i = 0; i < 10; i++) {
                reactHandler().stateNode.tiles[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
              }
            };
})();