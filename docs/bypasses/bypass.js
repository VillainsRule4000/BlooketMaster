let n = document.createElement('iframe');
document.body.append(n);
window.alert = n.contentWindow.alert.bind(window);
window.prompt = n.contentWindow.prompt.bind(window);
window.confirm = n.contentWindow.confirm.bind(window);
n.remove();