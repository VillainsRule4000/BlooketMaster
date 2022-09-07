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
      try {
        reactHandler().stateNode.questions = [{
            "text": "Everything's Correct!",
            "answers": [
                "gliz on top",
                "gliz still on top"
            ],
            "correctAnswers": [
                "gliz on top",
                "gliz still on top"
            ],
            "number": 1,
            "random": false,
            "timeLimit": "999",
            "image": "https://media.blooket.com/image/upload/c_limit,f_auto,h_250,fl_lossy,q_auto:low/v1650444812/vr9fwibbp1mm0ge8hbuz.jpg",
            "audio": null
        }]
        reactHandler().stateNode.freeQuestions = [{
            "text": "Everything's Correct!",
            "answers": [
                "gliz on top",
                "gliz still on top"
            ],
            "correctAnswers": [
                "gliz on top",
                "gliz still on top"
            ],
            "number": 1,
            "random": false,
            "timeLimit": "999",
            "image": "https://media.blooket.com/image/upload/c_limit,f_auto,h_250,fl_lossy,q_auto:low/v1650444812/vr9fwibbp1mm0ge8hbuz.jpg",
            "audio": null
        }]
        alert('All answers are now correct!')
      } catch(e) {
        alert('Error, are you in a game?
      }
})();