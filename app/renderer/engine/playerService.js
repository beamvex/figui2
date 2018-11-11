import fetch from 'node-fetch';

exports.getPlayers = () => {
    return new Promise(resolve => {
        fetch('https://api-prod.footballindex.co.uk/football.allTradable?page=1&per_page=20000&sort=asc').then(res => {
            return res.json();
        }).then(body => {
            resolve(body);
        });
    });
};