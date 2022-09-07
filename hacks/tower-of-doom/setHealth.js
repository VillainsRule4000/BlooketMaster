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

  if (window.location.pathname == '/tower/battle' || window.location.pathname == '/tower/start') {
    let myLife = Number(parseFloat(prompt('What do you want to set your Health to?')));
    reactHandler().stateNode.setState({ myLife: myLife });
    alert('Health set!')
  } else {
    alert('You must be in a Tower of Doom game!');
  };
})();