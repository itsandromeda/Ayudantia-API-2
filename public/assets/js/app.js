/*global $, console, randomProfile*/
const render = (root) => {
    root.empty();
    root.append(randomProfile());
};

const settings = {
    profile: null
};

$.getJSON('https://randomuser.me/api/', (response) => {
    settings.profile = response.results;
    const root = $('#root');
    render(root);
});