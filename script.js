document.addEventListener('DOMContentLoaded', () => {
    const gamesData = [
        {
            date: "2024.03.29",
            opponent: "KT 위즈",
            eaglesScore: 3,
            opponentScore: 2,
            image: "assets/games/20240329.svg",
            teamLogo: "assets/logos/kt-wiz.svg",
            scoreboardImage: "assets/games/20240329_gb.png",
            isWin: true
        },
        {
            date: "2024.03.30",
            opponent: "KT 위즈",
            eaglesScore: 8,
            opponentScore: 5,
            image: "assets/games/20240330.jpg",
            teamLogo: "assets/logos/kt-wiz.svg",
            scoreboardImage: "assets/games/20240330_gb.png",
            isWin: true
        },
        {
            date: "2024.03.31",
            opponent: "KT 위즈",
            eaglesScore: 14,
            opponentScore: 3,
            image: "assets/games/20240331.jpg",
            teamLogo: "assets/logos/kt-wiz.svg",
            scoreboardImage: "assets/games/20240331_gb.png",
            isWin: true
        },
        {
            date: "2024.04.02",
            opponent: "롯데 자이언츠",
            eaglesScore: 0,
            opponentScore: 1,
            teamLogo: "assets/logos/lotte.svg",
            isWin: false
        },
        {
            date: "2024.04.03",
            opponent: "롯데 자이언츠",
            teamLogo: "assets/logos/lotte.svg",
            isCanceled: true
        },
        {
            date: "2024.04.04",
            opponent: "롯데 자이언츠",
            eaglesScore: 6,
            opponentScore: 5,
            image: "assets/games/20240404.jpg",
            teamLogo: "assets/logos/lotte.svg",
            scoreboardImage: "assets/games/20240404_gb.png",
            isWin: true
        },
        {
            date: "2024.04.05",
            opponent: "키움 히어로즈",
            eaglesScore: 7,
            opponentScore: 11,
            teamLogo: "assets/logos/kiwoom.svg",
            isWin: false
        }
        ,
        {
            date: "2024.04.06",
            opponent: "키움 히어로즈",
            eaglesScore: 6,
            opponentScore: 7,
            teamLogo: "assets/logos/kiwoom.svg",
            isWin: false
        },
        {
            date: "2024.04.07",
            opponent: "키움 히어로즈",
            eaglesScore: 3,
            opponentScore: 4,
            teamLogo: "assets/logos/kiwoom.svg",
            isWin: false
        },
        {
            date: "2024.04.09",
            opponent: "두산 베어스",
            eaglesScore: 3,
            opponentScore: 5,
            teamLogo: "assets/logos/doosan.svg",
            isWin: false
        },
        {
            date: "2024.04.10",
            opponent: "두산 베어스",
            eaglesScore: 4,
            opponentScore: 7,
            teamLogo: "assets/logos/doosan.svg",
            isWin: false
        },
        {
            date: "2024.04.11",
            opponent: "두산 베어스",
            eaglesScore: 3,
            opponentScore: 0,
            teamLogo: "assets/logos/doosan.svg",
            image: "assets/games/20240411.webp",
            scoreboardImage: "assets/games/20240411_gb.png",
            isWin: true
        },
        {
            date: "2024.04.12",
            opponent: "기아 타이거즈",
            eaglesScore: 4,
            opponentScore: 8,
            teamLogo: "assets/logos/kia.svg",
            isWin: false
        }
        ,
        {
            date: "2024.04.13",
            opponent: "기아 타이거즈",
            eaglesScore: 9,
            opponentScore: 11,
            teamLogo: "assets/logos/kia.svg",
            isWin: false
        },
        {
            date: "2024.04.14",
            opponent: "기아 타이거즈",
            eaglesScore: 2,
            opponentScore: 5,
            teamLogo: "assets/logos/kia.svg",
            isWin: false
        },
        {
            date: "2024.04.16",
            opponent: "NC 다이노스",
            eaglesScore: 7,
            opponentScore: 4,
            teamLogo: "assets/logos/nc.svg",
            image: "assets/games/20240416.webp",
            scoreboardImage: "assets/games/20240416_gb.png",
            isWin: true
        },
        {
            date: "2024.04.17",
            opponent: "NC 다이노스",
            eaglesScore: 3,
            opponentScore: 4,
            teamLogo: "assets/logos/nc.svg",
            isWin: false
        },
        {
            date: "2024.04.18",
            opponent: "NC 다이노스",
            teamLogo: "assets/logos/nc.svg",
            isCanceled: true
        },
        {
            date: "2024.04.19",
            opponent: "삼성 라이온스",
            eaglesScore: 6,
            opponentScore: 1,
            teamLogo: "assets/logos/samsung.svg",
            image: "assets/games/20240419.jpg",
            scoreboardImage: "assets/games/20240419_gb.png",
            isWin: true
        }
    ];

    const container = document.getElementById('games-container');
    
    gamesData.forEach(game => {
        const card = document.createElement('div');
        
        if (game.isCanceled) {
            card.className = 'game-card canceled-card';
            card.innerHTML = `
                <div class="game-info">
                    <div class="left-info">
                        <div class="game-date">${game.date}</div>
                        <div class="vs-team">
                            <span class="vs-text">VS.</span>
                            <img src="${game.teamLogo}" class="team-logo" alt="${game.opponent}">
                            <span class="team-name opponent-name">${game.opponent}</span>
                        </div>
                    </div>
                    <div class="score">경기취소</div>
                </div>
            `;
        } else {
            card.className = `game-card ${game.isWin ? 'win-card' : 'loss-card'}`;
            
            if (game.isWin && game.image) {
                card.style.backgroundImage = `url(${game.image})`;
                card.style.backgroundSize = 'cover';
                card.style.backgroundPosition = 'center';
                
                if (game.scoreboardImage) {
                    card.style.setProperty('--scoreboard-image', `url(${game.scoreboardImage})`);
                }
            }
            
            card.innerHTML = `
                <div class="game-info">
                    <div class="left-info">
                        <div class="game-date">${game.date}</div>
                        <div class="vs-team">
                            <span class="vs-text">VS.</span>
                            <img src="${game.teamLogo}" class="team-logo" alt="${game.opponent}">
                            <span class="team-name opponent-name">${game.opponent}</span>
                        </div>
                    </div>
                    <div class="score">
                        ${game.eaglesScore}<span class="opponent">-${game.opponentScore}</span>
                    </div>
                </div>
            `;
        }
        
        container.appendChild(card);
    });    
});