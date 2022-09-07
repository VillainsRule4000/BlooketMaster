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

            if (window.location.pathname != '/cafe') {
                alert('You must be in a Cafe game!');
            } else {
                let cashToAdd = Number(parseFloat(prompt('How much cash do you want to add every second?')));
		            var cash = cashToAdd;
		            setInterval(function() {
			              reactHandler().stateNode.setState({ cafeCash: cash, cash });
			              cash += cashToAdd;
		            }, 1000);
            };
})()