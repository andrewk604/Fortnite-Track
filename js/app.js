var submitBtn = document.querySelector('.submitButton');
var gamertagInput = document.getElementById('gamertag');
var platformInput = document.getElementById('platform');
var result = document.querySelector('.result');

const fetchPlayers = async (gamertag, platform) => {
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://api.fortnitetracker.com/v1/profile/${platform}/${gamertag}`, {
        headers: {
           'TRN-Api-Key': '38773e29-7af5-4edb-bcd3-a0f9e1f674ec'
           
        }
        
    });

    const data = await api_call.json();
    console.log(data);
    return { data }
};

const showData = () => {
    fetchPlayers(gamertagInput.value, platformInput.value).then((res) => {
        const markup = `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="./css/stats.css">
            <link rel="stylesheet" href="burbank-big-condensed-black.otf">
        </head>
        
        <body>
            <div class="stats-main-block">
                <div class="stats-block-left">
                    <div class="stats-header stats-block-left-header">
                        <span class="left-block-header-name">General</span>
                        <span class="left-block-header-games-value">${res.data.lifeTimeStats[7].value} games</span>
                    </div>
        
                    <div class="stats-block-left-content">
                        <h1 class="name">${res.data.epicUserHandle}</h1>
                        <div class="player-logo">
                            <img src="${res.data.avatar}" alt="">
                        </div>
                        <div class="stats-block-left-statistics">
                            <div class="general-kd left-block-statistics-div">
                                <ul class="general-kd-ul stats-ul">
                                    <li id="general-kd-li-value" class="general-li-value">${res.data.lifeTimeStats[11].value}</li>
                                    <li id="general-kd-li-name">K/D</li>
                                </ul>
                            </div>
                            <div class="general-wins left-block-statistics-div">
                                <ul class="general-wins-ul stats-ul">
                                    <li id="general-wins-li-value" class="general-li-value">${res.data.lifeTimeStats[8].value}</li>
                                    <li id="general-wins-li-name">Wins</li>
                                </ul>
                            </div>
                            <div class="general-avg-life-time left-block-statistics-div">
                                <ul class="general-avg-life-time--ul stats-ul">
                                    <li id="general-avg-life-time-li-value" class="general-li-value">${res.data.lifeTimeStats[9].value}</li>
                                    <li id="general-avg-life-time-li-name">Win ratio</li>
                                </ul>
                            </div>
                            <div class="general-kills left-block-statistics-div">
                                <ul class="general-kills-ul stats-ul">
                                    <li id="general-kills-li-value" class="general-li-value">${res.data.lifeTimeStats[10].value}</li>
                                    <li id="general-kills-li-name">Kills</li>
                                </ul>
                            </div>
                        </div>
                    </div>
        
                </div>
                <div class="stats-block-right">
                    <div class="stats-solo">
                        <div class="stats-header stats-block-right-solo-header">
                            <span class="left-block-header-name">SOLO</span>
                            <span class="left-block-header-games-value">${res.data.stats.p2.matches.value} games</span>
                        </div>
                        <div class="stats-block-left-statistics">
                            <div class="general-kd left-block-statistics-div">
                                <ul class="general-kd-ul stats-ul">
                                    <li id="general-kd-li-value" class="general-li-value">${res.data.stats.p2.kd.value}</li>
                                    <li id="general-kd-li-name">K/D</li>
                                </ul>
                            </div>
                            <div class="general-wins left-block-statistics-div">
                                <ul class="general-wins-ul stats-ul">
                                    <li id="general-wins-li-value" class="general-li-value">${res.data.stats.p2.top1.value}</li>
                                    <li id="general-wins-li-name">Wins</li>
                                </ul>
                            </div>
                            <div class="general-avg-life-time left-block-statistics-div">
                                <ul class="general-avg-life-time--ul stats-ul">
                                    <li id="general-avg-life-time-li-value" class="general-li-value">${res.data.stats.p2.avgTimePlayed.displayValue}</li>
                                    <li id="general-avg-life-time-li-name">AVG Life Time</li>
                                </ul>
                            </div>
                            <div class="general-kills left-block-statistics-div">
                                <ul class="general-kills-ul stats-ul">
                                    <li id="general-kills-li-value" class="general-li-value">${res.data.stats.p2.kills.value}</li>
                                    <li id="general-kills-li-name">Kills</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="stats-duo">
                        <div class="stats-header stats-block-right-duo-header duo-header">
                            <span class="left-block-header-name">DUO</span>
                            <span class="left-block-header-games-value">${res.data.stats.p10.matches.value} games</span>
        
                        </div>
                        <div class="stats-block-left-statistics">
                            <div class="general-kd left-block-statistics-div">
                                <ul class="general-kd-ul stats-ul">
                                    <li id="general-kd-li-value" class="general-li-value">${res.data.stats.p10.kd.value}</li>
                                    <li id="general-kd-li-name">K/D</li>
                                </ul>
                            </div>
                            <div class="general-wins left-block-statistics-div">
                                <ul class="general-wins-ul stats-ul">
                                    <li id="general-wins-li-value" class="general-li-value">${res.data.stats.p10.top1.value}</li>
                                    <li id="general-wins-li-name">Wins</li>
                                </ul>
                            </div>
                            <div class="general-avg-life-time left-block-statistics-div">
                                <ul class="general-avg-life-time--ul stats-ul">
                                    <li id="general-avg-life-time-li-value" class="general-li-value">${res.data.stats.p10.avgTimePlayed.displayValue}</li>
                                    <li id="general-avg-life-time-li-name">AVG Life Time</li>
                                </ul>
                            </div>
                            <div class="general-kills left-block-statistics-div">
                                <ul class="general-kills-ul stats-ul">
                                    <li id="general-kills-li-value" class="general-li-value">${res.data.stats.p10.kills.value}</li>
                                    <li id="general-kills-li-name">Kills</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="stats-squad">
        
                        <div class="stats-header stats-block-right-squad-header squad-header">
                            <span class="left-block-header-name">SQUAD</span>
                            <span class="left-block-header-games-value">${res.data.stats.p9.matches.value} games</span>
                        </div>
        
                        <div class="stats-block-left-statistics">
                            <div class="general-kd left-block-statistics-div">
                                <ul class="general-kd-ul stats-ul">
                                    <li id="general-kd-li-value" class="general-li-value">${res.data.stats.p9.kd.value}</li>
                                    <li id="general-kd-li-name">K/D</li>
                                </ul>
                            </div>
                            <div class="general-wins left-block-statistics-div">
                                <ul class="general-wins-ul stats-ul">
                                    <li id="general-wins-li-value" class="general-li-value">${res.data.stats.p10.top1.value}</li>
                                    <li id="general-wins-li-name">Wins</li>
                                </ul>
                            </div>
                            <div class="general-avg-life-time left-block-statistics-div">
                                <ul class="general-avg-life-time--ul stats-ul">
                                    <li id="general-avg-life-time-li-value" class="general-li-value">${res.data.stats.p10.avgTimePlayed.displayValue}</li>
                                    <li id="general-avg-life-time-li-name">AVG Life Time</li>
                                </ul>
                            </div>
                            <div class="general-kills left-block-statistics-div">
                                <ul class="general-kills-ul stats-ul">
                                    <li id="general-kills-li-value" class="general-li-value">${res.data.stats.p10.kills.value}</li>
                                    <li id="general-kills-li-name">Kills</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        
        </html>
        `;
        result.insertAdjacentHTML('beforeend', markup);
    })
        .catch(err => console.log(err));
};

const clearField = () => {
    gamertagInput.value = '';
    platformInput.value = 'Choose Platform';
};

const clearPlayer = () => {
    result.innerHTML = '';
}

const searchStatsHide = () => {
    if (gamertagInput.value !== '' && platform.value !== 'Choose Platform') {
    document.querySelector('.stats-search').style.top = '-15'+'%';
    } else {
        alert('Enter your nickname and choose platform');
    }
}

submitBtn.addEventListener('click', function () {
    searchStatsHide();
    showData();
    clearField();
    clearPlayer();
});
