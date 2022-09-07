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

    if (window.location.pathname != '/factory') {
        alert('You must be in a Factory game')
    } else {
        let botamt = Number(parseFloat(prompt('How many tokens do you want?')));
        for (var i = 0; i < botamt; i++) {
            var megbot = {
                name: 'Mega Bot',
                color: '#2fa04a',
                class: '\uD83E\uDD16',
                rarity: 'Mythical',
                cash: [80000, 430000, 4200000, 62000000, 1000000000],
                time: [5, 5, 3, 3, 3],
                price: [7000000, 120000000, 1900000000, 35000000000],
                active: false,
                level: 4,
                bonus: 6.9
            }
            reactHandler().stateNode.setState.blooks.push(megbot)
        }
        alert('Mega Bots added!');
    };
})();